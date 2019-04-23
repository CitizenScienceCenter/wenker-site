<template>
    <div class="search-select">

        <div ref="input" class="custom-input" :class="{'disabled':disabled}">
            <input type="text" ref="answer"
                :placeholder="placeholder"
                v-model="inputValue"
                v-on:keyup.prevent="handleInputKeys"
                @click.prevent="!showResults ? showResults = true : showResults = false"
                @blur="inputBlur"
                :tabindex="tabindex"
            />
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
            </svg>
        </div>

        <div v-show="showResults && maxOptionIndex >= 0" ref="results" class="results">
            <ul @click="clickOnResults">

                <template v-for="(option,index) in filteredOptionTree">
                    <li :ref="'option_'+option.startId"
                        @click="optionClick( (option.startId) )"
                        :class="{
                            'focused' : focusedOptionIndex === option.startId
                        }"
                        class="region">
                        {{ option.label }}
                    </li>

                    <template v-if="townSelection">
                        <li v-for="(town,index) in option.towns"
                            :ref="'option_'+(index+option.startId+1)"
                            @click="optionClick( (index+option.startId+1) )"
                            :class="{
                                'focused' : focusedOptionIndex === index+option.startId+1
                            }"
                            class="town">
                            {{ town }}
                        </li>
                    </template>
                </template>

            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SearchSelect",
        data() {
            return {
                focusedOptionIndex: 0,
                maxOptionIndex: 0,
                inputValue: '',
                returnObject: {},
                showResults: false
            }
        },
        props: {
            value: {
                type: Object,
                default: function() { return {} }
            },
            placeholder: {
                type: String,
                default: ''
            },
            regionOptionTree: {
                type: Array,
                default: function () { return [] }
            },
            townSelection: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            tabindex: {
                type: String,
                default: undefined
            }
        },
        mounted() {
            window.addEventListener("resize", this.resize);
            window.addEventListener("scroll", this.scroll);
        },
        watch: {
            showResults: function(to, from) {
                if( to ) {
                    const self = this;
                    self.setResultSize();
                }
            },
            returnObject( to, from ){
                this.$emit('input', this.returnObject );
            },
            inputValue: function(to, from) {

                if( this.inputValue !== '' ) {
                    if( this.value ) {

                        if( this.townSelection ) {
                            if( this.inputValue !== this.value.label ) {
                                this.showResults = true;
                            }
                            else {
                                this.showResults = false;
                            }
                        }
                        else {
                            let self = this;
                            let canton = this.regionOptionTree.find( function(option) {
                                return option.value === self.value.canton;
                            });

                            if( this.inputValue !== canton.label ) {
                                this.showResults = true;
                            }
                            else {
                                this.showResults = false;
                            }
                        }

                    }
                    else {
                        this.showResults = true;
                    }
                }
                else {
                    this.showResults = false;
                }

                this.$refs.results.scrollTop = 0;

            },
            value(to,from) {
                if( !this.townSelection && this.value.type === 'town' ) {
                    let self = this;
                    let canton = this.regionOptionTree.find( function(option) {
                        return option.value === self.value.canton;
                    });
                    this.inputValue = canton.label;
                }
                else {
                    this.inputValue = to.label;
                }
            }
        },
        computed: {
            filteredOptionTree: function() {

                if( this.regionOptionTree.length > 0 ) {

                    let filteredTree = [];

                    for( let i = 0; i < this.regionOptionTree.length; i++ ) {

                        let includeRegion = false;
                        let towns;

                        if( this.regionOptionTree[i].label.toUpperCase().includes( this.inputValue.toUpperCase() )) {
                            // all towns
                            includeRegion = true;
                            if( this.townSelection ) {
                                towns = this.regionOptionTree[i].towns;
                            }
                        }
                        else if( this.townSelection ) {
                            if( this.regionOptionTree[i].towns ) {
                                let self = this;
                                towns = this.regionOptionTree[i].towns.filter( function(town) {

                                    if( town.toUpperCase().includes( self.inputValue.toUpperCase() ) ) {
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }

                                } );
                            }

                            if( towns && towns.length > 0 ) {
                                includeRegion = true;
                            }
                        }

                        if( includeRegion ) {

                            let startId;
                            if( filteredTree.length === 0 ) {
                                startId = 0;
                            }
                            else {
                                if( filteredTree[ filteredTree.length-1 ].towns ) {
                                    startId = filteredTree[ filteredTree.length-1 ].startId + filteredTree[ filteredTree.length-1 ].towns.length + 1;
                                }
                                else {
                                    startId = filteredTree[ filteredTree.length-1 ].startId + 1;
                                }
                            }
                            filteredTree.push( {'value': this.regionOptionTree[i].label, 'label': this.regionOptionTree[i].label, 'lang': this.regionOptionTree[i].lang, 'towns':towns, 'startId': startId } );

                        }


                    }


                    if( filteredTree.length > 0 ) {

                        if( filteredTree[0].label.toUpperCase().includes( this.inputValue.toUpperCase() ) ) {
                            this.focusedOptionIndex = 0;
                        }
                        else {
                            this.focusedOptionIndex = 1;
                        }

                        if( filteredTree[ filteredTree.length-1 ].towns ) {
                            this.maxOptionIndex = filteredTree[filteredTree.length-1].startId + filteredTree[filteredTree.length-1].towns.length;
                        }
                        else {
                            this.maxOptionIndex = filteredTree[filteredTree.length-1].startId;
                        }

                    }

                    return filteredTree;

                }
                else {
                    return {}
                }
            }
        },
        methods: {
            setResultSize() {


                let inputRect = this.$refs.input.getBoundingClientRect();

                let maxHeight;
                if( window.innerHeight - (inputRect.y+inputRect.height/2) > window.innerHeight/2 ) {
                    //downwards
                    maxHeight = window.innerHeight- (inputRect.y+inputRect.height);
                    this.$refs.results.classList.remove('upwards');
                }
                else {
                    //upwards
                    maxHeight = inputRect.y;
                    this.$refs.results.classList.add('upwards');
                }

                maxHeight *= 0.8;
                this.$refs.results.style.maxHeight = maxHeight+'px';


            },
            resize() {
              if( this.showResults ) {
                  this.setResultSize();
              }
            },
            scroll() {
                if( this.showResults ) {
                    this.setResultSize();
                }
            },
            setAnswerFocus() {

                if( window.innerWidth >= 1024 ) {
                    this.$refs.answer.focus();
                }

            },
            inputBlur: function() {
                const self = this;
                setTimeout(function(){
                    self.showResults = false;
                }, 500);
            },
            clickOnResults: function() {
                this.setAnswerFocus();
            },
            optionClick(id) {
                this.focusedOptionIndex = id;
                this.selectOptionById(id);
            },
            selectOptionById(id) {

                let counter = 0;
                let found = false;

                for( let i = 0; i < this.filteredOptionTree.length; i++ ) {

                    if( found ) {
                        break;
                    }

                    if( counter === id ) {
                        this.returnObject = { 'label': this.filteredOptionTree[i].label, 'type':'canton', 'canton': this.filteredOptionTree[i].value };
                        found = true;
                    }
                    else if( this.filteredOptionTree[i].towns ) {
                        for( let j = 0; j < this.filteredOptionTree[i].towns.length; j++ ) {
                            counter++;
                            if( counter === id ) {
                                this.returnObject = { 'label': this.filteredOptionTree[i].towns[j], 'type':'town', 'canton': this.filteredOptionTree[i].value };
                                found = true;
                                break;
                            }
                        }
                    }
                    counter++;
                }

                this.inputValue = this.returnObject.label;
            },
            handleInputKeys: function(event) {
                if( this.showResults ) {

                    switch(event.key) {
                        case 'ArrowDown':
                            if( this.focusedOptionIndex < this.maxOptionIndex ) {
                                this.focusedOptionIndex++;

                                if( this.$refs['option_'+this.focusedOptionIndex][0].offsetTop + this.$refs['option_'+this.focusedOptionIndex][0].offsetHeight - this.$refs.results.scrollTop > this.$refs.results.offsetHeight ) {
                                    this.$refs.results.scrollTop = this.$refs['option_'+this.focusedOptionIndex][0].offsetTop - ( this.$refs.results.offsetHeight - this.$refs['option_'+this.focusedOptionIndex][0].offsetHeight );
                                }

                            }
                            break;
                        case 'ArrowUp':
                            this.$refs.answer.setSelectionRange(this.inputValue.length,this.inputValue.length);
                            if( this.focusedOptionIndex > 0 ) {
                                this.focusedOptionIndex--;

                                if( this.$refs['option_'+this.focusedOptionIndex][0].offsetTop < this.$refs.results.scrollTop ) {
                                    this.$refs.results.scrollTop = this.$refs['option_'+this.focusedOptionIndex][0].offsetTop;
                                }

                            }
                            else {
                                this.$refs.results.scrollTop = 0;
                            }
                            break;
                        case 'Tab':
                        case 'Enter':
                            if( this.$refs['option_'+this.focusedOptionIndex][0] ) {
                                this.selectOptionById(this.focusedOptionIndex);
                            }
                            break;
                        case 'Escape':
                            this.showResults = false;
                            break;
                    }
                }
            }
        }
    }
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .search-select {
        position: relative;

        .custom-input {

            input {
                padding-right: 32px!important;
            }

            svg {
                position: absolute;
                top: 13px;
                right: 10px;
                height: 12px;
                fill: $color-black;
                pointer-events: none;
            }

            &.disabled {
                pointer-events: none;
                opacity: 0.25;
            }

            input.italic {
                font-style: italic;
            }
        }

        .results {

            z-index: 100;
            position: absolute;
            top: 40px;
            left: 0;
            width: 100%;
            overflow: hidden;
            overflow-y: scroll;

            background: white;
            border-radius: $border-radius;
            box-shadow: 0px 0px 12px -4px rgba($color-black, 0.4);

            &.upwards {
                top: auto;
                bottom: 40px;
            }

            ul {

                li {
                    margin: 0;
                    padding: $spacing-1 $spacing-2;
                    line-height: 1.5;
                    color: $color-black-tint-40;

                    &.label {
                        font-size: $font-size-small;
                        font-weight: 700;
                        color: $color-black;
                        line-height: 2;
                    }

                    &:before {
                        display: none;
                    }

                    &.focused {
                        background: $color-primary;
                        color: white;
                    }

                    cursor: pointer;

                    &.region {
                        font-weight: bold;
                    }
                    &.town {
                        padding-left: $spacing-4;
                    }

                }
            }
        }
    }

    @media only screen and (min-width: $viewport-tablet-portrait) {

        .search-select {

            .results {
                top: 48px;

                &.upwards {
                    bottom: 48px;
                }

            }

        }

    }


</style>

<i18n>
{
"de": {
    "label-region-town": "Ihre Region oder Stadt",
    "label-region-only": "Ihre Region",
    "label-age": "Ihr Alter"
},
"en": {
    "label-region-town": "Your Region or City",
    "label-region-only": "Your Region",
    "label-age": "Your Age"
}
}
</i18n>

<template>
    <div class="prereq">
        <div class="form-field form-field-block">
            <label v-if="townSelection">{{ $t('label-region-town') }}</label>
            <label v-else>{{ $t('label-region-only') }}</label>
            <region-select
                    placeholder="Bitte wählen ..."
                    :regionOptionTree="regionOptionTree"
                    :townSelection="townSelection"
                    v-model="regionObject"
                    tabindex="1">
            </region-select>
        </div>

        <div v-bind:class="{'invalid': !details.age}" class="form-field form-field-block">
            <label>{{ $t('label-age') }}</label>
            <div class="custom-select">
                <option disabled selected hidden>{{ $t('placeholder-age') }}</option>
                <select v-model="details.ageRange" name="range" id="range" tabindex="2">
                    <option :key="a.value" v-for="a in ageRange" :value="a.value">{{a.label}}</option>
                </select>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                   <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
            <p class="message error" v-if="errors.age">{{ $t('error-age') }}</p>
        </div>

  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import RegionSelect from '@/components/RegionSelect.vue'

    export default {
        name: 'ActivityDetailsForm',
        components: {
            RegionSelect
        },
        props: {
            activity: {
                type: Object
            },
            allRegions: {
                type: Boolean,
                default: false
            },
            townSelection: {
                type: Boolean,
                default: false
            },
            errors: {
                type: Object,
                default: () => {
                    return {age: false, canton: false}
                }
            }
        },
        data() {
            return {
                details: {
                    ageRange: undefined,
                    canton: undefined,
                    town: undefined
                },
                taskCount: 0,
                regionObject: undefined
            }
        },
        watch: {
            regionObject(to, from) {

                if (Object.keys(to).length === 3) {
                    //console.log('set canton');
                    this.details.canton = this.regionObject.canton;
                    if (this.regionObject.type === 'town') {
                        //console.log('set town');
                        this.details.town = this.regionObject.label
                    }
                    else {
                        this.details.town = undefined;
                    }
                }
                else {
                    this.details.canton = undefined;
                    this.details.town = undefined;
                }

                // check task counts
                if (this.activity && this.activity.id) {
                    this.checkTaskCount(this.activity.id);
                }

                // update user info
                this.updateUserInfo( [{'canton': this.details.canton},{'town':this.details.town}] );

            },
            'activity'(to, from) {
                if (this.user && this.user.info && this.activity) {
                    this.checkTaskCount(to.id );
                }
            },
            /*
            'user.info'(to, from) {
                console.log( 'user info change from:');
                console.log( from );
                console.log( 'to:' );
                console.log( to );
                if (to.hasOwnProperty('ageRange')) this.errors.age = false;
                if (to.hasOwnProperty('canton')) this.errors.canton = false;
            },
            'details.canton'(to, from) {
                console.log( 'details.canton change from:');
                console.log( from );
                console.log( 'to:' );
                console.log( to );
                if (this.activity && this.activity.id) {
                    this.checkTaskCount(this.activity.id);
                }
                this.updateUserInfo('canton', to)
            },
            'details.town'(to, from) {
                console.log( 'details.town change from:');
                console.log( from );
                console.log( 'to:' );
                console.log( to );
                this.updateUserInfo('town', to)
            },
            */
            'details.ageRange'(to, from) {
                //console.log('ageRange change');
                this.updateUserInfo([{'ageRange':to}])
            }
        },
        computed: {
            ...mapState({
                regions: state => state.consts.swissCantons,
                otherRegions: state => state.consts.otherRegions,
                ageRange: state => state.consts.ageRange,
                user: state => state.c3s.user.currentUser
            }),
            regionOptionTree() {
                if (this.allRegions) {
                    return this.regions.concat(this.otherRegions);
                }
                else {
                    return this.regions;
                }
            }
        },
        mounted() {
            if (this.user && this.user.info) {
                this.details = this.user.info;

                if (this.activity && this.activity.id) {

                    this.checkTaskCount(this.activity.id);

                    // set region select value

                    if( this.details.town && this.details.canton ) {
                        //console.log('town and canton available');
                        this.regionObject = { 'label':this.details.town, 'type':'town', 'canton':this.details.canton };
                    }
                    else if ( this.details.canton ) {
                        //console.log('only canton available');
                        let self = this;
                        let canton = this.regionOptionTree.find( function(canton){
                            return canton.value === self.details.canton;
                        });

                        console.log( this.regionOptionTree );
                        console.log( this.details.canton );

                        this.regionObject = { 'label':canton.label, 'type':'canton', 'canton':this.details.canton };
                    }

                }
            }
        },
        methods: {
            updateUserInfo( keyValuePairs ) {
                let updatedUser = Object.assign({}, this.user['info']);

                for( let i = 0; i < keyValuePairs.length; i++ ) {
                    let key = Object.keys(keyValuePairs[i] )[0];
                    updatedUser[key] = keyValuePairs[i][key];
                }
                this.$store.dispatch('c3s/user/updateUser', [this.user.id, {'info': updatedUser}]).then(u => {
                    console.log('User Details Updated')
                })
            },
            checkTaskCount(activityID) {

                const taskQuery = {
                    "select": {
                        "fields": [
                            "*"
                        ],
                        "tables": [
                            "tasks"
                        ]
                    },
                    "where": {
                        "activity_id": {
                            "op": "e",
                            "val": activityID
                        }
                    },
                };
                if (this.details.canton) {
                    taskQuery['where']["info ->> 'SchoolState'"] = {
                        'op': 'e',
                        'val': this.details.canton,
                        "join": "a"
                    }
                }
                if (this.details.town && this.townSelection) {
                    taskQuery['where']["info ->> 'SchoolPlace'"] = {'op': 'e', 'val': this.details.town, "join": "a"}
                }
                this.$store.dispatch('c3s/task/getTaskCount', taskQuery).then(c => {
                    this.taskCount = c.body.length
                })
            }
        }
    }

</script>

<style lang="scss">
</style>

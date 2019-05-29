<i18n>
{
"de": {
    "label-region": "Region",
    "label-town": "Stadt",
    "label-please-select": "Bitte wählen ..."
},
"en": {
    "label-region": "Region",
    "label-town": "Town",
    "label-please-select": "Please select ..."
}
}
</i18n>

<template>
    <div class="prereq">

        <div class="form-field form-field-block">
            <label>{{ $t('label-region') }}</label>
            <div class="custom-select">
                <select :class="{placeholder:!details.canton}" v-model="details.canton">
                    <option :value="undefined" disabled selected>{{ $t('label-please-select') }}</option>
                    <option v-for="(region, index) in displayedRegions" :value="region.label" :key="'region_'+index">{{ region.label }}</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
        </div>

        <div class="form-field form-field-block" :class="{disabled: !displayedTowns || displayedTowns.length <= 0 }">
            <label>{{ $t('label-town') }}</label>
            <div class="custom-select">
                <select :class="{placeholder:!details.town}" v-model="details.town">
                    <option :value="undefined" disabled selected>{{ $t('label-please-select') }}</option>
                    <option v-for="(town, index) in displayedTowns" :value="town" :key="'town_'+index">{{ town }}</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
        </div>

  </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'ActivityDetailsForm',
        components: {
        },
        props: {
            activity: {
                type: String
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
                    canton: undefined,
                    town: undefined,
                },
                taskCount: 0
            }
        },
        watch: {
            'details.canton'() {
                if( this.details.canton ) {
                    this.$store.dispatch('settings/setCanton', this.details.canton);
                    // if(!this.details.town) {
                        this.checkTaskCount( this.activity );
                    // }
                }
                else {
                    this.taskCount = 0;
                }
            },
            'details.town'() {
                if( this.details.town ) {
                    // this.checkTaskCount( this.activity );
                    this.$store.dispatch('settings/setTown', this.details.town);
                    this.checkTaskCount( this.activity );
                }
            }
        },
        computed: {
            ...mapState({
                regions: state => state.consts.swissCantons,
                otherRegions: state => state.consts.otherRegions,
                ageRange: state => state.consts.ageRange,
                user: state => state.c3s.user.currentUser,
                transcription: state => state.settings.transcription
            }),
            displayedRegions() {
                let self = this;
                let regions = this.regions.filter( function(element) {
                    return element.towns.length > 0;
                });

                regions.sort( function(a, b) {
                    if ( a.label < b.label ){
                        return -1;
                    }
                    if ( a.label > b.label ){
                        return 1;
                    }
                    return 0;
                });

                return regions;
            },
            displayedTowns() {
                if( this.details.canton ) {
                    let self = this;
                    let selectedRegion = this.regions.find(function(element) {
                        return element.label === self.details.canton;
                    });

                    let towns = [ ...selectedRegion.towns ];
                    towns.sort();

                    return towns;
                }
                else {
                    return undefined;
                }
            }
        },
        mounted() {
            /*
            if (this.user && this.user.info) {
                this.details = this.user.info;

                if (this.activity && this.activity.id) {

                    this.checkTaskCount(this.activity.id);

                }
            }
            */

            if (this.transcription) {
                this.details.canton = this.transcription.canton;
                this.details.town = this.transcription.town;
            }
        }, created() {
            this.checkTaskCount(this.activity);
        },
        methods: {
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
                if (this.details.town) {
                    taskQuery['where']["info ->> 'SchoolPlace'"] = {'op': 'e', 'val': this.details.town, "join": "a"}
                }


                let self = this;
                this.$store.dispatch('c3s/task/getTaskCount', taskQuery).then(c => {
                    // console.log(this.details)
                    this.taskCount = c.body;

                })
            }
        }
    }

</script>

<style lang="scss">
</style>

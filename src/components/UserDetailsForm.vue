<i18n>
{
"de": {
    "label-region-town": "Region oder Stadt",
    "label-region-only": "Region",
    "label-age": "Ihr Alter",
    "label-region": "Region",
    "label-town": "Stadt",
    "label-please-select": "Bitte wählen ..."
},
"en": {
    "label-region-town": "Region or City",
    "label-region-only": "Region",
    "label-age": "Your Age",
    "label-region": "Region",
    "label-town": "Town",
    "label-please-select": "Please select ..."
}
}
</i18n>

<template>
    <div class="prereq">

        <div class="form-field form-field-block">
            <label>Region</label>
            <div class="custom-select">
                <select :class="{placeholder:!details.canton}" v-model="details.canton">
                    <option :value="undefined" disabled selected>Bitte wählen ...</option>
                    <option v-for="(region, index) in displayedRegions" :value="region.label" :key="'region_'+index">{{ region.label }}</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
            <br>
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

    export default {
        name: 'ActivityDetailsForm',
        components: {
        },
        props: {
            activity: {
                type: Object
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
                }
            }
        },
        watch: {
            'details.canton'(to, from) {
                // update user info
                this.updateUserInfo( [{'canton': this.details.canton}] );
            },
            'details.ageRange'(to, from) {
                //console.log('ageRange change');
                this.updateUserInfo( [{'ageRange':to}] );
            },
            'details.town'(to, from) {
                this.updateUserInfo( [{'town':to}] );
            }
        },
        computed: {
            ...mapState({
                regions: state => state.consts.swissCantons,
                otherRegions: state => state.consts.otherRegions,
                ageRange: state => state.consts.ageRange,
                user: state => state.c3s.user.currentUser,
                lang: state => state.settings.language
            }),
            displayedRegions() {
                let regions = [ ...this.regions ];
                regions.sort( function(a, b) {
                    if ( a.label < b.label ){
                        return -1;
                    }
                    if ( a.label > b.label ){
                        return 1;
                    }
                    return 0;
                });
                let label = this.lang === 'de' ? 'Anderes Land' : 'Other Country'
                regions.unshift({
                    'label': label,
                    'value': 'Anderes Land'
                })
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
            if( this.user.info.canton ) {
              this.details.canton = this.user.info.canton;
            }
            if( this.user.info.ageRange ) {
                this.details.ageRange = this.user.info.ageRange;
            }
            if( this.user.info.town) {
                this.details.town = this.user.info.town;
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
                    console.log('User Details Updated');
                })
            }
        }
    }

</script>

<style lang="scss">
</style>

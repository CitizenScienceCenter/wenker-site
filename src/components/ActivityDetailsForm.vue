<i18n>
    {
    "de": {
    "label-region": "Region Ihres Dialekts",
    "error-region": "Ihre Region ist erforderlich",
    "label-town": "Dorf Ihres Dialekts",
    "label-age": "Ihr Alter",
    "error-age": "Ihre Altersgruppe ist erforderlich"
    },
    "en": {
    "label-region": "Region of your dialect",
    "error-region": "Region is required",
    "label-town": "Town of your dialect",
    "label-age": "Your age",
    "error-age": "Age is required"
    }
    }
</i18n>

<template>
    <div class="prereq">
        <div v-bind:class="{'invalid': !details.canton}" class="form-field form-field-block">
            <label>{{ $t('label-region') }}</label>
            <div class="custom-select">
                <select v-model="details.canton" name="canton" id="canton">
                    <option :key="r.value" v-for="r in regions" :value="r.label">{{r.label}}</option>
                    <template v-if="allRegions">
                        <option disabled>--------------</option>
                        <option :key="o.value" v-for="o in otherRegions" :value="o.value">{{o.label}}</option>
                    </template>
                </select>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                   <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
            <p class="message error" v-if="errors.canton">{{ $t('error-region') }}</p>
        </div>
        <div v-if='towns.length' class="form-field form-field-block">
            <label>{{ $t('label-town') }}</label>
            <div class="custom-select">
                <select v-model="details.town" name="canton" id="canton">
                    <option :key="r" v-for="(k, r) in towns" :value="k">{{k}}</option>
                </select>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                   <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
        </div>
        <div v-bind:class="{'invalid': !details.age}" class="form-field form-field-block">
            <label>{{ $t('label-age') }}</label>
            <div class="custom-select">
                <option disabled selected hidden>{{ $t('placeholder-age') }}</option>
                <select v-model="details.ageRange" name="range" id="range">
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
        props: {
            activity: {
                type: Object
            },
            allRegions: {
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
                towns: []
            }
        },
        watch: {
            'user.info'(to, from) {
                if (to.hasOwnProperty('ageRange')) this.errors.age = false;
                if (to.hasOwnProperty('canton')) this.errors.canton = false;
            },
            'details.canton'(to, from) {
                if (this.activity && this.activity.id) {
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
                                "val": this.activity.id
                            }
                        },
                    };
                    taskQuery['where']["info ->> 'SchoolState'"] = {'op': 'e', 'val': to, "join": "a"}
                    if (this.details.town) {
                        taskQuery['where']["info ->> 'SchoolPlace'"] = {'op': 'e', 'val': this.user.info.town, "join": "a"}
                    }
                    this.$store.dispatch('c3s/task/getTaskCount', taskQuery).then(c => {
                        this.taskCount = c.body.length
                    })
                }
                this.updateUserInfo('canton', to)
                this.getTowns(to)
            },
            'details.ageRange'(to, from) {
                this.updateUserInfo('ageRange', to)
            },
            'details.town'(to, from) {
                this.updateUserInfo('town', to)
            }
        },
        computed: mapState({
            regions: state => state.consts.swissCantons,
            otherRegions: state => state.consts.otherRegions,
            ageRange: state => state.consts.ageRange,
            user: state => state.c3s.user.currentUser
        }),
        mounted() {
            if (this.user && this.user.info && this.user.info.ageRange) {
                this.details = this.user.info;
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
                                "val": this.activity.id
                            }
                        },
                    };
                    taskQuery['where']["info ->> 'SchoolState'"] = {'op': 'e', 'val': this.user.info.canton, "join": "a"}
                    if (this.details.town) {
                        taskQuery['where']["info ->> 'SchoolPlace'"] = {'op': 'e', 'val': this.details.town, "join": "a"}
                    }
                    this.$store.dispatch('c3s/task/getTaskCount', taskQuery).then(c => {
                        this.taskCount = c.body.length
                        console.log(c)
                    })
            }
        },
        methods: {
            updateUserInfo(key, value) {
                // TODO deploy update to store (get user info and assign)
                let updatedUser = Object.assign({}, this.user['info'])
                updatedUser[key] = value
                this.$store.dispatch('c3s/user/updateUser', [this.user.id, {'info': updatedUser}]).then(u => {
                    console.log('User Details Updated')
                })
            },
            getTowns(canton) {
                console.log(canton)
                let cantonIndex = this.regions.findIndex((element) => {
                    return element.label === canton
                })
                if (cantonIndex !== -1) {
                    this.towns = this.regions[cantonIndex]['towns'].slice().sort()
                } else {
                    this.towns = []
                    this.details.town = undefined
                }

            }
        }
    }
</script>

<style lang="scss">
</style>

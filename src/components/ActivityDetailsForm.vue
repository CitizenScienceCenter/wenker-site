<i18n>
    {
    "de": {
    "label-region": "Region Ihres Dialekts",
    "error-region": "Ihre Region ist erforderlich",
    "label-age": "Ihr Alter",
    "error-age": "Ihre Altersgruppe ist erforderlich"
    },
    "en": {
    "label-region": "Region of your dialect",
    "error-region": "Region is required",
    "label-age": "Your age",
    "error-age": "Age is required"
    }
    }
</i18n>

<template>
    <div class="prereq">
        <div class="form-field" v-bind:class="{'invalid': !details.canton}">
            <label>{{ $t('label-region') }}</label>
            <div class="custom-select">
                <select id="canton" name="canton" v-model="details.canton">
                    <option :key="r.value" :value="r.label" v-for="r in regions">{{r.label}}</option>
                    <template v-if="allRegions">
                        <option disabled>--------------</option>
                        <option :key="o.value" :value="o.value" v-for="o in otherRegions">{{o.label}}</option>
                    </template>
                </select>
                <svg style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
                     xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
            <p class="error" v-if="errors.canton">{{ $t('error-region') }}</p>
        </div>
        <div class="form-field" v-bind:class="{'invalid': !details.age}">
            <label>{{ $t('label-age') }}</label>
            <div class="custom-select">
                <option disabled hidden selected>{{ $t('placeholder-age') }}</option>
                <select id="range" name="range" v-model="details.ageRange">
                    <option :key="a.value" :value="a.value" v-for="a in ageRange">{{a.label}}</option>
                </select>
                <svg style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
                     xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
            <p class="error" v-if="errors.age">{{ $t('error-age') }}</p>
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
                    canton: undefined
                },
                taskCount: 0
            }
        },
        watch: {
            'user.info'(to, from) {
                if (to.hasOwnProperty('ageRange')) this.errors.age = false;
                if (to.hasOwnProperty('canton')) this.errors.canton = false;
            },
            'activity'(to, from) {
                if (this.user && this.user.info) {
                    this.checkTaskCount(to.id, this.activity.id);
                }
            },
            'details.canton'(to, from) {
                if (this.activity && this.activity.id) {
                    this.checkTaskCount(this.activity.id, to);
                }
                this.updateUserInfo('canton', to)
            },
            'details.ageRange'(to, from) {
                this.updateUserInfo('ageRange', to)
            }
        },
        computed: mapState({
            regions: state => state.consts.swissCantons,
            otherRegions: state => state.consts.otherRegions,
            ageRange: state => state.consts.ageRange,
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity
        }),
        mounted() {
            if (this.user && this.user.info && this.user.info.ageRange) {
                this.details = this.user.info;
                if (this.activity && this.activity.id) {
                    this.checkTaskCount(this.activity.id, this.user.info.canton);
                }
            }
        },
        methods: {
            updateUserInfo(key, value) {
                // TODO deploy update to store (get user info and assign)
                let updatedUser = Object.assign({}, this.user['info']);
                updatedUser[key] = value;
                this.$store.dispatch('c3s/user/updateUser', [this.user.id, {'info': updatedUser}]).then(u => {
                    console.log('User Details Updated')
                })
            },
            checkTaskCount(activityID, canton) {
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
                taskQuery['where']["info ->> 'SchoolState'"] = {'op': 'e', 'val': canton, "join": "a"};
                this.$store.dispatch('c3s/task/getTaskCount', taskQuery).then(c => {
                    this.taskCount = c.body.length
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-field {
        display: block;
    }
</style>

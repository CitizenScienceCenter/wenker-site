<i18n>
    {
    "de": {
    "label-email": "Email",
    "label-password": "Passwort",
    "button-login": "Anmelden",
    "button-forgotten": "Passwort vergessen?"
    },
    "en": {
    "label-email": "Email",
    "label-password": "Password",
    "button-login": "Anmelden",
    "button-forgotten": "Passwort vergessen?"
    }
    }
</i18n>


<template>
    <div>
        <form @submit.prevent="login">
            <div class="form-field">
                <label for="email">{{ $t('label-email') }}</label>
                <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading"/>
            </div>

            <div class="form-field">
                <label for="password">{{ $t('label-password') }}</label>
                <input v-model="password" type="password" id="password" name="password" autocomplete="password"
                       :disabled="loading"/>
            </div>

            <button type="submit" class="button button-primary" :disabled="loading">{{ $t('button-login') }}</button>
            <span class="error" v-if="error">{{error}}</span>
        </form>
        <br>
        <button @click="reset" class="button button-secondary" :disabled="loading">{{ $t('button-forgotten') }}</button>
    </div>
</template>

<script>
    import _default, {mapState, mapGetters} from 'vuex'

    export default {
        name: 'LoginForm',
        data() {
            return {
                msg: 'Please login here',
                email: '',
                password: '',
                username: '',
                success: false,
                error: false
            }
        },
        computed: mapState({
            currentUser: state => state.c3s.user.currentUser,
            loading: state => state.c3s.settings.loading,
        }),
        watch: {
            'currentUser'(to, from) {
                // console.log(to)
                if (to !== null || to !== undefined) {
                }
            }
        },
        mounted() {
            // TODO errors should be in a global state and cleared on load
            // this.$store.commit('settings/SET_ERROR', null)
        },
        methods: {
            login() {
                this.error = null;
                this.$store
                    .dispatch('c3s/user/login', {user: {email: this.email, pwd: this.password}})
                    .then(user => {
                        if (user.status === 200) {
                            this.$router.push({name: 'Home'})
                        } else {
                            this.error = 'Login failed'
                        }
                    })
            },
            reset() {
                this.$router.push({name: 'ResetRequest'})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .form-field {
        display: block;
    }

</style>

<i18n>
    {
    "de": {
    "label-email": "Email",
    "label-password": "Passwort",
    "label-password-repeat": "Passwort wiederholen",
    "button-register": "Registrieren"
    },
    "en": {
    "label-email": "Email",
    "label-password": "Password",
    "label-password-repeat": "Repeat Password",
    "button-register": "Register"
    }
    }
</i18n>


<template>

    <form @submit.prevent="register">
        <div class="form-field">
            <label for="email">{{ $t("label-email") }}</label>
            <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading"/>
            <span class="error" v-if="errors.empty">Du musst eine E-Mail angeben.</span>
        </div>

        <div class="form-field">
            <label for="password">{{ $t("label-password") }}</label>
            <input v-model="password" type="password" id="password" name="password" autocomplete="password"
                   :disabled="loading"/>
            <span class="error" v-if="errors.len">Muss mehr als 8 Zeichen lang sein.</span>
        </div>
        <div class="form-field">
            <label for="password">{{ $t("label-password-repeat") }}</label>
            <input v-model="confPassword" type="password" id="password" name="password" autocomplete="password"
                   :disabled="loading"/>
            <span class="error" v-if="errors.match">Passwörter stimmen nicht überein</span>
        </div>

        <button type="submit" class="button button-primary" :disabled="loading">Registrieren</button>
        <span class="error" v-if="errors.server">User already exists or server error occurred</span>
    </form>

</template>

<script>
    import {mapState, mapGetters} from "vuex"

    export default {
        name: "RegisterForm",
        data() {
            return {
                msg: "Sign up for an account",
                email: "",
                password: "",
                confPassword: "",
                userSaved: false,
                errors: {
                    empty: false,
                    match: false,
                    len: false,
                    server: false
                }
            };
        },
        computed: mapState({
            loading: state => state.settings.loading
        }),
        methods: {
            register() {
                this.errors.server = false;
                if (this.email.length > 0 && this.password.length >= 8 && this.confPassword === this.password) {
                    const user = {
                        email: this.email,
                        pwd: this.password
                    };
                    this.$store.dispatch('c3s/user/register', user).then(r => {
                        if (r.ok === true) {
                            this.$router.push({name: 'Home'})
                        } else {
                            this.errors.server = true
                        }
                    })
                } else {
                    this.errors.match = this.password !== this.confPassword
                    this.errors.len = this.password.length <= 8
                    this.errors.empty = this.email.length === 0
                    console.log(this.errors.match)
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .form-field {
        display: block;
    }
</style>

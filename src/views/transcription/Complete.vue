<template>
    <app-content-section>
        <div class="content-wrapper">

            <div class="row">
                <div class="col">

                    <div class="desc">
                        <h2> Danke. Du bist der {{ stats.contributor_count }}. Teilnehmer. </h2>
                    </div>

                </div>
            </div>

            <!-- <div class="row" v-if="user && user.username.indexOf('anon') !== -1"> -->
            <div class="row">
                <div class="col">

                    <div class="form-section">
                        <h3 class="title">Registrieren</h3>
                        <register-form></register-form>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col">

                    <button @click="startPage" class="button button-secondary">Zurück zur Startseite</button>

                </div>
            </div>

        </div>
    </app-content-section>
</template>

<script>
    import { mapState, mapGetters } from "vuex";
    import RegisterForm from "@/components/register-form.vue"
    import ContentSection from '@/components/shared/ContentSection.vue'

    export default {
        name: "Complete",
        data() {
            return {
                stats: {

                },
                user: {

                }
            };
        },
        watch: {
            project(to, from) {
                if (to === null) {
                    this.$router.push("/projects");
                }
            },
            tasks(to, from) {}
        },
        components: {
            RegisterForm,
            'app-content-section': ContentSection
        },
        computed: mapState({
        }),
        mounted() {
            // this.$store.dispatch("project/getProject", [
            //     this.$route.params.id || this.projectID,
            //     true
            // ]);
        },
        methods: {
            startPage() {
                /*
                console.log('start')
                if(this.user && this.user.username.indexOf('anon') !== -1) {
                    this.$store.dispatch('user/logout').then(() => {
                        this.$router.push({name: 'Home'})
                    })
                } else {
                    this.$router.push({name: 'Home'})
                }
                */
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

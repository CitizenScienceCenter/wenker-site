<template>
    <div>

        <section class="section-content">
            <div class="content-wrapper">

                <div class="row">
                    <div class="col col-title">

                        <div class="desc">
                            <h2> Danke. Du bist der {{ stats.contributor_count }}. Teilnehmer. </h2>
                        </div>

                    </div>
                </div>

                <div class="row" v-if="user && user.username.indexOf('anon') !== -1">
                    <div class="col col-form">

                        <div class="form-section">
                            <h3 class="title">Registrieren</h3>
                            <register-form></register-form>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col col-form">

                        <button @click="startPage" class="secondary">Zurück zur Startseite</button>

                    </div>
                </div>

            </div>
        </section>

    </div>
</template>

<script>
    import { mapState, mapGetters } from "vuex";
    import ProjectInfo from "@/components/project-info.vue"
    import RegisterForm from "@/components/register-form.vue"
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
            RegisterForm
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
                console.log('start')
                if(user && user.username.indexOf('anon') !== -1) {
                    this.$store.dispatch('user/logout').then(() => {
                        this.$router.push({name: 'Home'})
                    })
                } else {
                    this.$router.push({name: 'Home'})
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view.scss'>
</style>

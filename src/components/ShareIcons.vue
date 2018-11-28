<template>
    <div>
        <!--<i :key="s" v-for="s in services" class="fab fa-{{s}}-square" :click="handleShare(s)"></i>-->
    </div>
</template>

<script>
    export default {
        name: "ShareIcons",
        props: {
            services: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                links: {
                    twitter: 'https://twitter.com/home?status=Ich%20habe%20gerade%20zum%20Verst%C3%A4ndnis%20der%20schweizerischen%20und%20deutschen%20Dialekte%20beigetragen,%20helfen%20Sie%20mit!%20https%3A//wenker.citizenscience.ch%20%23c3s%20%23wenker',
                    facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A//wenker.citizenscience.ch',
                    envelope: 'mailto:?&subject=Hilf uns mit Wenker&body=Ich%20habe%20gerade%20zum%20Verst%C3%A4ndnis%20der%20schweizerischen%20und%20deutschen%20Dialekte%20beigetragen,%20helfen%20Sie%20mit!%20https%3A//wenker.citizenscience.ch%20'
                }
            }
        },
        methods: {
            handleShare(s) {
                window.open(
                    this.links[s],
                    '_blank' // <- This is what makes it open in a new window.
                );
            }
        }
    }
</script>

<style scoped>

</style>

<template>
   <footer>

     <section class="section-content section-content-sharing">
       <div class="content-wrapper">
         <div class="row">
           <div class="col col-title">
             <h2>Lade zum Mitmachen ein.</h2>
           </div>
         </div>
         <div class="row">
           <div class="col col-sharing">
             <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://wenker.citizenscience.ch." title="Share by Email"><img src="@/assets/img/icons/envelope.svg" alt="Email"/></a>
             <a href="https://twitter.com/intent/tweet?text=Check out this site http://wenker.citizenscience.ch."><img src="@/assets/img/icons/twitter.svg" alt="Twitter"/></a>
             <a href="https://www.facebook.com/sharer/sharer.php?u=wenker.citizenscience.ch"><img src="@/assets/img/icons/facebook-f.svg" alt="Facebook"/></a>
           </div>
         </div>
       </div>
     </section>

     <section class="section-content section-content-footer">
       <div class="content-wrapper">
         <div class="row">
           <div class="col col-footer-left">
             <a href="https://citizenscience.ch/"><img class="cscc_logo" src="@/assets/img/cscc_logo.png" alt="Citizen Science Center Zurich"/></a>
           </div>
           <div class="col col-footer-right">
             <span class="contact"><a href="maitlo:info@citizenscience.ch">info@citizenscience.ch</a></span>
             <span class="copyright">© 2018</span>
           </div>
         </div>
       </div>
     </section>

    </footer>
</template>

<script>
import _default, { mapState, mapGetters } from "vuex";
export default {
  name: "cc-footer",
  data() {
    return {};
  },
  computed: mapState({}),
  watch: {},
  mounted() {
    // TODO errors should be in a global state and cleared on load
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

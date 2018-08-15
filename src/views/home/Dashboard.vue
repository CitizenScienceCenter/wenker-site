<template>
  <div class="md-layout md-gutter md-alignment-top-space-around">
    <md-card class="img-card md-layout-item md-size-100">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-medium class="banner">
          <img src="@/assets/img/wenker-banner.jpg">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Then & Now</span>
            <span class="md-subhead">The Wenker Project</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
    <md-card class="md-pad md-layout-item md-size-40">
      <md-card-header>
        <div class="md-title">Transcription</div>
        <div class="md-subhead">Transcribe 40 sentences written 130 years ago.</div>
      </md-card-header>
      <md-card-media class="banner">
        <img src="@/assets/img/transcrip.jpg" alt="Transcription">
      </md-card-media>


      <md-card-expand>
      <md-card-actions>
          <div>
            <md-button class="md-primary" to="/projects/e4b5ebc5-47a2-430b-84a9-a03b1d4dda34">Take Part</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-accent">Learn more</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>

    <md-card class="md-pad md-layout-item md-size-40">
      <md-card-header>
        <div class="md-title">Translate</div>
        <div class="md-subhead">Translate 40 sentences into your Swiss dialect</div>
      </md-card-header>
      
      <md-card-media class="banner">
        <img src="@/assets/img/wenker-banner.jpg" alt="Translation">
      </md-card-media>


      <md-card-expand>
        <md-card-actions>
          <div>
            <md-button class="md-primary" to="/projects/507b3f89-aff1-4fa3-8f28-9c8399811539">Take Part</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-accent">Learn more</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Translate 130 year old sentences designed by Wenker to see how Swiss German has changed in the last 130 years.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
    <div class="md-layout-item md-size-15"></div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-15"></div>
  </div>
</template>

<script>
import FeaturedCarousel from '@/components/featured-carousel.vue';
import ProjectList from '@/components/project-list.vue';
export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  components: {ProjectList: ProjectList, FeaturedCarousel: FeaturedCarousel},
  mounted() {
  },
  methods: {
    loadProject(id) {
      this.$router.push({name:'ProjectView', params: id})
    }
  }
}
</script>

<style scoped src='@/assets/styles/home/dashboard.scss'>
</style>
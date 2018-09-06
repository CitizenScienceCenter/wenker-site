<template>
  <div>
    <section>
      <img src="@/assets/img/wenker-banner.jpg">
    </section>
  </div>
    
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  components: {},
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
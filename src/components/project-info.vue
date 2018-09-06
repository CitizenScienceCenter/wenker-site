<template>
    <div>
    <section>
        <div>
          <img :src="img">
        </div>

        <div>
          <span class="title">{{project_name}}</span>
        </div>
      </section>
    <section class="info" v-if="stats">
        <div class="stats tasks">
            <span class="sub-title">{{stats.task_count}} Tasks </span>
        </div>
        <div class="stats contributors">
            <span class="sub-title">{{stats.contributor_count}} Contributors </span>
        </div>
        <div class="stats submissions">
            <span class="sub-title">{{ stats.submission_count }} Submissions </span>
        </div>
    </section>
  </div>
</template>
<script>
export default {
    name: 'project-info',
    props: {
        img: {type: String},
        project_name: {type: String},
        stats: {type: Object}
    }
}
</script>
<style lang="scss" scoped>

</style>


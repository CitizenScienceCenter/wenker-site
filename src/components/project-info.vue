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
/**
 * A header section to display information about a project
 * and the associated stats
 * 
 * @author encima
 */
export default {
    name: 'project-info',
    props: {
        /**
         * Cover Image
         */
        img: {type: String},
        /**
         * Project Name
         */
        project_name: {type: String},
        /**
         * Statistics from stats API endpoint
         */
        stats: {type: Object}
    }
}
</script>
<style lang="scss" scoped>

</style>


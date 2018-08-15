 <template>
  <div>
    <project-list :title="'My Projects'" :projects="projects"></project-list>
    <md-button class="md-fab md-primary md-fab-bottom-right" to="/projects/create">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import ViewProject from '@/views/project/View.vue' //component name should be in camel-case
  import ProjectList from '@/components/project-list.vue'
  export default {
    name: 'MyProjects',
    data() {
      return {
        userID: undefined
      }
    },
    components: {ViewProject: ViewProject, ProjectList: ProjectList},
    mounted() {
      // this.fetchProjects()
    },
    computed: mapState({
      projects: state => state.project.projects,
      loading: state => state.project.loading
    }),
    methods: {
    }
  }
</script>

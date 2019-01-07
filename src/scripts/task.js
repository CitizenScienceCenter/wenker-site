export default {
  /**
   * createSubmission
   * Creates an empty submission and adds to the client side store
   * @returns {undefined}
   */
  createSubmission: function() {
    const submission = {
      user_id: this.user.id,
      task_id: this.tasks[0].id,
      content: {}
    };
    this.$store.commit('c3s/submission/SET_SUBMISSION', submission)
  },
  /**
   * endTask
   *
   * @param route
   * @returns {undefined}
   */
  endTask: function(route) {
    this.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', this.responses);
    this.$store.dispatch('c3s/submission/createSubmission').then(() => {
      this.$store.commit('c3s/activity/SET_ACTIVITY', null);
      this.$router.push({
        name: route
      })
    })
  },
  /**
   * submitTask
   *
   * @param routeComplete
   * @param routeNext
   * @param query
   * @param responses
   * @param taskCount
   * @returns {undefined}
   */
  submitTask: function(routeComplete, routeNext, query, responses, taskCount) {
    this.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', responses);
    this.$store.dispatch('c3s/submission/createSubmission').then(() => {
      this.$store.commit('c3s/submission/SET_SUBMISSION', null)
      let qu = Object.assign({}, query);
      qu['count'] = parseInt(qu['count']) + 1;
      if (qu['count'] > taskCount) {
        this.$router.push({
          name: routeComplete
        })
      } else {
        this.$router.replace({
          name: routeNext,
          query: qu
        })
      }
    })
  },
  /**
   * loadTask
   *
   * @param count
   * @param activityId
   * @returns {undefined}
   */
  loadTask: function(count, activityId) {
    const taskQuery = {
      "select": {
        "fields": [
          "*"
        ],
        "tables": [
          "tasks"
        ]
      },
      "where": {
        "activity_id": {
          "op": "e",
          "val": activityId
        }
      },
      "limit": 1,
      "offset": count - 1
    };
    let taskCount = undefined;
    let responses = [];
    this.$store.dispatch('c3s/task/getTaskCount', taskQuery).then(c => {
      taskCount = c.body
    })
    this.$store.dispatch('c3s/task/getTasks', [taskQuery, 1]).then(t => {
      if (t.body && t.body.length > 0) {
        const task = t.body[0];
        for (let i = 0; i < task.content.answers.length; i++) {
          responses.push({
            text: ""
          })
        }
        this.createSubmission();
        //activeAnswer = this.tasks[0].content.answers[0]
      } else {
        console.log('No tasks found');
        // this.$router.push({'name': 'TranslateComplete'})
      }
    })
  }
}

export async function getSubmissionCount (self) {
  const countQuery = {
    'select': {
      'fields': [
        '*'
      ],
      'tables': [
        'submissions',
        'activities',
        'tasks'
      ]
    },
    'where': {
      'submissions.task_id': {
        'op': 'e',
        'val': 'tasks.id',
        'type': 'sql',
        'join': 'a'
      },
      'tasks.activity_id': {
        'op': 'e',
        'val': self.id,
        'join': 'a'
      },
      'activities.id': {
        'op': 'e',
        'val': self.id
      }

    }
  }
  let totalSubs = await self.$store.dispatch('c3s/submission/getSubmissionCount', countQuery)
  return totalSubs.body
}

export function createSubmission (self, userID, taskID) {
  const submission = {
    user_id: userID,
    task_id: taskID,
    content: {}
  }
  self.$store.commit('c3s/submission/SET_SUBMISSION', submission)
}

function checkResponses (responses) {
  let responded = false
  for (let i in responses) {
    if (responses[i].text.length > 0) {
      responded = true
      break
    }
  }
  return responded
}

export function getMedia (self, task) {
  const mediaQuery = {
    'select': {
      'fields': [
        '*'
      ],
      'tables': [
        'media'
      ]
    },
    'where': {
      'source_id': {
        'op': 'e',
        'val': task.id
      }
    },
    'limit': 10
  }
  self.$store.dispatch('c3s/media/getMedia', [mediaQuery, undefined, 100]).then(m => {
    let media = m.body.slice()
    for (let index in media) {
      media[index].path = media[index].path.replace('./static', 'https://wenker.citizenscience.ch/files')
    }
    self.$store.commit('c3s/task/SET_MEDIA', media)
  })
}

export function loadTask (self, count, media, routeComplete) {
  const taskQuery = {
    'select': {
      'fields': [
        '*'
      ],
      'tables': [
        'tasks'
      ]
    },
    'where': {
      'activity_id': {
        'op': 'e',
        'val': self.activity.id
      }
    },
    'limit': 1,
    'offset': count - 1
  }
  if (self.$route.query.hasOwnProperty('region')) {
    const userRegion = self.$route.query['region']
    taskQuery['where']['info ->> \'SchoolState\''] = { 'op': 'e', 'val': userRegion, 'join': 'a' }
  }
  self.$store.dispatch('c3s/task/getTaskCount', taskQuery).then(c => {
    self.taskCount = c.body
  })
  self.$store.dispatch('c3s/task/getTasks', [taskQuery, 1]).then(t => {
    if (t.body && t.body.length > 0) {
      const task = t.body[0]

      self.responses = []
      for (let i = 0; i < task.content.answers.length; i++) {
        self.responses.push({ text: '' })
      }
      this.createSubmission(self, self.user.id, task.id)
      if (media) {
        this.getMedia(self, task)
      }
    } else {
      self.$router.push({ 'name': routeComplete })
    }
  })
}

export function endTask (self, completeRoute) {
  const responded = checkResponses(self.responses)
  if (responded) {
    self.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', this.responses)
  }
  self.$store.dispatch('c3s/submission/createSubmission').then(s => {
    self.$router.push({
      name: completeRoute
    })
  })
}

export function submitTask (self, completeRoute, nextRoute) {
  const responded = checkResponses(self.responses)
  let qu = Object.assign({}, self.$route.query)
  qu['count'] = parseInt(qu['count']) + 1
  if (responded) {
    self.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', self.responses)
    self.$store.dispatch('c3s/submission/createSubmission').then(s => {
      if (qu['count'] > self.taskCount) {
        self.$store.commit('c3s/activity/SET_ACTIVITY', null)
        self.$router.push({
          name: completeRoute
        })
      } else {
        self.$router.replace({ name: nextRoute, query: qu })
      }
    })
  } else {
    self.$router.replace({ name: nextRoute, query: qu })
  }
}


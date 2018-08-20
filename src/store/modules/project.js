// initial state
// shape: [{ id, quantity }]
const state = {
  projects: [],
  selectedProject: null,
  selectedMedia: [],
  selectedStats: null,
  selectedTasks: []
}

// getters
const getters = {
  projects: state => state.projects
}

// actions
const actions = {
  getProjects({
    state,
    commit,
    dispatch,
    rootState
  }, search) {

    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.get_projects({
        search_term: search || undefined
      })
      .then(req => {
        commit('SET_PROJECTS', req.body)
        commit('settings/SET_LOADING', false, {
          root: true
        })
      })
      .catch(err => {
        commit('settings/SET_LOADING', false, {
          root: true
        })
        commit('settings/SET_ERROR', err, {
          root: true
        })
      })
  },
  getProject({
    state,
    commit,
    dispatch,
    rootState
  }, [id, associated]) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    console.log(id)
    rootState.api.client.apis.Projects.get_project({
        id: id
      })
      .then(req => {
        commit('SET_PROJECT', req.body)
        commit('settings/SET_LOADING', false, {
          root: true
        })
        console.log(associated)
        if (associated) {
          dispatch('getMedia', id)
          dispatch('getTasks', id)
          dispatch('getStats', id)
        }
      })
      .catch(err => {
        commit('settings/SET_LOADING', false, {
          root: true
        })
        commit('settings/SET_ERROR', err, {
          root: true
        })
      })
  },
  getTasks({state, commit, rootState}, id) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.project_tasks({
      id: id
    })
    .then(req => {
      commit('settings/SET_LOADING', false, {
          root: true
        })
      commit('SET_TASKS', req.body)
    }).catch(err => {
      commit('settings/SET_ERROR', err, {
        root: true
      })
      // TODO set path to login or 404 
    })
  },
  getStats({state, commit, rootState}, id) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.get_stats({
      id: id
    })
    .then(req => {
      commit('settings/SET_LOADING', false, {
          root: true
        })
      commit('SET_STATS', req.body)
    }).catch(err => {
      commit('settings/SET_ERROR', err, {
        root: true
      })
      // TODO set path to login or 404 
    })
  },
  getMedia({state, commit, rootState }, search) {

    commit('settings/SET_LOADING', true, {root: true})
    rootState.api.client.apis.Media.get_media({
        search_term: search || undefined
    })
      .then(req => {
        commit('SET_MEDIA', req.body)
        commit('settings/SET_LOADING', false, {root: true})
      })
      .catch(err => {
        if (err.response.status === 404) {
          // TODO load 404 page
        } else {
          // TODO show errror
        }
      })
},
  createProject({
    state,
    commit,
    rootState
  }, project) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.create_project({
        project: project
      })
      .then(req => {
        console.log(req)
        commit('settings/SET_LOADING', false, {
          root: true
        })
        commit('SET_PROJECT', req.body)
      })
      .catch(err => {
        commit('settings/SET_ERROR', err, {
          root: true
        })
        commit('settings/SET_LOADING', false, {
          root: true
        })
      });
  },
  deleteProject({
    state,
    commit,
    rootState
  }, pid) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.delete_project({
        id: pid
      })
      .then(req => {
        commit('SET_PROJECT', null)
        commit('settings/SET_LOADING', false, {
          root: true
        })
      })
      .catch(err => {
        commit('settings/SET_LOADING', false, {
          root: true
        })
        commit('settings/SET_ERROR', err, {
          root: true
        })
      });
  }
}

// mutations
const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_PROJECT(state, project) {
    state.selectedProject = project
  },
  SET_STATS(state, stats) {
    state.selectedStats = stats
  },
  SET_MEDIA(state, media) {
    state.selectedMedia = media
  },
  SET_TASKS(state, tasks) {
    state.selectedTasks = tasks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

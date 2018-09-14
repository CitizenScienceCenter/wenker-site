var SHA256 = require("crypto-js/sha256");
// initial state
// shape: [{ id, quantity }]
const state = {
  user: null,
  currentUser: null,
  settings: null, // TODO split this out into separate store
  taskProgress: 0
}

// getters
const getters = {
  user: state => state.user,
  currentUser: state => state.currentUser
  // id: state => state.currentUser.id
}

// actions
const actions = {
  async login ({
    state,
    commit,
    dispatch,
    rootState
  }, user) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    try {
      let res = await rootState.api.client.apis.Users.login(user)
      commit('SET_CURRENT_USER', res.body)
      commit('settings/SET_LOADING', false, {
        root: true
      })
      return res.body
    } catch (err) {
      dispatch('settings/setError', 'Anmeldung fehlgeschlagen', {
        root: true
      })
      commit('settings/SET_LOADING', false, {
        root: true
      })
      return false
    }
  },
  async generateAnon ({
    state,
    commit,
    dispatch,
    rootState
  }) {
    commit('settings/SET_LOADING', true, {root: true})
    const now = '' + Date.now()
    const id = 'anon' + SHA256(now)
    const pwd = '' + SHA256(id)
    let u = await dispatch('register', {'username': id, 'pwd': pwd})
    return u
  },
  logout ({
    state,
    commit
  }) {
    commit('SET__CURRENT_USER', null)
  },
  async requestReset ({
    state,
    commit,
    dispatch,
    rootState
  }, email) {
    try {
      let res = await rootState.api.client.apis.Users.reset({email: email})
      return res
    } catch (e) {
      console.error(e)
      dispatch('settings/setError', e, {
        root: true
      })
      return false
    }
  },
  async resetPwd ({
    state,
    commit,
    rootState
  }, reset) {
    try {
      let res = await rootState.api.client.apis.Users.verify_reset({reset: reset})
      console.log(res)
      commit('SET_CURRENT_USER', null)
      return res
    } catch (e) {
      console.log(e)
      commit('settings/SET_ERROR', 'Token ungültig oder Systemfehler', {
        root: true
      })
      commit('settings/SET_LOADING', false, {
        root: true
      })
      return false
    }
  },
  async register ({
    state,
    commit,
    rootState
  }, user) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    console.log(user)
    try {
      let res = await rootState.api.client.apis.Users.register_user({user: user})
      console.log(JSON.stringify(res))
      commit('SET_CURRENT_USER', res.body)
      commit('settings/SET_LOADING', false, {root: true})
      return res.body
    } catch(err) {
        console.log(err)
        commit('settings/SET_ERROR', err, {
          root: true
        })
        commit('settings/SET_LOADING', false, {
          root: true
        })
        return false
    }
  },
  getUser ({
    state,
    commit,
    rootState
  }, id) {
    rootState.api.client.apis.Users.get_user({
        id: id
      })
      .then(req => {
        commit('settings/SET_LOADING', false, {
            root: true
          })
        commit('SET_USER', req.body)
      }).catch(err => {
        console.error(err.response.status)
        commit('settings/SET_ERROR', err, {
          root: true
        })
        // TODO set path to login or 404 
      })
  },
  async updateUser ({
    state,
    commit, 
    rootState
  }, [id, info]) {
    try {
      let res = await rootState.api.client.apis.Users.update_user({id: id, user: info})
      commit('SET_CURRENT_USER', res.body)
      return res
    } catch (e) {
      return false
    }
  },
  async validate ({
    state,
    commit,
    rootState
  }, id) {
    try {
        let res = await rootState.api.client.apis.Users.validate({key: state.currentUser.api_key})
        commit('SET_CURRENT_USER', res.body)
        return true
    } catch (e) {
        return false
    }
  }
}

// mutations
const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_CURRENT_USER(state, user) {
    state.currentUser = user
  },
  SET_TASK_PROGRESS(state, prog) {
    state.taskProgress = prog
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

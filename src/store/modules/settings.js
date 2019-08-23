const state = {
    showNavigation: false,
    showSidepanel: false,
    loading: false,
    error: null,
    errTimeout: 5000,
    theme: 'default',
    language: 'de',
    activeAnswerIndex: 0,
    transcription: {
        'canton': undefined,
        'town': undefined
    },
    version: '1.0.2'
};

const getters = {
    theme: state => state.theme
}

const actions = {
    setError({state, commit, rootState }, err) {
        console.log(err)
        commit('SET_ERROR', err)
        setTimeout(() => {
            commit('SET_ERROR', null)
        }, state.errTimeout)
    },
    setLanguage({state, commit, rootState}, language) {
        commit('SET_LANGUAGE', language)
    },
    setActiveAnswerIndex({state, commit, rootState }, index) {
        commit('SET_INDEX', index)
    },
    setCanton({state, commit, rootState }, canton) {
        commit('SET_CANTON', canton)
    },
    setTown({state, commit, rootState }, town) {
        commit('SET_TOWN', town)
    },
}

const mutations = {
    SET_LOADING(state, flag) {
        state.loading = flag
    },
    SET_NAV(state, flag) {
        state.showNavigation = flag
    },
    SET_SIDEPANEL(state, flag) {
        state.showSidepanel = flag
    },
    SET_ERROR(state, err) {
        state.error = err
    },
    SET_THEME(state, theme) {
        state.theme = theme
    },
    SET_LANGUAGE(state, language) {
        state.language = language
    },
    SET_INDEX(state, index) {
      state.activeAnswerIndex = index
    },
    SET_CANTON(state, canton) {
        state.transcription.canton = canton
    },
    SET_TOWN(state, town) {
        state.transcription.town = town
    },
    // eslint-disable-next-line no-unused-vars
    RESET_STATE(currentState) {
        currentState = Object.assign(currentState, state);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

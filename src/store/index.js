import { members } from '../assets/init.js'
import { createStore } from 'vuex'

export default createStore({
  state: {
    members: members,
    member: [],
    action: {},
    phraseId: 1,
  },
  getters: {
    getMembers(state) {
      return state.members
    },
    getMember(state) {
      return state.member
    },
    getAction(state) {
      return state.action
    },
    getPhraseId(state) {
      return state.phraseId
    }
  },
  mutations: {
    setMember(state, payload) {
      state.member = payload

    },
    setAction(state, payload) {
      state.action = payload

    },
    setPhraseId(state, payload) {
      state.phraseId = payload
    }
  },
})

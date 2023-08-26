import addMemberAction from "./actions"
import getMembers from "./getters"
import addMember from "./mutations"

const members = {
  namespaced: true,
  state() {
    return {
      members: ['modos']
    }
  },
  mutations: addMember,
  actions: addMemberAction,
  getters: getMembers
}

export default members;
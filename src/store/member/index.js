import addMemberAction from "./actions"
import getMembers from "./getters"
import addMember from "./mutations"
import state from "./state"
const members = {
  namespaced: true,
  state: state,
  mutations: addMember,
  actions: addMemberAction,
  getters: getMembers
}

export default members;
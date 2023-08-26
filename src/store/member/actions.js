const addMemberAction = {
  addMemberAction({ commit }, member) {
    commit('addUser', member);
  }
}

export default addMemberAction;
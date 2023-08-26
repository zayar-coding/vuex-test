const addUserAction = {
  addUserAction({ commit }, user) {
    commit('addUser', user);
  }
}

export default addUserAction;
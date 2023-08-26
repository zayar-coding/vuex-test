import getUsers from "./getters";
import addUserAction from "./actions";
import addUser from "./mutations";
const users = {
  namespaced: true,
  state: {
    users: ["zayarmyooo@gmail.com"]
  },
  mutations: addUser,
  actions: addUserAction,
  getters: getUsers
};

export default users;


// const users = {
//   state() {
//     return {
//       users: ["zayarmyooo@gmail.com"]
//     }
//   },
//   mutations: {
//     addUser(state, user) { state.users.push(user); }
//   },
//   actions: {
//     addUserAction({ commit }, user) {
//       commit('addUser', user);
//     }
//   },
//   getters: {
//     getUsers(state) {
//       return state.users;
//     }
//   }
// };

// export default users;
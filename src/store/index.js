import { createStore } from 'vuex'
import users from './user/'
import members from './member/';

export default createStore({
  modules: {
    users,
    members
  }
});



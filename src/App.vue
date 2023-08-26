<template>
  <div>
    <div>
    <h1>Users Input</h1>
    <input type="text" v-model="userName">
    <button @click="userAdd">Add</button>
    <ul>
      <li v-for="(user,index) in users" :key="index">
        {{ user }}
      </li>
    </ul>
    </div>
    <div>
      <h1>Member Input</h1>
      <input type="text" v-model="memName">
      <button @click="userAdd">Add</button>
      <ul>
        <li v-for="(member, index) in members" :key="index">
          {{ member }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const userName = ref('');
const memName = ref('');
const users = ref([]);
const members = ref([]);

const memberAdd = () => {
  console.log(memName.value);
  store.dispatch('members/addMemberAction', memName.value)
  memName.value = '';
};

const userAdd = () => {
  console.log(userName.value);
  store.dispatch('users/addUserAction', userName.value)
  userName.value = '';
};

onMounted(() => {
  // console.log(...store.getters.getUsers);  
  users.value = store.getters['users/getUsers'];
  members.value = store.getters['members/getMembers'];  
});


</script>
<style scoped>

</style>
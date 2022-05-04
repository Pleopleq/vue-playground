<template>
  <h1>Tabla de usuarios</h1>
  <div id="table-users">
    <table-users></table-users>
  </div>
</template>

<script>
import TableUsers from "./components/TableUsers.vue";
export default {
  name: "App",
  components: {
    TableUsers,
  },
  data() {
    return {
      selectedUsers: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#table-users {
  display: flex;
  justify-content: center;
}
</style>

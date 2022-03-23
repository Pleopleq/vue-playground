<template>
  <div id="app">
    <the-form @personal-info="personalInfo"></the-form>
    {{ username }}
    {{ email }}
    {{ twitter }}
  </div>
</template>

<script>
import TheForm from "./components/views/TheForm.vue";
export default {
  components: { TheForm },
  name: "App",
  data() {
    return {
      username: "",
      email: "",
      twitter: "",
    };
  },
  methods: {
    personalInfo(info) {
      this.username = info.username;
      this.email = info.email;
      this.twitter = info.twitter;
    },
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
</style>

<template>
  <form @submit.prevent="sendForm">
    <div>
      <label for="username">Username</label>
    </div>
    <div><input type="text" placeholder="Username" v-model="username" /></div>
    <div>
      <label for="email">Email</label>
    </div>
    <div><input type="text" placeholder="Email" v-model="email" /></div>
    <div>
      <label for="twitter">Twitter Username</label>
    </div>
    <div>
      <input type="text" placeholder="Twitter Username" v-model="twitter" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      twitter: "",
    };
  },
  methods: {
    sendForm() {
      const newPersonalInfo = {
        username: this.username,
        email: this.email,
        twitter: this.twitter,
      };
      this.$emit("personal-info", newPersonalInfo);
    },
  },
};
</script>

<style></style>

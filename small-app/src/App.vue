<script>
export default {
  methods: {
    getBrawlers() {
      this.$store.dispatch("fetchBrawlers");
    },
  },

  created() {
    this.getBrawlers();
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

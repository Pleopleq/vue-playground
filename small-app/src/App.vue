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
  <h1>Brawlers</h1>
</template>

<style scoped></style>

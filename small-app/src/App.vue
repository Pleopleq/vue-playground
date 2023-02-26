<script>
export default {
  methods: {
    foobar() {
      this.$store.dispatch("fetchBrawlers");
    },
  },

  created() {
    this.foobar();
  },
};
</script>

<template>
  <h1>Brawlers</h1>
</template>

<style scoped></style>

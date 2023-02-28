<template>
  <section>
    <router-link to="/">Go back to Home</router-link>

    <h1>{{ brawler.name }}</h1>
    <div>
      <h2>Star Powers</h2>
      <ul>
        <li v-for="power in brawler.starPowers" :key="power.id">
          {{ power.name }}
        </li>
      </ul>
    </div>

    <div>
      <h2>Gadgets</h2>
      <ul>
        <li v-for="gadget in brawler.gadgets" :key="gadget.id">
          {{ gadget.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Brawler",

  data() {
    return {
      id: this.$route.params.id,
    };
  },

  methods: {
    getBrawler() {
      this.$store.dispatch("fetchSingleBrawler", this.id);
    },
  },

  computed: {
    brawler() {
      return this.$store.state.brawler;
    },
  },

  created() {
    this.getBrawler();
  },
};
</script>

<style></style>

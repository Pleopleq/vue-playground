<template>
  <section>
    <h1>Brawlers</h1>
    <brawler-item-list
      v-for="item in brawlerList.items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
    ></brawler-item-list>
  </section>
</template>

<script>
import BrawlerItemList from "./BrawlerItemList.vue";

export default {
  components: { BrawlerItemList },

  name: "BrawlerList",

  methods: {
    getBrawlers() {
      this.$store.dispatch("fetchBrawlers");
    },
  },

  computed: {
    brawlerList() {
      return this.$store.state.brawlerList;
    },
  },

  created() {
    this.getBrawlers();
  },
};
</script>

<style></style>

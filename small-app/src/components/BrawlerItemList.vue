<template>
  <div>
    <router-link :to="`/brawler/${id}`"
      ><h2>{{ name }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BrawlerItemList",

  props: ["name", "id"],
};
</script>

<style></style>

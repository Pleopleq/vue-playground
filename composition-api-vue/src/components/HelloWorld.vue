<script setup>
import { computed, ref, watchEffect } from "vue";

defineProps({
  msg: String,
  anotherMessage: String,
});

const count = ref(0);
const anotherCount = ref(0);
const plusOne = computed(() => anotherCount.value + 1);
const writableComputedRef = computed({
  get: () => count.value + 2,
  set: (val) => {
    count.value = val - 1;
  },
});
writableComputedRef.value = 1;

watchEffect(() => {
  console.log(writableComputedRef.value);
  console.log(plusOne);
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ anotherMessage }}</h1>
  <p>{{ count }}</p>
  <button @click="count++">Increment</button>
  <button @click="anotherCount++">
    Increase the number {{ anotherCount }}
  </button>

  <p>{{ writableComputedRef }}</p>
</template>

<style scoped>
p {
  color: #42b983;
}
</style>

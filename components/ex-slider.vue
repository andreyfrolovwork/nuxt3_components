<template>
  <div class="p100">
    <Slider v-model="values" />
  </div>

  <div class="p100">
    <Slider v-model="valuesRange" />
  </div>
</template>

<script setup>
import { ref } from "vue"
/* Slider */
import Slider from "@vueform/slider"
const values = ref(10)
const valuesRange = ref([0, 100])
</script>

<style scoped>

</style>
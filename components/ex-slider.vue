<template>
    <div class="p100">
        <div class="h1">
            vueform/slider
        </div>
        <div class="p40">
            <Slider v-model="values" />
        </div>
        <div class="p40">
            <Slider v-model="valuesRange" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
/* Slider */
import Slider from "@vueform/slider"

const values = ref(10)
const valuesRange = ref([0, 100])
</script>

<style scoped></style>

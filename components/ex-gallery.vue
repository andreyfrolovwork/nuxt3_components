<template>
  <div class="p100">
    <splide :options="options">
      <splide-slide>
        <div class="splide-image-wrapper">
          <img src="https://leonardo.osnova.io/f8e20dad-ebb3-52d1-b78d-dc5b8ec812ab/-/preview/700/-/format/webp/"
               alt="">
        </div>
      </splide-slide>
      <splide-slide>
        <div class="splide-image-wrapper">
          <img src="https://leonardo.osnova.io/f8e20dad-ebb3-52d1-b78d-dc5b8ec812ab/-/preview/700/-/format/webp/"
               alt="">
        </div>
      </splide-slide>
      <splide-slide>
        <div class="splide-image-wrapper">
          <img src="https://leonardo.osnova.io/f8e20dad-ebb3-52d1-b78d-dc5b8ec812ab/-/preview/700/-/format/webp/"
               alt="">
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script setup>
import {useRuntimeConfig} from "nuxt/app"

const options = {
  rewind: true,
  gap: "1rem",
  width: "100%",
  height: "100%"
}
const config = useRuntimeConfig()
</script>

<style scoped>
.gallery-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.splide-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

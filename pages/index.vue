<template>
  <ui-navbar></ui-navbar>
  <div>
    <ex-menu/>
    <ex-tabs/>
    <ex-modal/>
    <ex-slider/>
    <ex-gallery/>
    <ex-v-animate/>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.block {
  width: 100px;
  height: 100px;
  background: blue;
}

.menu1 {
  box-shadow: 0 0 50px rgb(0 0 0 / 10%);
  background-color: #da2323;
  padding: 21px 30px;
  color: black;
  position: relative;
  translate: 60px;
}
</style>
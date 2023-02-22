<template>
  <Transition name="slide-fade">
    <div
        v-if="vshow"
        class="the_modal_wrapper"
        @click="wrap"
    >
      <Transition name="slide-fade">
        <slot />
      </Transition>
      <button @click="close">
        close modal button
      </button>
    </div>
  </Transition>
</template>

<script setup>
import {  defineProps } from "vue"
import {useVModel} from "~/functions/useVModel.js"
const props = defineProps(["showM"])
const vshow = useVModel(props,'showM')

function close(){
  console.log(vshow)
  vshow.value = false
}
</script>

<style lang="scss">
// параметры transition
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(5px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(5px);
  opacity: 0;
}

.the_modal_wrapper {
  z-index: 101;
  background: #3d9db2;

  position: absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

}
</style>

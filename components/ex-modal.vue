<template>
  <!--        The modal-->
  <div class="p100">
    <ui-modal
        v-model:show-m="showModal"
    >
      <div>modal window content</div>
    </ui-modal>
    <button @click="showModalHandle">
      show modal button
    </button>
  </div>
</template>

<script setup>
import {ref} from "vue"

const showModal = ref(false)

function showModalHandle() {
  console.log('show')
  showModal.value = true
}
</script>

<style scoped>

</style>
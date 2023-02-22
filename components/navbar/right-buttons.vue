<template>
    <a
        href="tel:+73517001717"
        class="link m15r"
        >
        <span class="phone__number">73517001717</span>
    </a>
    <ui-modal v-model:show-m="showModal">
        <div>modal window content</div>
    </ui-modal>
    <button @click="showModalHandle">
        show modal button
    </button>
</template>

<script setup>
import { ref } from "vue"

const showModal = ref(false)

function showModalHandle() {
    console.log("show")
    showModal.value = true
}
</script>

<style scoped>
.sd {
}
</style>
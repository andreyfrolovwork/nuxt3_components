<template>
    <div class="p100">
        <div class="h1">
            Показать меню при наведении
        </div>
        <div

            @click="showMenu"
            @mouseover="showMenu(true)"
            @mouseleave="showMenu(false)"
            >
            наведи на меня
            <ui-menu :show="show">
                <div class="menu-example">
                    <ul>
                        <li>menu1</li>
                        <li>menu2</li>
                        <li>menu3</li>
                    </ul>
                </div>
            </ui-menu>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const show = ref(false)

function showMenu(value) {
    if (!value) {
        show.value = !show.value
    } else {
        show.value = value
    }
}
</script>

<style lang="scss" scoped>
.menu-example {
    background: #b6ec86;
    width: -moz-fit-content;
    width: fit-content;
    padding: 30px;
    height: fit-content;
    box-sizing: border-box;
}
</style>

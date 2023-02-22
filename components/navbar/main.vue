<template>
    <ui-navbar :menu-links="menuLinks">
        <template #logo>
            <img
                src="/logo-header.svg"
                alt="logo"
                class="logo"
                >
        </template>
        <template #rightButtons>
            <navbar-right-buttons />
        </template>
    </ui-navbar>
</template>

<script setup>

const menuLinks = [
    {
        name: "На главную",
        to: "/"
    },
    {
        name: "На главную",
        to: "/"
    },
    {
        name: "На главную",
        to: "/"
    }
]
</script>

<style scoped>

</style>
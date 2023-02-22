<template>
    <div>
        <ui-navbar :menu-links="menuLinks">
            <template #logo>
                <img
                    src="/logo-header.svg"
                    alt="logo"
                    class="logo"
                    @click="pushToMainPage"
                    >
            </template>
            <template #rightButtons>
                <navbar-right-buttons />
            </template>
        </ui-navbar>
    </div>
</template>

<script setup>
import { useRouter } from "nuxt/app"

const router = useRouter()

function pushToMainPage() {
    router.push({
        path: "/"
    })
}

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
.logo {
    cursor: pointer;
}
</style>
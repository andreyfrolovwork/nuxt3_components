<template>
    <div v-animate-on-scroll>
        <div class="content">
            Плавное появление контента
        </div>
    </div>
</template>

<script>
export default {
    name: "ExVAnimate",
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 400px;
    background: aquamarine;
}
</style>

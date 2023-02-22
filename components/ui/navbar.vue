<template>
    <div class="navbar">
        <!--    mobile menu-->
        <Transition name="mobile-menu1">
            <div
                v-if="showNavbar"
                class="navbar-mobile-menu"
                >
                <ul class="navbar-mobile-menu-ul">
                    <li
                        v-for="link in props.menuLinks"
                        :key="link"
                        class="navbar-link-li"
                        >
                        <NuxtLink
                            :to="link.to"
                            @click="showNavbarMenu()"
                            >
                            {{ link.name }}
                        </nuxtlink>
                    </li>
                </ul>
            </div>
        </Transition>
        <!--    mobile top buttons-->
        <div class="navbar__mobile-button">
            <div class="logo">
                <slot name="logo" />
            </div>
            <div class="menu-button">
                <the-phone-icon @click="callMe" />
                <the-menu-icon @showmenu="showNavbarMenu" />
            </div>
        </div>
        <!--    center links-->
        <div class="navbar__center">
            <div class="navbar__center__left">
                <div class="logo">
                    <slot name="logo" />
                </div>
                <ul>
                    <li
                        v-for="link in props.menuLinks"
                        :key="link"
                        class="navbar-link-li fl"
                        >
                        <NuxtLink

                            :to="link.to"
                            @click="showNavbarMenu()"
                            >
                            {{ link.name }}
                        </nuxtlink>
                    </li>
                </ul>
            </div>
            <div class="right-buttons">
                <slot name="rightButtons" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "nuxt/app"
import { ref } from "vue"
const props = defineProps(['menuLinks'])

const show = ref(false)
const showNavbar = ref(false)
const router = useRouter()

function showNavbarMenu() {
    console.log("show menu")
    showNavbar.value = !showNavbar.value
}


function callMe() {
    alert("при нажатии на иконку телефона")
}

function goToMain() {
    router.push({
        path: "/"
    })
}
</script>

<style scoped lang="scss">
.navbar-link-li {
    //float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px   ;
}

.right-buttons {
    display: flex;
    align-items: center;
}

.menu-example1 {
    background: #42bea1;
    width: -moz-fit-content;
    width: fit-content;
    padding: 30px;
    height: fit-content;
    box-sizing: border-box;
}

.nav-menu {
    list-style: none;
    margin: 14px 0;
}

.logo {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    ///margin-left: 15px;
}

.navbar {
    //box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 10px rgba(203, 62, 62, 0.16);

    height: 60px;
    width: 100vw;
    background-color: rgba(203, 62, 191, 0.47);
    position: absolute;
    z-index: 99;
    display: flex;
    flex-direction: row;
    //max-width: 1440px;
    justify-content: center;

    &__mobile-button {
        @mixin show-mobile {
            display: flex;
            align-items: center;
            flex-flow: row;
            justify-content: space-between;
            flex: 1;
            //margin: 0 58px 0 15px;
            margin: 0px 35px 0 15px;
            //margin: 0 25px 0 15px;
        }
        display: none;
        @include phone {
            @include show-mobile;
        }
        @include tablet {
            @include show-mobile;
        }
    }

    &__center {
        @include phone {
            display: none;
        }
        @include tablet {
            display: none;
        }
        display: flex;
        max-width: 1440px;
        flex: 1;
        flex-flow: row;
        //background: #2c491c;
        justify-content: space-between;
        //margin: 0 15px;
        margin: 0 66px 0 15px;

        &__left {
            display: flex;
            flex-direction: row;
            //align-items: center;
        }
    }
}



.aicenter {
    align-items: center;
}


.navbar-mobile-menu {
    position: absolute;
    background: white;
    display: flex;
    width: 100vw;
    height: calc(100vh - 60px);
    margin-top: 60px;

    ul {
        padding: 50px 50px 50px 70px;
        width: 100%;
    }

    li {
        margin-left: 15px;
    }

    &__title {
        font-family: "Montserrat", serif;
        font-style: normal;
        font-weight: 600;
        /*        font-size: 16px;
            line-height: 20px;*/
        font-size: 24px;
        line-height: 30px;
    }

    .bar {
        font-size: 18px;
        line-height: 33px;
    }
}

.menu-button {
    display: flex;
    flex-flow: row nowrap;
}


.fl {
    height: 100%;
    float: left;
}

// mobile menu transitiion property
.mobile-menu1-enter-active {
    transition: all 0.1s ease-out;
}

.mobile-menu1-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-menu1-enter-from {
    transform: translateX(-100px);
    opacity: 0;
}

.mobile-menu1-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}
</style>

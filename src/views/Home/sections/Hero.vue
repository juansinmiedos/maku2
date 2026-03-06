<template>
  <section class="hero">
    <div ref="homeHero" class=""></div>
    <!-- <div ref="homeHeroMobile" class=""></div> -->
    
    <!-- <img src="../../../assets/maku-logo.svg" alt="logo" /> -->
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import lottie from "lottie-web"
import animationData from "@/assets/home-hero.json"
// import mobileAnimationData from "@/assets/home-hero-mobile.json"

const homeHero = ref(null)
// const homeHeroMobile = ref(null)

let animInstance = null
// let mobileAnimInstance = null

onMounted(() => {
  animInstance = lottie.loadAnimation({
    container: homeHero.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData
  })

  // mobileAnimInstance = lottie.loadAnimation({
  //   container: homeHeroMobile.value,
  //   renderer: "svg",
  //   loop: true,
  //   autoplay: true,
  //   mobileAnimationData
  // })
})

onBeforeUnmount(() => {
  animInstance?.destroy()
  // mobileAnimInstance?.destroy()
})
</script>

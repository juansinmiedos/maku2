<template>
  <section class="hero">
    <div ref="homeHero" class=""></div>
    
    <img src="../../../assets/maku-logo.svg" alt="logo" />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import lottie from "lottie-web"
import animationData from "@/assets/home-hero.json"

const homeHero = ref(null)

let animInstance = null

onMounted(() => {
  animInstance = lottie.loadAnimation({
    container: homeHero.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData
  })
})

onBeforeUnmount(() => {
  animInstance?.destroy()
})
</script>

<template>
  <section>
    <div ref="aboutHero" class="desktop-hero"></div>
    <div ref="aboutHeroMobile" class="mobile-hero"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import lottie from "lottie-web"
import animationData from "@/assets/about-hero.json"
import mobileAnimationData from "@/assets/about-hero-mobile.json"

const aboutHero = ref(null)
const aboutHeroMobile = ref(null)

let animInstance = null
let mobileAnimInstance = null

onMounted(() => {
  animInstance = lottie.loadAnimation({
    container: aboutHero.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData
  })

  mobileAnimInstance = lottie.loadAnimation({
    container: aboutHeroMobile.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: mobileAnimationData
  })
})

onBeforeUnmount(() => {
  animInstance?.destroy()
  mobileAnimInstance?.destroy()
})
</script>

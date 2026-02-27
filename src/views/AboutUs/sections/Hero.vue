<template>
  <div>
    <div ref="homeHero" class=""></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import lottie from "lottie-web"
import animationData from "@/assets/about-hero.json"

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

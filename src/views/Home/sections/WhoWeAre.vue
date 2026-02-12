<template>
  <section class="who-we-are-section">
    <div class="container">
      <p class="title title-lg">Who We Are</p>

      <div class="body-wrapper">
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAKU is a strategic branding and marketing agency that highlights the best of your brand.</h1>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAKU is a strategic branding and marketing agency that highlights the best of your brand.</h4>
        <div class="body">
          <div class="body-container">
            <div>
              <h4>Through our proven ABCDS Method, we craft strategies and creative that help brands.</h4>
              <div ref="growStronger" class="lottie"></div>
              <!-- <h3>Grow stronger</h3> -->
              <!-- <h4 class="h4-until-small">Grow stronger</h4> -->
            </div>

            <TheButton>Learn more</TheButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import lottie from "lottie-web"
import animationData from "@/assets/grow-stronger.json"

import TheButton from '@/components/atoms/TheButton.vue'

const growStronger = ref(null)
let animInstance = null

onMounted(() => {
  console.log(animationData)
  animInstance = lottie.loadAnimation({
    container: growStronger.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData
  })
})

onBeforeUnmount(() => {
  animInstance?.destroy()
});
</script>

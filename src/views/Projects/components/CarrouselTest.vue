<template>
  <main class="wrapper" @keydown="handleKey" tabindex="0">
    <div
      id="carousel"
      class="carousel"
      @mousedown="onDown"
      @mouseup="onUp"
      @touchstart="onDown"
      @touchend="onUp"
    >
      <div
        v-for="(image, index) in orderedImages"
        :key="image.id"
        :class="getClass(index)"
      >
        <img :src="image.src" draggable="false" />
      </div>
    </div>

    <div class="buttons">
      <button class="button-82-pushable" @click="prev">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">Previous</span>
      </button>

      <button class="button-82-pushable" @click="next">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">Next</span>
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const images = ref([
  { id: 1, src: "https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089__340.jpg" },
  { id: 2, src: "https://cdn.pixabay.com/photo/2012/11/28/11/28/rocket-launch-67723__340.jpg" },
  { id: 3, src: "https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg" },
  { id: 4, src: "https://cdn.pixabay.com/photo/2020/06/17/09/28/wormhole-5308810__340.jpg" },
  { id: 5, src: "https://cdn.pixabay.com/photo/2016/11/18/22/58/stars-1837306__340.jpg" },
  { id: 6, src: "https://cdn.pixabay.com/photo/2017/02/09/09/11/starry-sky-2051448__340.jpg" },
  { id: 7, src: "https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188__340.jpg" },
  { id: 8, src: "https://cdn.pixabay.com/photo/2011/12/15/11/32/pismis-24-11186__340.jpg" }
])

const selectedIndex = ref(3)
const startX = ref(0)

const orderedImages = computed(() => {
  return images.value
})

function getClass(index) {
  const diff = index - selectedIndex.value

  if (diff === 0) return "selected"
  if (diff === -1) return "prev"
  if (diff === 1) return "next"
  if (diff === -2) return "prevLeftSecond"
  if (diff === 2) return "nextRightSecond"
  if (diff < -2) return "hideLeft"
  if (diff > 2) return "hideRight"
}

function next() {
  if (selectedIndex.value < images.value.length - 1) {
    selectedIndex.value++
  }
}

function prev() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--
  }
}

function handleKey(e) {
  if (e.key === "ArrowRight") next()
  if (e.key === "ArrowLeft") prev()
}

function onDown(e) {
  startX.value = e.touches ? e.touches[0].clientX : e.clientX
}

function onUp(e) {
  const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
  const diff = startX.value - endX

  if (Math.abs(diff) < 10) return

  if (diff > 0) next()
  else prev()
}

onMounted(() => {
  document.querySelector(".wrapper")?.focus()
})
</script>

<style scoped>
html, body, main, .wrapper {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
}

#carousel {
  position: relative;
  height: 400px;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}

#carousel div {
  position: absolute;
  transition: transform 400ms, left 400ms, opacity 400ms;
  opacity: 1;
}

#carousel div img {
  width: 400px;
  transition: width 400ms;
  user-drag: none;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10px;
}

/* mismas clases originales */

.hideLeft { left: 0%; opacity: 0; transform: translateY(50%) translateX(-50%); }
.hideLeft img { width: 200px; }

.hideRight { left: 100%; opacity: 0; transform: translateY(50%) translateX(-50%); }
.hideRight img { width: 200px; }

.prev { z-index: 5; left: 30%; transform: translateY(50px) translateX(-50%); }
.prev img { width: 300px; }

.prevLeftSecond { z-index: 4; left: 15%; transform: translateY(50%) translateX(-50%); opacity: 0.7; }
.prevLeftSecond img { width: 200px; }

.selected { z-index: 10; left: 50%; transform: translateY(0px) translateX(-50%); }

.next { z-index: 5; left: 70%; transform: translateY(50px) translateX(-50%); }
.next img { width: 300px; }

.nextRightSecond { z-index: 4; left: 85%; transform: translateY(50%) translateX(-50%); opacity: 0.7; }
.nextRightSecond img { width: 200px; }

/* botones (copiados igual) */
.buttons {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
}

/* puedes copiar aquí todo el CSS completo de los botones original */
</style>
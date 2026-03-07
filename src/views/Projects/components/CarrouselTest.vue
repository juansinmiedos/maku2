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
import { ref, computed } from "vue"

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

const selectedIndex = ref(0)
const startX = ref(0)

const orderedImages = computed(() => {
  return images.value
})

function getClass(index) {
  const diff = index - selectedIndex.value

  if (diff <= -2) return "hideLeft"
  // if (diff === -2) return "prevLeftSecond"
  if (diff === -1) return "prevLeftSecond" // prev
  if (diff === 0) return "selected"
  if (diff === 1) return "nextRightSecond" // next
  // if (diff === 2) return "nextRightSecond"
  if (diff >= 2) return "hideRight"
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
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

}

#carousel {
  position: relative;
  height: 1294px;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}
#carousel div {
  position: absolute;
  transition: transform 400ms, left 400ms, opacity 400ms, z-index 0s;
  opacity: 1;
}
#carousel div img {
  width: 819px;
/* height: 977.357px; */

  /* width: 400px; */
  transition: width 400ms;
   -webkit-user-drag: none;
   box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
   border-radius: 10px;
}
#carousel div.hideLeft {
  left: 0%;
  opacity: 0;
  transform: translateY(50%) translateX(-50%);
}
#carousel div.hideLeft img {
  width: 200px;
}
#carousel div.hideRight {
  left: 100%;
  opacity: 0;
  transform: translateY(50%) translateX(-50%);
}
#carousel div.hideRight img {
  width: 200px;
}
#carousel div.prev {
  z-index: 5;
  left: 30%;
  transform: translateY(50px) translateX(-50%);
}
#carousel img:hover {
  cursor: 
}
#carousel div.prev img {
  width: 300px;
}
#carousel div.prevLeftSecond {
  z-index: 4;
  left: 15%;
  transform: translateY(50%) translateX(-50%);
  opacity: 0.7;
}
#carousel div.prevLeftSecond img {
  width: 200px;
}
#carousel div.selected {
  z-index: 10;
  left: 50%;
  transform: translateY(0px) translateX(-50%);
}
#carousel div.next {
  z-index: 5;
  left: 70%;
  transform: translateY(50px) translateX(-50%);
}
#carousel div.next img {
  width: 300px;
}
#carousel div.nextRightSecond {
  z-index: 4;
  left: 85%;
  transform: translateY(50%) translateX(-50%);
  opacity: 0.7;
}
#carousel div.nextRightSecond img {
  width: 200px;
}

/*previous or next buttons css*/

.buttons {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
}

.button-82-pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-82-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

.button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}

.button-82-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

@media (min-width: 768px) {
  .button-82-front {
    font-size: 1.25rem;
    padding: 12px 42px;
  }
}

.button-82-pushable:hover {
  filter: brightness(110%);
  -webkit-filter: brightness(110%);
}

.button-82-pushable:hover .button-82-front {
  transform: translateY(-6px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.button-82-pushable:hover .button-82-shadow {
  transform: translateY(4px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button-82-pushable:focus:not(:focus-visible) {
  outline: none;
}
</style>
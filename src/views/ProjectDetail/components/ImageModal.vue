<template>
  <div class="image-modal" :class="{ active: show }" @keydown="handleKey" tabindex="0" @click="clearAndCloseModal">
    <div class="box" ref="box">
      <img
        v-if="media?.type === 'image'"
        ref="image"
        :src="media.url"
        :class="{ active: show }"
        @load="fitMedia"
        @click.stop
      />
      <video
        v-else-if="media?.type === 'video'"
        ref="video"
        :src="media.url"
        controls
        autoplay
        :class="{ active: show }"
        @loadedmetadata="fitMedia"
        @click.stop
      />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from "vue"

const box = ref(null)
const image = ref(null)
const video = ref(null)

const emit = defineEmits([ "update:show", "update:media" ])

const props = defineProps({
  show: Boolean,
  media: Object,
})

onMounted(() => window.addEventListener("resize", fitMedia))
onUnmounted(() => window.removeEventListener("resize", fitMedia))

const fitMedia = async () => {
  await nextTick()

  const container = box.value
  if (!container) return

  let mediaEl = null
  let mediaRatio = 1

  if (props.media?.type === "image" && image.value) {
    mediaEl = image.value
    mediaRatio = mediaEl.naturalWidth / mediaEl.naturalHeight
  }

  if (props.media?.type === "video" && video.value) {
    mediaEl = video.value
    mediaRatio = mediaEl.videoWidth / mediaEl.videoHeight
  }

  if (!mediaEl) return

  const containerRatio =
    container.clientWidth / container.clientHeight

  mediaEl.style.width = "auto"
  mediaEl.style.height = "auto"

  if (mediaRatio > containerRatio) {
    mediaEl.style.width = "100%"
  } else {
    mediaEl.style.height = "100%"
  }
}

function handleKey(e) {
  console.log("handleKey")
  if (e.key === "ArrowRight") next()
  if (e.key === "ArrowLeft") prev()
}

function prev() {
  console.log("prev")
}

function next() {
  console.log("next")
}

function clearAndCloseModal() {
  emit("update:show", false)
  setTimeout(() => {
    if (video.value) {
      video.value.pause()
      video.value.currentTime = 0
    }
    emit("update:media", null)
  }, 200)
}
</script>

<template>
  <div class="image-modal" :class="{ active: show }" @keydown="handleKey" tabindex="0" @click="clearAndCloseModal">
    <div class="box" ref="box">
      <img
        v-if="media?.type === 'image'"
        ref="image"
        :src="media.url"
        :class="{ active: show }"
        @load="fitImage"
        @click.stop
      />
      <video
        v-else-if="media?.type === 'video'"
        ref="video"
        :src="media.url"
        controls
        autoplay
        :class="{ active: show }"
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

onMounted(() => window.addEventListener("resize", fitImage))
onUnmounted(() => window.removeEventListener("resize", fitImage))

const fitImage = async () => {
  await nextTick();

  if (!props.media?.type || props.media.type !== "image") return;

  const img = image.value;
  const container = box.value;

  if (!img || !container) return;

  const containerRatio =
    container.clientWidth / container.clientHeight;

  const imageRatio =
    img.naturalWidth / img.naturalHeight;

  img.style.width = "auto";
  img.style.height = "auto";

  if (imageRatio > containerRatio) {
    img.style.width = "100%";
  } else {
    img.style.height = "100%";
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
  if (video.value) {
    video.value.pause()
    video.value.currentTime = 0
  }

  emit("update:show", false)
  setTimeout(() => emit("update:media", null), 200)
}
</script>

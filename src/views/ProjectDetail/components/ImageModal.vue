<template>
  <div class="image-modal" :class="{ active: show }" @keydown="handleKey" tabindex="0" @click="clearAndCloseModal">
    <div class="box" ref="box">
      <img ref="image" :src="url" :class="{ active: show }" @load="fitImage" @click.stop />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from "vue"

const box = ref(null)
const image = ref(null)

const emit = defineEmits([ "update:show", "update:url" ])

defineProps({
  show: Boolean,
  url: String,
})

onMounted(() => window.addEventListener("resize", fitImage))
onUnmounted(() => window.removeEventListener("resize", fitImage))

const fitImage = async () => {
  await nextTick();

  const img = image.value;
  const container = box.value;

  if (!img || !container) return;

  const containerRatio =
    container.clientWidth / container.clientHeight;

  const imageRatio =
    img.naturalWidth / img.naturalHeight;

  // Reset styles
  img.style.width = "auto";
  img.style.height = "auto";

  if (imageRatio > containerRatio) {
    // Imagen más ancha → llenar ancho
    img.style.width = "100%";
    img.style.height = "auto";
  } else {
    // Imagen más alta → llenar alto
    img.style.height = "100%";
    img.style.width = "auto";
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
  setTimeout(() => emit("update:url", ""), 200)
}
</script>

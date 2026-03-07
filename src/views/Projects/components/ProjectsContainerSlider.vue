<template>
  <div class="projects-view-container-single" @keydown="handleKey" tabindex="0">
    <div
      class="carrousel"
      @mousedown="onDown"
      @mouseup="onUp"
      @touchstart="onDown"
      @touchend="onUp"
    >
      <div
        v-for="(project, i) in projects"
        :key="i"
        :class="getClass(i)"
      >
        <img
          :src="project.imageUrl"
          draggable="false"
          @click="selectImage(i, project.id)"
        />
      </div>
    </div>

    <div class="arrow prev" :class="{ disabled: selectedIndex === 0 }" @click="prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
        <path d="M18.0006 7.50042C18.0006 7.69933 17.9216 7.8901 17.7809 8.03075C17.6403 8.1714 17.4495 8.25042 17.2506 8.25042H2.5609L8.03122 13.7198C8.1009 13.7895 8.15617 13.8722 8.19389 13.9632C8.2316 14.0543 8.25101 14.1519 8.25101 14.2504C8.25101 14.349 8.2316 14.4465 8.19389 14.5376C8.15617 14.6286 8.1009 14.7114 8.03122 14.781C7.96153 14.8507 7.87881 14.906 7.78776 14.9437C7.69672 14.9814 7.59914 15.0008 7.50059 15.0008C7.40204 15.0008 7.30446 14.9814 7.21342 14.9437C7.12237 14.906 7.03965 14.8507 6.96996 14.781L0.219965 8.03104C0.150233 7.96139 0.0949134 7.87867 0.0571702 7.78762C0.019427 7.69657 0 7.59898 0 7.50042C0 7.40186 0.019427 7.30426 0.0571702 7.21321C0.0949134 7.12216 0.150233 7.03945 0.219965 6.96979L6.96996 0.219792C7.1107 0.0790615 7.30157 -1.48284e-09 7.50059 0C7.69961 1.48284e-09 7.89048 0.0790615 8.03122 0.219792C8.17195 0.360523 8.25101 0.551394 8.25101 0.750417C8.25101 0.94944 8.17195 1.14031 8.03122 1.28104L2.5609 6.75042H17.2506C17.4495 6.75042 17.6403 6.82943 17.7809 6.97009C17.9216 7.11074 18.0006 7.3015 18.0006 7.50042Z" fill="white"/>
      </svg>
    </div>

    <div class="arrow next" :class="{ disabled: selectedIndex === projects.length - 1 }" @click="next">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
        <path d="M17.7806 8.03104L11.0306 14.781C10.8899 14.9218 10.699 15.0008 10.5 15.0008C10.301 15.0008 10.1101 14.9218 9.96937 14.781C9.82864 14.6403 9.74958 14.4494 9.74958 14.2504C9.74958 14.0514 9.82864 13.8605 9.96937 13.7198L15.4397 8.25042H0.75C0.551088 8.25042 0.360322 8.1714 0.21967 8.03075C0.0790178 7.8901 0 7.69933 0 7.50042C0 7.3015 0.0790178 7.11074 0.21967 6.97009C0.360322 6.82943 0.551088 6.75042 0.75 6.75042H15.4397L9.96937 1.28104C9.82864 1.14031 9.74958 0.94944 9.74958 0.750417C9.74958 0.551394 9.82864 0.360523 9.96937 0.219792C10.1101 0.0790615 10.301 0 10.5 0C10.699 0 10.8899 0.0790615 11.0306 0.219792L17.7806 6.96979C17.8504 7.03945 17.9057 7.12216 17.9434 7.21321C17.9812 7.30426 18.0006 7.40186 18.0006 7.50042C18.0006 7.59898 17.9812 7.69657 17.9434 7.78762C17.9057 7.87867 17.8504 7.96139 17.7806 8.03104Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  projects: Array,
})

const selectedIndex = ref(0)
const startX = ref(0)

watch(() => props.projects, () => {
  selectedIndex.value = 0
})

function handleKey(e) {
  if (e.key === "ArrowRight") next()
  if (e.key === "ArrowLeft") prev()
}

function getClass(index) {
  const diff = index - selectedIndex.value

  if (diff <= -2) return "hideLeft"
  if (diff === -1) return "prev" // prevLeftSecond
  if (diff === 0) return "selected"
  if (diff === 1) return "next" // nextRightSecond
  if (diff >= 2) return "hideRight"
}

function prev() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--
  }
}

function next() {
  if (selectedIndex.value < props.projects.length - 1) {
    selectedIndex.value++
  }
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

function selectImage(i, id) {
  if (i !== selectedIndex.value) {
    selectedIndex.value = i
  } else {
    router.push({ name: "ProjectDetail", params: { id }, })
  }
}
</script>

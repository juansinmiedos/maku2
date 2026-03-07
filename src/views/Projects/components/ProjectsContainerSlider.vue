<template>
  <div class="projects-view-container-single" @keydown="handleKey">
    <div class="carrousel">
      <div
        v-for="(project, i) in projects"
        :key="i"
        :class="getClass(i)"
      >
        <img :src="project.imageUrl" draggable="false" />
      </div>
    </div>

    <div @click="prev">previous</div>
    <div @click="next">next</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  projects: Array,
})

const selectedIndex = ref(0)

function handleKey() {}

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
</script>

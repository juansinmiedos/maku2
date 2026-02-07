<template>
  <div class="about-us-item">
    <img :src="getImage()" />

    <div class="body">
      <p class="title-lg">{{ data.title }}</p>
      <p class="p-md">{{ data.body }}</p>
    </div>
  </div>
</template>

<script setup>
import corn from "../../../../assets/about-us-corn.svg"
import bolt from "../../../../assets/about-us-bolt.svg"
import speaker from "../../../../assets/about-us-speaker.svg"

const props = defineProps({
  data: Object,
})

function getImage() {
  if (props.data.icon === "corn") {
    return corn
  } else if (props.data.icon === "bolt") {
    return bolt
  } else if (props.data.icon === "speaker") {
    return speaker
  }
}
</script>

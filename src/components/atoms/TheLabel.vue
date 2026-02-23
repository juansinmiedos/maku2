<template>
  <div class="label" :class="{ active: isActive }" @click="handleClick">
    <p class="title-sm">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
const emit = defineEmits([ "click" ])

const props = defineProps({
  isActive: Boolean,
  value: String,
})

function handleClick() {
  emit("click", props.value)
}
</script>

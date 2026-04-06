<template>
  <div class="image-loader">
    <input
      :id="id"
      :name="id"
      type="file"
      ref="imageloader"
      class="input"
      accept=".jpg, .jpeg, .png, .mp4"
      @input="updateValue"
    />
    <label :for="id">
      +
    </label>
  </div>
</template>

<script setup>
const emit = defineEmits([ "update:file" ])

defineProps({
  file: File,
  id: String,
  maxSize: [String, Number],
})

function updateValue(e) {
  if (e.target.files[0]) {
    emit("update:file", e.target.files[0])
  }
}
</script>

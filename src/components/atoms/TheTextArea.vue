<template>
  <div class="textarea-wrapper">
    <label :for="name" :class="{ filled: isFocus || modelValue !== '' }">{{ label }}</label>

    <textarea
      ref="input"
      :value="modelValue"
      :name="name"
      :rows="rows"
      :cols="cols"
      @focus="focusHandler(true)"
      @focusout="focusHandler(false)"
      @input="updateValue"
    ></textarea>
  </div>
</template>

<script setup>
import { ref } from "vue"

const input = ref(null)

const emit = defineEmits([ "update:modelValue" ])

defineProps({
  modelValue: {},
  name: String,
  label: String,
  rows: String,
  cols: String,
})

const isFocus = ref(false)

function focusHandler(e) {
  isFocus.value = e
}

function updateValue() {
  const value = input.value.value
  emit("update:modelValue", value)
}
</script>

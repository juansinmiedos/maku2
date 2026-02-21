<template>
  <div class="input-wrapper">
    <label :for="name" :class="{ filled: isFocus || modelValue !== '' }">{{ label }}</label>

    <input
      ref="input"
      :value="modelValue"
      :name="name"
      :type="type"
      @focus="focusHandler(true)"
      @focusout="focusHandler(false)"
      @input="updateValue"
    />
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
  type: {
    type: String,
    validator(v) {
      return [
        "text",
        "tel",
        "number",
        "password",
        "email",
        "date",
        "hidden",
      ].includes(v)
    },
  },
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

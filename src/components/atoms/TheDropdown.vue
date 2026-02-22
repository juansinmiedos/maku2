<template>
  <div class="dropdown-wrapper">
    <label :for="name" :class="{ filled: modelValue !== '' }">{{ label }}</label>

    <select
      ref="input"
      :value="modelValue"
      :name="name"
      @input="updateValue"
    >
      <option value=""></option>
      <option v-for="(option, i) in options" :key="i" :value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue"

const input = ref(null)

const emit = defineEmits([ "update:modelValue" ])

defineProps({
  modelValue: {},
  options: Array,
  name: String,
  label: String,
})

function updateValue() {
  const value = input.value.value
  emit("update:modelValue", value)
}
</script>

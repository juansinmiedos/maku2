<template>
  <div class="checkbox-wrapper">
    <div>
      <input
        ref="input"
        :checked="modelValue"
        :name="name"
        type="checkbox"
        @input="updateValue"
      />
  
      <label :for="name" class="title-sm">{{ label }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const input = ref(null)

const emit = defineEmits([ "update:modelValue" ])

defineProps({
  modelValue: Boolean,
  name: String,
  label: String,
})

function updateValue() {
  const value = input.value.value
  emit("update:modelValue", value)
}
</script>

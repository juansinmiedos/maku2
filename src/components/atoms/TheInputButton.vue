<template>
  <div class="input-button-wrapper">
    <div class="input-button">
      <input
        v-if="!isLoading && !isSent"
        ref="input"
        :value="modelValue"
        placeholder="Enter Your Email"
        type="email"
        @input="updateValue"
      />
      <span class="blank" v-else-if="isLoading">Sending...</span>
      <span class="blank" v-else-if="isSent">Thank you!</span>

      <div class="button_arrow_wrapper" @click="emitsClick">
        <div class="arrow-button">
          <svg v-if="isSent" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 18" fill="none">
            <path d="M1 10L8 17L24 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else class="arrow-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
            <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
              <rect width="16" height="16" fill="#D9D9D9"></rect>
            </mask>
            <g mask="url(#mask0)">
              <path class="btn_path" d="M10.7885 8.67188H2.67188V7.33854H10.7885L7.05521 3.60521L8.00521 2.67188L13.3385 8.00521L8.00521 13.3385L7.05521 12.4052L10.7885 8.67188Z" fill="currentColor"></path>
              <path class="btn_path" d="M10.7885 8.67188H2.67188V7.33854H10.7885L7.05521 3.60521L8.00521 2.67188L13.3385 8.00521L8.00521 13.3385L7.05521 12.4052L10.7885 8.67188Z" fill="currentColor"></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="circle" :class="{ loading: isLoading || isSent }" @click="emitsClick"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const input = ref(null)

const emit = defineEmits([ "update:modelValue", "click" ])

const props = defineProps({
  modelValue: {},
  isLoading: Boolean,
  isSent: Boolean,
})

function updateValue() {
  const value = input.value.value
  emit("update:modelValue", value)
}

function emitsClick(e) {
  if (!props.isLoading && !props.isSent) {
    emit("click", e)
  }
}
</script>
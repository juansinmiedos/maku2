<template>
  <div class="button-wrapper">
    <button :class="type">
      <span class="text" :class="type"><slot></slot></span>

      <div aria-hidden="true" class="button_arrow_wrapper">
        <div class="arrow-button" :class="type">
          <svg class="arrow-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
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
      <div aria-hidden="true" class="circle" :class="type"></div>
    </button>
  </div>
</template>

<script setup>
defineProps({
  type: String
})
</script>
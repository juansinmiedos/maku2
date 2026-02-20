<template>
  <div class="button-wrapper">
    <a class="btn">
      <p class="button-text">Join our mission</p>
      <div aria-hidden="true" class="btn_arrow_wrapper">
        <div class="arrow-button w-embed">
          <svg class="btn_icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
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
      <div aria-hidden="true" class="btn_circle"></div>
    </a>
  </div>
</template>

<style scoped>

.btn {
  z-index: 0;
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 999999px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: flex-start;
  align-items: center;
  min-height: 3rem;
  padding-left: 1.5rem;
  padding-right: .25rem;
  text-decoration: none;
  display: inline-flex;
  transition: all 1150ms ease-in-out !important;
}

.btn:hover {
  background-color: #afff6f;;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.2s;
}

.btn:hover .button-text {
  color: #3b0b0b !important;
  transition: all 150ms ease-in-out !important;
}

.button-text {
  z-index: 2;
  color: #fff;
  transition: color .2s;
  transition: all 1150ms ease-in-out !important;
}

.btn_arrow_wrapper {
  z-index: 2;
  flex-flow: row;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  margin-left: auto;
  margin-right: .3rem;
  position: relative;
  right: 5px;
}

/*  */

.arrow-button, .arrow-button:where(.w-variant-3b1485e0-a0d0-d89e-eed0-19a327d2ab28) {
    color: #000;
}

/* .w-embed:before, .w-embed:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
} */

/* svg:not(:root) {
    overflow: hidden;
} */

.btn_icon {
    width: 16px;
    height: 16px;
    overflow: visible;
    position: relative;
}

/* .btn_path:first-child {
    transition-delay: 0.1s;
}
.btn_path {
    transition: transform 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0;
    top: 0;
} */

.btn_circle {
  transform: translateY(-50%) scale(1);
  transition: transform 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  pointer-events: none;
}

.btn_circle {
  background-color: #afff6f;;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 50%;
  right: .25rem;
}

.btn:hover .btn_circle {
  transform: translateY(-50%) scale(15);
}
</style>
<template>
  <section class="contact-section">
    <div class="box">
      <TheStepper v-model="state.step" :steps="3" />

      <div class="flex column" style="gap: 12px;">
        <h4>The bold ones act first.</h4>
        <p class="title-sm">Hi there! We’re excited to connect. To help us hit the ground running and tailor our strategy for maximum impact, please fill out the form below.</p>
      </div>

      <!-- form -->
      <div>
        <TheInput
          v-model="state.field"
          label="First name"
          name="firstName"
          type="text"
        />
      </div>

      <TheButton @click="nextStep">Continue</TheButton>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

import TheStepper from '@/components/atoms/TheStepper.vue'
import TheInput from '@/components/atoms/TheInput.vue'
import TheButton from '@/components/atoms/TheButton.vue'

const state = reactive({
  step: 1,
  field: "Juan Vidal"
})

function nextStep() {
  state.step++
}
</script>

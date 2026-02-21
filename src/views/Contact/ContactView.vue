<template>
  <section class="contact-section">
    <div class="box">
      <!-- stepper -->

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

      <TheButton>Continue</TheButton>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

import TheButton from '@/components/atoms/TheButton.vue'
import TheInput from '@/components/atoms/TheInput.vue'

const state = reactive({
  field: "Juan Vidal"
})
</script>

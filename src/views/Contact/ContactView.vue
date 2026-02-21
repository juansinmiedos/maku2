<template>
  <section class="contact-section">
    <div class="box">
      <TheStepper v-model="state.step" :steps="3" />

      <div class="flex column" style="gap: 12px;">
        <h4>The bold ones act first.</h4>
        <p class="title-sm">Hi there! We’re excited to connect. To help us hit the ground running and tailor our strategy for maximum impact, please fill out the form below.</p>
      </div>

      <!-- Step 1 -->
      <div v-show="state.step === 1">
        <p class="title-lg" style="margin-bottom: 20px;">Personal Information</p>

        <div class="flex wrap" style="gap: 12px;">
          <div class="flex" style="gap: 12px;">
            <TheInput
              v-model="state.firstName"
              label="First name"
              name="firstName"
              type="text"
            />

            <TheInput
              v-model="state.lastName"
              label="Last name"
              name="lastName"
              type="text"
            />
          </div>

          <TheInput
            v-model="state.phoneNumber"
            label="Phone number (WhatsApp)"
            name="phoneNumber"
            type="text"
          />
  
          <TheInput
            v-model="state.email"
            label="Email address"
            name="email"
            type="text"
          />
        </div>
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

  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
})

function nextStep() {
  state.step++
}
</script>

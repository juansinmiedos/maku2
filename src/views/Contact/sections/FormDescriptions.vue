<template>
  <div v-if="step === 1" class="flex column" style="gap: 12px;">
    <h4>The bold ones act first.</h4>
    <p class="title-sm">Hi there! We’re excited to connect. To help us hit the ground running and tailor our strategy for maximum impact, please fill out the form below.</p>
  </div>

  <p v-if="step === 2" class="title-lg">How can we help your business grow?</p>

  <div v-if="step === 3" class="flex column" style="gap: 16px;">
    <p class="title-lg">Let’s talk about numbers</p>
    <p class="title-sm">The price of our services may vary depending on the scope of the project, so it’s important for us to understand your budget from the start.</p>
  </div>

  <div v-if="step === 4" class="flex column" style="gap: 16px;">
    <p class="title-lg">Thank you! We’ve received your information. </p>
    <p class="title-sm">TYou’ll get a confirmation email shortly, and we’ll be in touch soon to continue the conversation.In the meantime, you can download our services sheet below.</p>
  </div>
</template>

<script setup>
defineProps({
  step: Number,
})
</script>

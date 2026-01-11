<template>
  <footer class="footer">
    <div class="top">
      <div class="title-section">
        <div class="title-container">
          <div class="text-wrapper">
            <p class="title-lg">Don’t wait to get noticed.</p>
            <h3 style="width: 355px;">The bold ones act first.</h3>
          </div>
          
           <TheButton>Enter Your Email</TheButton>
        </div>
      </div>

      <div class="body-section">
        <div class="body-container gap">
          <p class="overline-md">Our approach to your brand?</p>
          <p class="title-md">Ask for a free 15-minute audit. We’ll review your current communication and tell you what’s getting in your way (and how to fix it).</p>
        </div>
        <div class="body-container">
          <p class="overline-md">Contact</p>
          <div class="contact-details">
            <a>michellepeniche@maku.agency</a>
            <a>+52 (62) 4320 0680</a>
            <a>@maku.agency</a> <!-- should be router link -->
          </div>
        </div>
      </div>
    </div>

    <div>
      <img src="../assets/maku-logo.svg" width="100%" />

      <div class="bottom">
        <div class="w-100">
          <a class="text-semi-bold">Maku Agency 2026</a>
        </div>
        <a class="w-100 text-semi-bold">Terms & Conditions</a>
        <a class="w-100 text-semi-bold">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import TheButton from './TheButton.vue'

</script>

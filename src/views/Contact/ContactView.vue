<template>
  <section class="contact-section">
    <div class="box">
      <TheStepper v-model="state.step" :steps="3" />

      <div v-if="state.step === 4" class="w-100 flex justify-center">
        <CheckIcon />
      </div>

      <FormDescriptions :step="state.step" />

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

      <!-- Step 2 -->
      <div v-show="state.step === 2" class="flex column" style="gap: 32px;">
        <p class="title-lg">Business Information</p>

        <div class="flex wrap" style="gap: 12px;">
          <TheInput
            v-model="state.businessName"
            label="Business name"
            name="businessName"
            type="text"
          />
  
          <TheInput
            v-model="state.website"
            label="Business website"
            name="website"
            type="text"
          />

          <TheInput
            v-model="state.businessType"
            label="Business type"
            name="businessType"
            type="text"
          />

          <TheInput
            v-model="state.instagram"
            label="Instagram account"
            name="instagram"
            type="text"
          />

          <TheInput
            v-model="state.brand"
            label="Tell us about your brand"
            name="brand"
            type="text"
          />

          <TheTextArea
            v-model="state.reference"
            label="Do you have any reference or competitors you would like to include?"
            name="reference"
          />
        </div>

        <div class="w-100 flex column" style="gap: 8px;">
          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.naming"
              label="Naming"
              name="naming"
            />

            <TheCheckbox
              v-model="state.branding"
              label="Branding"
              name="branding"
            />
          </div>

          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.visualIdentity"
              label="Visual Identity"
              name="visualIdentity"
            />

            <TheCheckbox
              v-model="state.socialMediaStrategy"
              label="Social Media Strategy"
              name="socialMediaStrategy"
            />
          </div>

          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.websiteCommerce"
              label="Website/E-commerce"
              name="websiteCommerce"
            />

            <TheCheckbox
              v-model="state.contentCreation"
              label="Content Creation (Photo & Video)"
              name="contentCreation"
            />
          </div>

          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.marketing"
              label="Marketing Campaing"
              name="marketing"
            />

            <TheCheckbox
              v-model="state.packaging"
              label="Packaging & Product Design"
              name="packaging"
            />
          </div>

          <div class="w-100">
            <TheCheckbox
              v-model="state.other"
              label="Other"
              name="other"
            />
          </div>
        </div>
      </div>

      <TheButton v-if="state.step <= 3" @click="nextStep">Continue</TheButton>
      <TheButton v-else @click="downloadServiceSheet">Download our service sheet</TheButton>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

import TheStepper from '@/components/atoms/TheStepper.vue'
import CheckIcon from './sections/CheckIcon.vue'
import FormDescriptions from './sections/FormDescriptions.vue'
import TheInput from '@/components/atoms/TheInput.vue'
import TheTextArea from '@/components/atoms/TheTextArea.vue'
import TheCheckbox from '@/components/atoms/TheCheckbox.vue'
import TheButton from '@/components/atoms/TheButton.vue'

const state = reactive({
  step: 4,

  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",

  businessName: "",
  website: "",
  businessType: "",
  instagram: "",
  brand: "",
  reference: "",
  // checkboxes
  naming: false,
  branding: false,
  visualIdentity: false,
  socialMediaStrategy: false,
  websiteCommerce: false,
  contentCreation: false,
  marketing: false,
  packaging: false,
  other: false,
})

function nextStep() {
  state.step++
}
</script>

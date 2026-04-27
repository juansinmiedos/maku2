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
        <p class="title-lg" style="margin-bottom: 20px;">{{ $t('views.contact.step.1.title') }}</p>

        <div class="flex wrap" style="gap: 12px;">
          <div class="w-100 flex" style="gap: 12px;">
            <TheInput
              v-model="state.firstName"
              :label="$t('views.contact.step.1.firstName')"
              name="firstName"
              type="text"
            />

            <TheInput
              v-model="state.lastName"
              :label="$t('views.contact.step.1.lastName')"
              name="lastName"
              type="text"
            />
          </div>

          <TheInput
            v-model="state.phoneNumber"
            :label="$t('views.contact.step.1.phone')"
            name="phoneNumber"
            type="text"
          />
  
          <TheInput
            v-model="state.email"
            :label="$t('views.contact.step.1.email')"
            name="email"
            type="text"
          />
        </div>
      </div>

      <!-- Step 2 -->
      <div v-show="state.step === 2" class="flex column" style="gap: 32px;">
        <p class="title-lg">{{ $t('views.contact.step.2.title') }}</p>

        <div class="flex wrap" style="gap: 12px;">
          <TheInput
            v-model="state.businessName"
            :label="$t('views.contact.step.2.businessName')"
            name="businessName"
            type="text"
          />
  
          <TheInput
            v-model="state.website"
            :label="$t('views.contact.step.2.website')"
            name="website"
            type="text"
          />

          <TheInput
            v-model="state.businessType"
            :label="$t('views.contact.step.2.businessType')"
            name="businessType"
            type="text"
          />

          <TheInput
            v-model="state.instagram"
            :label="$t('views.contact.step.2.instagram')"
            name="instagram"
            type="text"
          />

          <TheInput
            v-model="state.brand"
            :label="$t('views.contact.step.2.brand')"
            name="brand"
            type="text"
          />

          <TheTextArea
            v-model="state.reference"
            :label="$t('views.contact.step.2.reference')"
            name="reference"
          />
        </div>

        <div class="w-100 flex column" style="gap: 8px;">
          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.naming"
              :label="$t('views.contact.step.2.naming')"
              name="naming"
            />

            <TheCheckbox
              v-model="state.branding"
              :label="$t('views.contact.step.2.branding')"
              name="branding"
            />
          </div>

          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.visualIdentity"
              :label="$t('views.contact.step.2.visualIdentity')"
              name="visualIdentity"
            />

            <TheCheckbox
              v-model="state.socialMediaStrategy"
              :label="$t('views.contact.step.2.socialMediaStrategy')"
              name="socialMediaStrategy"
            />
          </div>

          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.websiteCommerce"
              :label="$t('views.contact.step.2.websiteCommerce')"
              name="websiteCommerce"
            />

            <TheCheckbox
              v-model="state.contentCreation"
              :label="$t('views.contact.step.2.contentCreation')"
              name="contentCreation"
            />
          </div>

          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.marketing"
              :label="$t('views.contact.step.2.marketing')"
              name="marketing"
            />

            <TheCheckbox
              v-model="state.packaging"
              :label="$t('views.contact.step.2.packaging')"
              name="packaging"
            />
          </div>

          <div class="w-100">
            <TheCheckbox
              v-model="state.other"
              :label="$t('views.contact.step.2.other')"
              name="other"
            />
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div v-show="state.step === 3" class="w-100 flex column">
        <TheDropdown
          v-model="state.budget"
          :label="$t('views.contact.step.3.budget')"
          name="budget"
          :options="state.options"
        />
      </div>

      <TheButton
        v-if="state.step === 1"
        :isDisabled="firstButtonIsDisabled"
        @click="nextStep"
      >{{ $t('common.continue') }}</TheButton>
      <TheButton
        v-if="state.step === 2"
        :isDisabled="secondButtonIsDisabled"
        @click="nextStep"
      >{{ $t('common.continue') }}</TheButton>
      <TheButton
        v-if="state.step === 3"
        :isDisabled="thirdButtonIsDisabled"
        :isLoading="state.formIsSending"
        @click="sendForm"
      >{{ $t('common.continue') }}</TheButton>
      <TheButton
        v-else-if="state.step === 4"
        arrowDirection="down"
        @click="downloadServiceSheet"
      >{{ $t('views.contact.step.4.button') }}</TheButton>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useMainStore } from '@/stores/main.store'

import TheStepper from '@/components/atoms/TheStepper.vue'
import CheckIcon from './sections/CheckIcon.vue'
import FormDescriptions from './sections/FormDescriptions.vue'
import TheInput from '@/components/atoms/TheInput.vue'
import TheTextArea from '@/components/atoms/TheTextArea.vue'
import TheCheckbox from '@/components/atoms/TheCheckbox.vue'
import TheDropdown from '@/components/atoms/TheDropdown.vue'
import TheButton from '@/components/atoms/TheButton.vue'

const mainStore = useMainStore()

const state = reactive({
  step: 1,
  formIsSending: false,

  // Form 1
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",

  // Form 2
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

  // Form 3
  budget: "",
  options: [
    {
      text: "1,000-2,000 USD",
      value: "1,000-2,000 USD",
    },
    {
      text: "2,000-3,500 USD",
      value: "2,000-3,500 USD",
    },
    {
      text: "3,500-5,000 USD",
      value: "3,500-5,000 USD",
    },
  ],
})

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const firstButtonIsDisabled = computed(() => {
  return (
    state.firstName === "" ||
    state.lastName === "" ||
    state.phoneNumber.length !== 10 ||
    !emailRegex.test(state.email)
  )
})
const secondButtonIsDisabled = computed(() => {
  return (
    state.businessName === "" ||
    state.website === "" ||
    state.businessType === "" ||
    state.instagram === "" ||
    state.brand === "" ||
    state.reference === ""
  )
})
const thirdButtonIsDisabled = computed(() => {
  return (
    state.budget === ""
  )
})

function nextStep() {
  state.step++
}

function downloadServiceSheet() {
  const fileUrl = "service-sheet.pdf"
  const link = document.createElement('a')
  link.href = fileUrl
  link.download = 'MAKU - SELECTED SERVICES.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

async function sendForm() {
  try {
    state.formIsSending= true
    const body = {
      firstName: state.firstName,
      lastName: state.lastName,
      phoneNumber: state.phoneNumber,
      email: state.email,
      businessName: state.businessName,
      website: state.website,
      businessType: state.businessType,
      instagram: state.instagram,
      brand: state.brand,
      reference: state.reference,
      naming: state.naming,
      branding: state.branding,
      visualIdentity: state.visualIdentity,
      socialMediaStrategy: state.socialMediaStrategy,
      websiteCommerce: state.websiteCommerce,
      contentCreation: state.contentCreation,
      marketing: state.marketing,
      packaging: state.packaging,
      other: state.other,
      budget: state.budget,
    }
    await mainStore.sendForm(body) 
    nextStep()
  } catch (error) {
    // unhandled
  } finally {
    state.formIsSending= false
  }
}
</script>

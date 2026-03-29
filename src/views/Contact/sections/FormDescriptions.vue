<template>
  <div v-if="step === 1" class="flex column" style="gap: 12px;">
    <h4>{{ $t('common.boldOnes') }}</h4>
    <p class="title-sm">{{ $t('sections.formDescriptions.1.subtitle') }}</p>
  </div>

  <p v-if="step === 2" class="title-lg">{{ $t('sections.formDescriptions.2.title') }}</p>

  <div v-if="step === 3" class="flex column" style="gap: 16px;">
    <p class="title-lg">{{ $t('sections.formDescriptions.3.title') }}</p>
    <p class="title-sm">{{ $t('sections.formDescriptions.3.subtitle') }}</p>
  </div>

  <div v-if="step === 4" class="flex column" style="gap: 16px;">
    <p class="title-lg">{{ $t('sections.formDescriptions.4.title') }}</p>
    <p class="title-sm">{{ $t('sections.formDescriptions.4.subtitle') }}</p>
  </div>
</template>

<script setup>
defineProps({
  step: Number,
})
</script>

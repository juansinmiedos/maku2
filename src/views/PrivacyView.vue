<template>
  <LegalTemplate :data="privacyPolicy" />
</template>

<script setup>
import { privacyPolicy } from '@/data/legalData'

import LegalTemplate from '@/components/templates/LegalTemplate.vue'
</script>

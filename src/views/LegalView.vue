<template>
  <LegalTemplate :data="legalNotice" />
</template>

<script setup>
import { legalNotice } from '@/data/legalData'

import LegalTemplate from '@/components/templates/LegalTemplate.vue'
</script>

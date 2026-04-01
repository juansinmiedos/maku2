<template>
  <LegalTemplate :data="cookiePolicy" />
</template>

<script setup>
import { cookiePolicy } from '@/data/legalData'

import LegalTemplate from '@/components/templates/LegalTemplate.vue'
</script>

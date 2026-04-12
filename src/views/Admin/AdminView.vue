<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '@/stores/main.store'

const store = useMainStore()

onMounted(() => pingUser())

async function pingUser() {
  try {
    const res = await store.pingUser()
    console.log(res)
  } catch(error) {
    console.log(error)
  }
}
</script>

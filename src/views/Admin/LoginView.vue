<template>
  <section class="contact-section">
    <div class="box">
      <p class="title-lg">Log in</p>
      
      <div class="w-100">
        <div class="flex wrap" style="gap: 12px;">
          <TheInput
            v-model="state.user"
            label="User"
            name="user"
            type="text"
          />
  
          <TheInput
            v-model="state.password"
            label="Password"
            name="password"
            type="password"
          />
        </div>
      </div>

      <TheButton :isLoading="state.loading" @click="logIn">Iniciar sesión</TheButton>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useMainStore } from '@/stores/main.store'
import { useRouter } from 'vuetify/lib/composables/router'

import TheInput from '@/components/atoms/TheInput.vue'
import TheButton from '@/components/atoms/TheButton.vue'

const mainStore = useMainStore()
const router = useRouter()

const state = reactive({
  loading: false,
  user: "",
  password: "",
})

async function logIn() {
  try {
    state.loading = true
    // enviar
    router.push({ name: "AdminProjects" })
  } catch(error) {
    console.log("An error ocurred while logging in")
    console.log(error)
  } finally {
    state.loading = false
  }
}
</script>

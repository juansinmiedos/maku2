<template>
  <section class="admin-projects-view">
    <h2>Project Details</h2>

    <div class="w-100 flex column" style="gap: 24px;">
      <div class="flex" style="gap: 12px;">
        <TheInput
          v-model="state.title"
          label="Title"
          name="title"
          type="text"
          placeholder="e.g. Chévere"
        />

        <TheInput
          v-model="state.place"
          label="Place"
          name="place"
          type="text"
          placeholder="e.g. México"
        />

        <TheInput
          v-model="state.year"
          label="Year"
          name="year"
          type="text"
          placeholder="e.g. 2021"
        />

        <TheDropdown
          v-model="state.relatedProjects"
          label="Related projects"
          name="relatedProjects"
          :options="state.relatedProjectsOption"
        />
      </div>

      <div class="flex column" style="gap: 12px;">
        <h4>Proyectos relacionados</h4>

        <div class="flex" style="gap: 8px;">
          <TheLabel isActive>Project selected</TheLabel>
          <TheLabel isActive>Project selected</TheLabel>
          <TheLabel isActive>Project selected</TheLabel>
        </div>
      </div>

      <div>
        main image section
      </div>

      <div>
        secondary images section
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

import TheInput from '@/components/atoms/TheInput.vue'
import TheDropdown from '@/components/atoms/TheDropdown.vue'
import TheLabel from '@/components/atoms/TheLabel.vue'

const state = reactive({
  title: "",
  place: "",
  year: "",
  relatedProjects: "",
  relatedProjectsOption: []
})
</script>

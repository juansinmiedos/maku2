import { defineStore } from "pinia"
import { reactive } from "vue"
import projects from "@/data/projects"

export const useMainStore = defineStore("main", () => {
  const state = reactive({
    projects: [ ...projects ]
  })

  return {
    state,
  }
})

import { defineStore } from "pinia"
import { reactive } from "vue"
import { getProjectsRequest } from "@/services/projects"

import projects from "@/data/projects"

export const useMainStore = defineStore("main", () => {
  const state = reactive({
    projects: [ ...projects ]
  })

  async function getProjects() {
    try {
      const res = await getProjectsRequest()
      state.projects = res.data
    } catch(error) {
      console.error(error)
    }
  }

  return {
    state,
    getProjects
  }
})

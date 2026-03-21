import { defineStore } from "pinia"
import { reactive } from "vue"
// auth
import { getProjectsRequest } from "@/services/projects"
import { sendFormRequest } from "@/services/form"

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

  async function sendForm(body) {
    try {
      await sendFormRequest(body)
    } catch(error) {
      console.error(error)
    }
  }

  return {
    state,
    getProjects,
    sendForm
  }
})

import { defineStore } from "pinia"
import { reactive } from "vue"
// auth
import {
  getProjectsRequest,
  getProjectDetailsRequest,
  createProjectRequest,
  updateProjectRequest,
  deleteProjectRequest,
} from "@/services/projects"
import { sendFormRequest } from "@/services/form"

export const useMainStore = defineStore("main", () => {
  const state = reactive({
    projects: []
  })

  async function getProjects() {
    try {
      const res = await getProjectsRequest()
      state.projects = res.data
    } catch(error) {
      console.error(error)
      throw error
    }
  }

  async function getProjectDetails(name) {
    try {
      const res = await getProjectDetailsRequest(name)
      return res.data
    } catch(error) {
      console.error(error)
      throw error
    }
  }

  async function createProject(body) {
    try {
      const res = await createProjectRequest(body)
      return res.data
    } catch(error) {
      console.error(error)
      throw error
    }
  }

  async function deleteProject(id) {
    try {
      await deleteProjectRequest(id)
    } catch(error) {
      console.error(error)
      throw error
    }
  }

  async function sendForm(body) {
    try {
      await sendFormRequest(body)
    } catch(error) {
      console.error(error)
      throw error
    }
  }

  return {
    state,
    getProjects,
    getProjectDetails,
    createProject,
    deleteProject,
    sendForm
  }
})

import { defineStore } from "pinia"
import { reactive } from "vue"
import {
  getProjectsRequest,
  getProjectDetailsRequest,
  getCloudinarySignatureRequest,
  createProjectRequest,
  updateProjectRequest,
  deleteProjectRequest,
} from "@/services/projects"
import { sendFormRequest } from "@/services/form"
import {
  logInRequest,
  pingUserRequest,
  logOutRequest,
} from "@/services/auth"

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

  async function getCloudinarySignature() {
    try {
      const res = await getCloudinarySignatureRequest()
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

  async function updateProject(id, body) {
    try {
      await updateProjectRequest(id, body)
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

  async function logIn(body) {
    try {
      await logInRequest(body)
    } catch(error) {
      console.log(error)
      throw error
    }
  }

  async function pingUser() {
    try {
      const res = await pingUserRequest()
      return res
    } catch(error) {
      console.log(error)
      throw error
    }
  }

  async function logOut() {
    try {
      await logOutRequest()
    } catch(error) {
      console.log(error)
      throw error
    }
  }

  return {
    state,
    getProjects,
    getProjectDetails,
    getCloudinarySignature,
    createProject,
    updateProject,
    deleteProject,
    sendForm,
    logIn,
    pingUser,
    logOut,
  }
})

import { MainService } from "."

const getProjectsRequest = () => MainService.get("/projects")
const getProjectDetailsRequest = name => MainService.get(`/projects/${name}`)
const createProjectRequest = body => MainService.post("/projects", body, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
const updateProjectRequest = (id, body) => MainService.put(`/projects/${id}`, body, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
const deleteProjectRequest = id => MainService.delete(`/projects/${id}`)

export {
  getProjectsRequest,
  getProjectDetailsRequest,
  createProjectRequest,
  updateProjectRequest,
  deleteProjectRequest,
}

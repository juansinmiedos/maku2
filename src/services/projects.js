import { MainService } from "."

const getProjectsRequest = () => MainService.get("/projects")
const getProjectDetailsRequest = name => MainService.get(`/projects/${name}`)
const createProjectRequest = body => MainService.post("/projects", body)
const updateProjectRequest = (id, body) => MainService.put(`/projects/${id}`, body)
const deleteProjectRequest = id => MainService.delete(`/projects/${id}`)

export {
  getProjectsRequest,
  getProjectDetailsRequest,
  createProjectRequest,
  updateProjectRequest,
  deleteProjectRequest,
}

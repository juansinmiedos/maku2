import { MainService } from "."

const getProjectsRequest = () => MainService.get("/projects")

export {
  getProjectsRequest,
}

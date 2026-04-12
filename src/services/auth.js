import { MainService } from "."

const logInRequest = body => MainService.post("/login", body)
const pingUserRequest = () => MainService.get("/me")
const logOutRequest = () => MainService.post("/logout")

export {
  logInRequest,
  pingUserRequest,
  logOutRequest,
}

import { MainService } from "."

const sendFormRequest = body => MainService.post("/send-form", body)

export {
  sendFormRequest,
}

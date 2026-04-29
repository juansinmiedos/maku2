import { MainService } from "."

const sendFormRequest = body => MainService.post("/send-form", body)
const sendHotContactRequest = body => MainService.post("/send-hot-mail", body)

export {
  sendFormRequest,
  sendHotContactRequest,
}

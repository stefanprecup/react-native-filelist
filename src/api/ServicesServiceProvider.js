import ServicesService from './ServicesService'

let instance = null

export default function servicesService() {
  if (!instance) {
    instance = new ServicesService()
  }

  return instance
}
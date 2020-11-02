import ServicesGateway from './ServicesGateway'

export default class LocationsService {
  constructor() {
    this.servicesGateway = new ServicesGateway()
  }

  getServices() {
    return this.servicesGateway
      .getServices()
      .then(data => {
        console.log('servicesService', data);
        if (data.success === 0) throw data
        return data
      })
      .catch(err => {
        throw err
      })
  }
}
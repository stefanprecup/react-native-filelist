import  ApiGateway  from './ApiGateway'

export default class ServicesGateway extends ApiGateway {

  getServices() {
    return this.get('https://filelist.io/api.php?username=mertzzz&passkey=6b7178d18dca405246d7a8d90d7996c3&action=latest-torrents').then(response => {
      return response
    })
  }
}
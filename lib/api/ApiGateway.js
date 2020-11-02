class ApiGateway {

  request = (method, url = {}) => {
    /*
          @param method - string which will define the type of the request ( GET, POST, etc )
          @param url - string which will define the target url
          the function will return a promise with a JSON response
      */
    const options = {
      method: method
    };

    return fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson;
      })
      .catch((err) => new Error(err));
  };


  get = (endpoint = {}) => {
    return this.request('GET', endpoint, {});
  };
}
export default ApiGateway;

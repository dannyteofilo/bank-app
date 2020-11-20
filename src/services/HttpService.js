
const proxy = 'https://cors-anywhere.herokuapp.com/';
const urlApi = 'https://tryouts-cumplo.herokuapp.com';


class Http {

    constructor() { }

    request(url, config = {}) {
        return fetch(proxy + `${urlApi}${url}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return data
            })
            .catch(error => {
                console.warn(error)
                return error;
            });
        return this.axios.request(config);
    }

}

const http = new Http();

export default http;

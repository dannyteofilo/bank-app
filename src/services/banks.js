

import Http from './HttpService';

class BankService {

    getBranches() {
        return Http.request(`/branches`);
    }

    getEmployees(id) {
        return Http.request(`/employees/?branch=${id}`)
    }

    postEmployee(data) {
        console.log('data: ', data);
        const config = {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return Http.request(`/employees/`, config)
    }

}

const service = new BankService();

export default service;


import Http from './HttpService';

class BankService {

    getBranches() {
        return Http.request(`/branches`);
    }

    getEmployees(id){
        return Http.request(`/employees/?branch=${id}`)
    }

}

const service = new BankService();

export default service;
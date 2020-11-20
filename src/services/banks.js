

import Http from './HttpService';

class BankService {

    getBranches() {
        return Http.request(`/branches`);
    }

}

const service = new BankService();

export default service;
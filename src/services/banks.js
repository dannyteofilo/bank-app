

import Http from './HttpService';

class BankService {

    getBanks() {
        return Http.request(`/branches`);
    }

}

const service = new BankService();

export default service;
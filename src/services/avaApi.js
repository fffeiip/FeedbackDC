import axios from 'axios';

const avaApi = axios.create({
    baseURL: 'http://ava.ufrpe.br'
})

export default avaApi
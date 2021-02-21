import axios from 'axios';
import { externalServicesConfig } from '../config'

const { log } =  externalServicesConfig 
const LOG_SERVICE_URL = `${log.protocol}://${log.host}:${log.port}`;   

export const logReversedOrderedArray = async (reversedOrderedArray: number[]) => {
    try {
        return await axios.post(`${LOG_SERVICE_URL}/log-reversed`, { reversedOrderedArray });
    }
    catch (err) {
        console.log('log failed', err);
    }
}
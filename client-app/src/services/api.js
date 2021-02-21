import axios from "axios";
import { externalServicesConfig } from '../config';

const { clientArrays } =  externalServicesConfig;
const CLIENT_SERVICE_ARRAY_URL = `${clientArrays.protocol}://${clientArrays.host}:${clientArrays.port}`;   

export const getReversedOrderedArray = async (number) => {
    try {
        const res = await axios.post(`${CLIENT_SERVICE_ARRAY_URL}/reversed-ordered`, {number});
        return res?.data?.reversedOrderedArray;
    } catch(err){
        console.error(err);
    }
}


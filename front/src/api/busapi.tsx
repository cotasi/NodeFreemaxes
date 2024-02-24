import axios, { AxiosResponse} from 'axios';

import { busts } from '../ts/common';

export const busapi = async (): Promise<AxiosResponse<busts>> => {
    try {
        const response = await axios.get('/',{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('응답성공.리액트api함수.',response);
        return response;
    }catch(error) {
        console.log(error);
        throw error;
    }
    
};
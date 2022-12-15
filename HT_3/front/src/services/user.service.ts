import axios from '../utils/axios';

export const getUser = async () => {
    try {
        const data = await axios.get('/users/me');

        console.log(data);
    } catch (err) {

    }
}

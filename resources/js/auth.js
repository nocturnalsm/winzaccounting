import { store, setAuth } from './store';
import axios from 'axios';

const Auth = {

    login: async (data) => {

        try {
            const csrf = await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/login', data);
            store.dispatch(setAuth({
                isLoggedIn: true,
                user: response.data
            }))
            return response.data;
        }
        catch(err) {
            return {
                error : {
                    message: err.response.data.message,
                    errors: err.response.data.errors
                }
            }
        }        
    },

    logout: async () => {                
        const cookie =  await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/logout')
        store.dispatch(setAuth({isLoggedIn: false}))
    }
}

export default Auth;

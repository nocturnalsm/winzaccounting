import { store, setAuth, setAppLoading } from './store';
import axios from 'axios';

const Auth = {    

    login: async (data) => {
          
        store.dispatch(setAppLoading(true));    
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
        finally {
            store.dispatch(setAppLoading(false));
        } 
    },

    logout: async () => {
        store.dispatch(setAppLoading(true));
        try {
            const cookie =  await axios.get('/sanctum/csrf-cookie');
            const response = await axios.post('/logout')            
            store.dispatch(setAuth({isLoggedIn: false}))
        }
        catch (error){
            console.log(error)
        }
        finally {
            store.dispatch(setAppLoading(false));
        }
        
    }
}

export default Auth;


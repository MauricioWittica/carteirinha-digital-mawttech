import api from './api'


export async function register(data) {
    try {
        const response = await api.post(`/auth/register`, data)
        console.log(response.data)
          
    } catch(e){
        console.log(e);
    }
    
}

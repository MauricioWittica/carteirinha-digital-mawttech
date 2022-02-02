import api from './api';


export async function listMessages(data) {
    
    try {
        const response =  await api.post(`/auth/message-user-box/show`, data)

    const responseJson = response.data;
    console.log('menssagens', responseJson)

    } catch (error) {
        console.log(error)
    }
}
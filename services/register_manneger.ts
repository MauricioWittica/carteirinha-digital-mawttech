import api from './api'




interface ResponseRegisterUser {
    message: string
    erro: boolean
    id: string
}

export async function registerUser<ResponseRegisterUser>(data) {

    try {
        const response = await api.post(`/auth/register`, data)
        const responseJson = response.data
        return responseJson
    } catch (erro) {
        console.log(erro);
    }

}


export async function registerCard(data) {

    try {
        const response = await api.post(`/auth/card/register`, data)
        const responseJson = response.data
        return responseJson

    } catch (erro) {
        console.log(erro);
    }


}

export async function editCard(data) {



    try {
        const response = await api.post(`/auth/card/edit/`, data)
        const responseJson = response.data

        return responseJson

    } catch (erro) {
        console.log(erro);
    }


}

export async function showCard(data) {

    try {
        const response = await api.post(`/auth/card/show`, data)
        const responseJson = response.data
        return responseJson

    } catch (erro) {
        console.log(erro);
    }


}

export async function saveSelf(data) {
    try {
        const response = await api.post(`/auth/picture-avatar/upload`,data)
        console.log(response)
    } catch (error) {
        console.log('err: ', error)
    }
}
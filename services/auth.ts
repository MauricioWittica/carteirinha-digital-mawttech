import api from './../test/services/api';

interface Response {

    message: string
    jwt: string
    expireAt: string
    user: {
        first_name: string
        email: string
    }

}


interface Data {

    email: string
    password: string


}






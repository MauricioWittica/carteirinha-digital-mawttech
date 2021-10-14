import React from 'react';
import { createContext, useState, useEffect } from "react";
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface Card {
    birth_date: string
    filiation_date: string
    zone: string
    section: string
    city: string
    state: string
}

interface User {
    first_name: string;
    last_name: string
    email: string;
    card: Card;

}

interface ResponseData {

    message: string;
    jwt: string;
    expireAt: string;
    user: User;

}

interface AuthContextData {
    loading: boolean;
    signed: boolean;
    user: User | null;
    signIn(data): void;
    signOut(): void;

}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadStoragegetData() {

            try {
                const storageUser = await AsyncStorage.getItem('@MAW_PRTB_Auth:user');
                const storageToken = await AsyncStorage.getItem('@MAW_PRTB_Auth:token');
                const storageExpireAt = await AsyncStorage.getItem('@MAW_PRTB_AUTH:espireAt');

                if (storageUser && storageToken) {
                    api.defaults.headers.Authorization = `Bazer ${storageToken}`;
                        
                    setUser(JSON.parse(storageUser));
                    setLoading(false);
                    console.log(loading + ' valor loading dentro do if');
                    console.log(storageUser + ' valor USER dentro do if');
                    console.log(storageToken + ' valor TOKEN dentro do if');
                } else {
                    setLoading(false);

                }
            } catch (e) {
                'Error reading value'
            }
        }

        loadStoragegetData();
    }, []);
    console.log(loading + ' valor loading depois do metodo use Effect');
    //============Metodo para logar o usuario


    async function signIn(data) {

        try {
            const response = await api.post(`/auth/login`, data);
            const responseData: ResponseData = response.data
            // const{token, user} = response;
            console.log("Pós Login: " + JSON.stringify(response.data.expireAt));
            console.log("Pós Login: " + JSON.stringify(response.data.jwt));
            setUser(responseData.user);
            console.log('sou um aviso!!!!!!!!' + JSON.stringify(responseData.expireAt));
            api.defaults.headers.Authorization = `Bazer ${response.data.jwt}`;



            await AsyncStorage.setItem('@MAW_PRTB_Auth:user', JSON.stringify(responseData.user));
            await AsyncStorage.setItem('@MAW_PRTB_Auth:token', JSON.stringify(responseData.jwt));
            await AsyncStorage.setItem('@MAW_PRTB_Auth:expireAT', JSON.stringify(responseData.expireAt));


        } catch (e) {
            'Saving error'
            console.log('Erro ao efetuar o Login');

        }
    }
    //============Metodo para deslogar o usuario
    function signOut() {

        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    /*
    if(loading){
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large' color='#666'/>
            </View>);
    } */

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>);
};

export default AuthContext;
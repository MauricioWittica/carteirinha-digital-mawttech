import React, { useRef } from 'react';
import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';


interface Picture {

    height: string
    uri: string
    width: string

}

interface CameraContextData {
    activeCamera: boolean
    picture: Picture
    avatarPicture: Picture
    setAvatarPicture(data): void
    setPicture(data): void

}

export const CameraContext = createContext<CameraContextData>({} as CameraContextData);

export const CameraProvider = ({ children }) => {
    const [activeCamera, setActiveCamera] = useState(false);
    const [picture, setPicture] = useState(null)
    const [avatarPicture, setAvatarPicture] = useState(null)


    useEffect(() => {
        async function loadStoragegetData() {

            try {
                const storageAvatarPicture = await AsyncStorage.getItem('@MAW_PRTB_Camera:avatar_picture');

                if (storageAvatarPicture) {
                    setAvatarPicture(JSON.parse(storageAvatarPicture));

                } else {


                }
            } catch (e) {
                'Error reading value'
            }
        }

        loadStoragegetData();
    }, []);
    //============Metodo para logar o usuario

    




    return (
        <CameraContext.Provider value={{ activeCamera, picture, avatarPicture, setAvatarPicture, setPicture }}>
            {children}
        </CameraContext.Provider>);
};

export default CameraContext;
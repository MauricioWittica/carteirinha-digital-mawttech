import React, { useRef } from 'react';
import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';


interface Photo {

    height: number
    uri: string
    width: number

}

interface CameraContextData {
    activeCamera: boolean
    picture: Photo
    avatarPicture: Photo
    activeCamEdit: boolean
    setActiveCamEdit(data): void 
    setAvatarPicture(data): void
    setPicture(data): void

}

export const CameraContext = createContext<CameraContextData>({} as CameraContextData);

export const CameraProvider = ({ children }) => {
    const [activeCamera, setActiveCamera] = useState(false);
    const [picture, setPicture] = useState(null)
    const [avatarPicture, setAvatarPicture] = useState(null)
    const [activeCamEdit, setActiveCamEdit] = useState(false)


    useEffect(() => {
        async function loadStoragegetData() {

            try {
                const storageAvatarPicture = await AsyncStorage.getItem('@MAWTTECH_Camera:avatar_picture');

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
    

    




    return (
        <CameraContext.Provider value={{ activeCamEdit, setActiveCamEdit, activeCamera, picture, avatarPicture, setAvatarPicture, setPicture }}>
            {children}
        </CameraContext.Provider>);
};

export default CameraContext;
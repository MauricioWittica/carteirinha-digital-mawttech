import React, { createContext, useState , useContext } from "react";


interface ButtonContateContextData {
   
    isEnabledButtonContate: boolean;
    toggleButtonContate(): void;

}

export const ButtonContateContext = createContext<ButtonContateContextData>({} as ButtonContateContextData);

//===========================//=//=//=>

const ButtonContateProvider = ({children}) =>{
    const [isEnabledButtonContate, setIsEnabledButtonContate] = useState(false);
    const toggleButtonContate = () => { setIsEnabledButtonContate(previous => !previous) }


    return(
        <ButtonContateContext.Provider value={{isEnabledButtonContate: isEnabledButtonContate, toggleButtonContate: toggleButtonContate}}>
            {children}
        </ButtonContateContext.Provider>
    );
}

export default ButtonContateProvider;
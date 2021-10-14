import React, { createContext, useState , useContext } from "react";


interface ButtonNavMenuContextData {
   
    isEnabled: boolean;
    toggleButton(): void;

}

export const ButtonNavMenuContext = createContext<ButtonNavMenuContextData>({} as ButtonNavMenuContextData);

//===========================//=//=//=>

const ButtonNavMenuProvider = ({children}) =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleButton = () => { setIsEnabled(previous => !previous) }


    return(
        <ButtonNavMenuContext.Provider value={{isEnabled: isEnabled, toggleButton}}>
            {children}
        </ButtonNavMenuContext.Provider>
    );
}

export default ButtonNavMenuProvider;
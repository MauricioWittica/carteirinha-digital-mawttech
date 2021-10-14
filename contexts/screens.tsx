import React, { createContext, useState} from "react";
import { useIsFocused } from '@react-navigation/native';

interface ScreensContextData {

    nameScreen: string;
   toggleNameScreen(props:string):  void;
   
}



export const ScreensContext = createContext<ScreensContextData>({} as ScreensContextData);

//===========================//=//=//=>
const ScreensProvider = ({ children }) => {
const [nameScreen, setNameScreen] = useState(null);

function toggleNameScreen(screen){
    
    setNameScreen(screen);
    console.log('#### Resultado screen: ' + screen + ' #######');

}




    return (
        <ScreensContext.Provider value={{ nameScreen , toggleNameScreen}}>
            {children}
        </ScreensContext.Provider>
    );
}

export default ScreensProvider;
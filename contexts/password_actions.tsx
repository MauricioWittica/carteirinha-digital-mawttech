import React, { createContext, useContext, useState } from "react";
import * as pass from '../services/pass';



interface Password {

    password: {
        input1: string;
        input2: string;
        input3: string;
        input4: string;
        input5: string;
        input6: string;
    }

    
}

interface SetPassword {

    setPassword: {
        setInput1: (props:string)=>{};
        setInput2: (props:string)=>{};
        setInput3: (props:string)=>{};
        setInput4: (props:string)=>{};
        setInput5: (props:string)=>{};
        setInput6: (props:string)=>{};
    }

    
}


interface PassActionsContextData {

    
}



export const PassActionsContext = createContext<PassActionsContextData>({} as PassActionsContextData);




//============>><---->Default<----><<=====/=/=/=/=/=/


export const PassActionsProvider = ({ children }) => {
    const [formTouch, setFormTouch] = useState(false);
    const [password, setPassword] = useState<Password|null>(null);

    function setInput1(props: Password){

        let  password = props.password;
console.log(password.input1);

    }
  

    return (
        <PassActionsContext.Provider value={{ formTouch: !!password, password}}>
            { children }
        </PassActionsContext.Provider >);
}

export default PassActionsProvider;

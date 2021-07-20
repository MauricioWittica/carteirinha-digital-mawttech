import React from 'react';
import { createContext , useState} from "react";
import * as auth from '../test/services/auth';

interface AuthContextData{
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState<object | null>(null);

    async function signIn() {
       const response = await auth.signIn();

      // const{token, user} = response;

       setUser(response.user);
    }
    
    function signOut(){
        setUser(null);
    }
    
    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>);
};

export default AuthContext;
import React, { createContext, useState , useContext } from "react";
import { ScreensContext } from './screens';


interface NavMenuContextData {
   
    statePage: string;


}

export const NavMenuContext = createContext<NavMenuContextData>({} as NavMenuContextData);

//===========================//=//=//=>


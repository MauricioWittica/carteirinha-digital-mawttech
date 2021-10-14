import  React , { useContext, useState } from 'react';
import { IconButton } from 'react-native-paper';
import { ButtonNavMenuContext } from './../../../contexts/buttonNavMenu';
import { MoreVertIcon } from './../../icons/More-Vert/index';
import { NavMenuContext } from './../../../contexts/navMenu';





const ButtonNavMenu = (props)=>{
   const {isEnabled,toggleButton} = useContext(ButtonNavMenuContext); 



    
console.log(isEnabled ? "Abrindo NavMenu" : "Fechando NavMenu");



const iscolor = isEnabled ? "white":"black";

    return(

       
            
        <IconButton icon={({ size, color }) => (
            <MoreVertIcon size={24} color={iscolor}/>     

             )} onPress={()=>{toggleButton() }}/>
            
           
    );
}
export default ButtonNavMenu;
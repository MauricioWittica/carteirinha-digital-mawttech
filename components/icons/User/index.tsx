import React from "react";
import {FontAwesome5} from '@expo/vector-icons';

export const UserIcon = (props) => { 

return(

  <>
  <FontAwesome5 name="user-edit" size={props.size} color={props.color}/>
  </>

);
    
}
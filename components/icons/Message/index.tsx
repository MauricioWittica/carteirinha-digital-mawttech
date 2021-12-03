import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

export const MessageIcon = (props) => { 

return(

    <Ionicons name="mail" size={props.size} color={props.color}/>
);


  
}
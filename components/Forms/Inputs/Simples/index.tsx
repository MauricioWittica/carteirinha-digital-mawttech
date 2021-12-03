import React, { useRef } from 'react';
import { Text, TextInput, StyleSheet, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {

   
    inputRef: any
    field: string
}


export const Input: React.FC<InputProps> = ({inputRef, field, ...rest }: InputProps) => {


    
    return (
        <>
            <Text style={styles.field}>{field}</Text>
            <TextInput
                ref={inputRef}
                style={styles.input}               

                {...rest} />

        </>
    );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 54,
        
        borderRadius: 8,
        borderBottomColor:"#919057",
        borderBottomWidth: 4,
        paddingHorizontal: 16,

        marginTop: 4,
        marginBottom: 10,
        fontSize: 16
    },
    field: {
        marginTop: 10,
        fontSize: 16,
        color: "#3e8769",


    }
})
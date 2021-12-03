import React, { useRef } from 'react';
import { Text, TextInput, StyleSheet, TextInputProps } from "react-native";
import { maskCpf, maskRg, maskPhone, maskElectoralTitle, maskDate, maskSection, maskZone } from '../../../../utils/masks';

interface InputProps extends TextInputProps {

    mask: "email" | "phone" | "rg" | "cpf" | "electoral-title" | "date" | "zone" | "section"
    inputMaskChange: any
    inputRef: any
    field: string
}


const InputMask: React.FC<InputProps> = ({ mask, inputMaskChange, inputRef, field, ...rest }: InputProps) => {


    function handleChange(valueInput: string) {
        let value = ''
        switch (mask) {
            case "rg": value = maskRg(valueInput);

                break;

            case "cpf": value = maskCpf(valueInput);

                break;

            case "electoral-title": value = maskElectoralTitle(valueInput);

                break;

            case "phone": value = maskPhone(valueInput);

                break;
           
                case "date": value = maskDate(valueInput);

                break;

                case "zone": value = maskZone(valueInput);

                break;

                case "section": value = maskSection(valueInput);

                break;

            default:
                break;
        }
        inputMaskChange(value);
        inputRef.current.value = value
    }

    return (
        <>
            <Text style={styles.field}>{field}</Text>
            <TextInput
                ref={inputRef}
                style={styles.input}
                onChangeText={(text: string) => handleChange(text)}

                {...rest} />

        </>
    );
}

export default InputMask;

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
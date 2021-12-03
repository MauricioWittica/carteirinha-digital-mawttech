
import React, { useRef, useState } from 'react';
import { View, Alert, TextInput, Button, Text } from 'react-native';
import { useEffect } from 'react';
import { registerCard } from '../../../services/register_manneger'
import { useContext } from 'react';
import { AuthContext } from './../../../contexts/auth';
import InputMask from '../Inputs/Mask/index';
import { Input } from './../Inputs/Simples/index';

interface InputReference extends TextInput {

    value: string

}

interface Documents {
    rg: string
    cpf: string
    titulo: string

}

interface FormData {
    user_id: number
    birth_date: string
    filiation_date: string
    zone: string
    section: string
    city: string
    state: string
    documents: Documents
}



export const CardRegisterForm = () => {
    const { user, idUser, card, saveCard } = useContext(AuthContext);

    const birthDateRef = useRef<InputReference>(null)
    const filiationDateRef = useRef<InputReference>(null)
    const zoneRef = useRef<InputReference>(null)
    const sectionRef = useRef<InputReference>(null)
    const cityRef = useRef<InputReference>(null)
    const stateRef = useRef<InputReference>(null)
    const rgRef = useRef<InputReference>(null)
    const cpfRef = useRef<InputReference>(null)
    const tituloRef = useRef<InputReference>(null)
    const buttonRef = useRef(null)

    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [filiationDate, setFiliationDate] = useState("");
    const [electoralTitle, setElectoralTitle] = useState("");
    const [zone, setZone] = useState("");
    const [section, setSection] = useState("");





    useEffect(() => {

   

    }, [])


    function verificarInput(inputRef) {
        if (inputRef.current.value?.trim()) {
            return true
        } else {
            Alert.alert('Campos obrigatórios ', 'Um ou mais campos obrigatorios estão sem preencher.')

            return false
        }
    }


    function handlesForm() {

        if (!verificarInput(cityRef)) {
            cityRef.current.focus()
            cityRef.current.clear()

        } else if (!verificarInput(birthDateRef)) {
            birthDateRef.current.focus()
            birthDateRef.current.clear()

        } else if (!verificarInput(filiationDateRef)) {
            filiationDateRef.current.focus()
            filiationDateRef.current.clear()

        } else if (!verificarInput(zoneRef)) {
            zoneRef.current.focus()
            zoneRef.current.clear()
        } else if (!verificarInput(sectionRef)) {
            sectionRef.current.focus()
            sectionRef.current.clear()

        } else {
            let data = {
                user_id: idUser,
                birth_date: birthDateRef.current.value,
                filiation_date: filiationDateRef.current.value,
                zone: zoneRef.current.value,
                section: sectionRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                documents: {
                    rg: rgRef.current.value,
                    cpf: cpfRef.current.value,
                    titulo: tituloRef.current.value,
                }

            }

            saveCard(data)

        }




    }

    function mensagem() {

        let mensagem = Alert.alert('Cadastro de carteirinha', 'Sua carteirinha foi salva com sucesso' + ((cityRef.current?.value) ? ' Nome: ' + cityRef.current?.value : "") + " " + ((birthDateRef.current?.value) ? birthDateRef.current?.value : "") + ((filiationDateRef.current?.value) ? " email: " + filiationDateRef.current?.value : "") + ((zoneRef.current?.value) ? " password: " + zoneRef.current?.value : ""))


        return mensagem;
    }




    return (
        <View>

            <InputMask
                field="Date de nascimento"
                mask="date"
                value={birthDate}

                placeholder={'00/00/0000'}
                maxLength={10}
                inputRef={birthDateRef}
                inputMaskChange={(text) => setBirthDate(text)}
                onSubmitEditing={() => { filiationDateRef.current.focus(); }}
                blurOnSubmit={false}
                keyboardType="numeric"
                returnKeyType={"next"}
            />

            <InputMask
                field="Date de filiação"
                mask="date"
                value={filiationDate}
                placeholder={'00/00/0000'}

                maxLength={10}
                inputRef={filiationDateRef}
                inputMaskChange={(text) => setFiliationDate(text)}
                onSubmitEditing={() => { zoneRef.current.focus(); }}
                blurOnSubmit={false}
                keyboardType="numeric"
                returnKeyType={"next"}
            />

            <InputMask
                field="Zona"
                mask="zone"
                value={zone}
                placeholder={'000'}
                maxLength={3}
                inputRef={zoneRef}
                inputMaskChange={(text) => setZone(text)}
                onSubmitEditing={() => { sectionRef.current.focus(); }}
                blurOnSubmit={false}
                keyboardType="numeric"
                returnKeyType={"next"}
            />

            <InputMask
                field="Seção"
                mask="section"
                value={section}
               
                placeholder='0000'
                maxLength={4}
                inputRef={sectionRef}
                inputMaskChange={(text) => setSection(text)}
                onSubmitEditing={() => { cityRef.current.focus(); }}
                blurOnSubmit={false}
                keyboardType="numeric"
                returnKeyType={"next"}
            />


            <Input
                field='Cidade'
                maxLength={50}
                inputRef={cityRef}
                placeholder={'São Paulo'}
                onChangeText={(text) => { cityRef.current.value = text }}

                onSubmitEditing={() => { stateRef.current.focus(); }}

                keyboardType="default"
                returnKeyType={"next"}
            />


            <Input
                field='UF'
                maxLength={2}

                inputRef={stateRef}
                placeholder={'SP'}
                onChangeText={(text) => { stateRef.current.value = text }}
                onSubmitEditing={() => { rgRef.current.focus(); }}
                keyboardType="default"
                returnKeyType={"next"}
            />


            <InputMask
                field="RG"
                mask="rg"
                inputMaskChange={(text: string) => setRg(text)}
                value={rg}
                placeholder={'00.000.000-0'}
                maxLength={12}
                inputRef={rgRef}
                keyboardType="numeric"
                onSubmitEditing={() => { cpfRef.current.focus(); }}
                returnKeyType={"next"}
            />


            <InputMask
                field="CPF"
                mask="cpf"
                inputMaskChange={(text: string) => setCpf(text)}
                value={cpf}
                placeholder={'000.000.000-00'}
                maxLength={14}
                inputRef={cpfRef}

                onSubmitEditing={() => { tituloRef.current.focus(); }}
                keyboardType="numeric"
                returnKeyType={"next"}

            />

            <InputMask
                field="Titulo Eleitoral"
                mask="electoral-title"
                value={electoralTitle}
                placeholder={'0000 0000 0000'}
                maxLength={14}
                inputMaskChange={(text: string) => setElectoralTitle(text)}
                inputRef={tituloRef}
                onSubmitEditing={() => { handlesForm() }}
               
                keyboardType="numeric"
                returnKeyType={"send"}
            />

<Text> </Text>
            <Button ref={buttonRef} title="Salvar" onPress={() => { handlesForm() }} />

        </View>
    );
}



export default CardRegisterForm;

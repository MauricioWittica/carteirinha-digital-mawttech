import React, { useRef, useState } from "react";
import { View, Alert, TextInput, Button, Text } from "react-native";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";
import InputMask from "../Inputs/Mask/index";
import { Input } from "../Inputs/Simples/index";

interface InputReference extends TextInput {
  value: string;
}

interface Documents {
  rg: string;
  cpf: string;
  titulo: string;
}

interface FormData {
  user_id: number;
  birth_date: string;
  filiation_date: string;
  zone: string;
  section: string;
  city: string;
  state: string;
  documents: Documents;
}

export const CardEditForm = () => {
  const { user, card, saveCard, editCard } = useContext(AuthContext);

  const birthDateRef = useRef<InputReference>(null);

  const zoneRef = useRef<InputReference>(null);
  const sectionRef = useRef<InputReference>(null);
  const cityRef = useRef<InputReference>(null);
  const stateRef = useRef<InputReference>(null);
  const rgRef = useRef<InputReference>(null);
  const cpfRef = useRef<InputReference>(null);
  const tituloRef = useRef<InputReference>(null);
  const buttonRef = useRef(null);

  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [filiationDate, setFiliationDate] = useState("");
  const [electoralTitle, setElectoralTitle] = useState("");
  const [zone, setZone] = useState("");
  const [section, setSection] = useState("");

  function verificarInput(inputRef) {
    if (inputRef.current.value?.trim()) {
      return true;
    } else {
      Alert.alert(
        "Campos obrigatórios ",
        "Um ou mais campos obrigatorios estão sem preencher."
      );

      return false;
    }
  }

  function handlesForm() {
    let data = {
      user_id: user?.id,
      birth_date:
        birthDateRef.current.value !== undefined
          ? birthDateRef.current.value
          : card.birth_date,

      zone:
        zoneRef.current.value !== undefined ? zoneRef.current.value : card.zone,
      section:
        sectionRef.current.value !== undefined
          ? sectionRef.current.value
          : card.section,
      city:
        cityRef.current.value !== undefined ? cityRef.current.value : card.city,
      state:
        stateRef.current.value !== undefined
          ? stateRef.current.value
          : card.state,
      documents: {
        rg:
          rgRef.current.value !== undefined
            ? rgRef.current.value
            : card.documents.rg,
        cpf:
          cpfRef.current.value !== undefined
            ? cpfRef.current.value
            : card.documents.cpf,
        titulo:
          tituloRef.current.value !== undefined
            ? tituloRef.current.value
            : card.documents.titulo,
      },
    };
    console.log(data);
    editCard(data);
  }

  function mensagem() {
    let mensagem = Alert.alert(
      "Cadastro de carteirinha",
      "Sua carteirinha foi salva com sucesso" +
        (cityRef.current?.value ? " Nome: " + cityRef.current?.value : "") +
        " " +
        (birthDateRef.current?.value ? birthDateRef.current?.value : "") +
        +
        (zoneRef.current?.value ? " password: " + zoneRef.current?.value : "")
    );

    return mensagem;
  }

  return (
    <View>
      <InputMask
        field="Date de nascimento"
        mask="date"
        value={birthDate}
        placeholder={card.birth_date != null ? card.birth_date : "00/00/0000"}
        maxLength={10}
        inputRef={birthDateRef}
        inputMaskChange={(text) => setBirthDate(text)}
        onSubmitEditing={() => {
          rgRef.current.focus();
        }}
        blurOnSubmit={false}
        keyboardType="numeric"
        returnKeyType={"next"}
      />

      <InputMask
        field="RG"
        mask="rg"
        inputMaskChange={(text: string) => setRg(text)}
        value={rg}
        placeholder={
          card.documents.rg != undefined ? card.documents.rg : "00.000.000-0"
        }
        maxLength={12}
        inputRef={rgRef}
        keyboardType="numeric"
        onSubmitEditing={() => {
          cpfRef.current.focus();
        }}
        returnKeyType={"next"}
      />

      <InputMask
        field="CPF"
        mask="cpf"
        inputMaskChange={(text: string) => setCpf(text)}
        value={cpf}
        placeholder={
          card.documents.cpf != undefined
            ? card.documents.cpf
            : "000.000.000-00"
        }
        maxLength={14}
        inputRef={cpfRef}
        onSubmitEditing={() => {
          tituloRef.current.focus();
        }}
        keyboardType="numeric"
        returnKeyType={"next"}
      />

      <InputMask
        field="Titulo Eleitoral"
        mask="electoral-title"
        value={electoralTitle}
        placeholder={
          card.documents.titulo != undefined
            ? card.documents.titulo
            : "0000 0000 0000"
        }
        maxLength={14}
        inputMaskChange={(text: string) => setElectoralTitle(text)}
        inputRef={tituloRef}
        onSubmitEditing={() => {
          zoneRef.current.focus();
        }}
        keyboardType="numeric"
        returnKeyType={"send"}
      />

      <InputMask
        field="Zona"
        mask="zone"
        value={zone}
        placeholder={card.zone != undefined ? card.zone : "000"}
        maxLength={3}
        inputRef={zoneRef}
        inputMaskChange={(text) => setZone(text)}
        onSubmitEditing={() => {
          sectionRef.current.focus();
        }}
        blurOnSubmit={false}
        keyboardType="numeric"
        returnKeyType={"next"}
      />

      <InputMask
        field="Seção"
        mask="section"
        value={section}
        defaultValue={card.section != undefined ? card.section : ""}
        placeholder="0000"
        maxLength={4}
        inputRef={sectionRef}
        inputMaskChange={(text) => setSection(text)}
        onSubmitEditing={() => {
          cityRef.current.focus();
        }}
        blurOnSubmit={false}
        keyboardType="numeric"
        returnKeyType={"next"}
      />

      <Input
        field="Cidade"
        maxLength={50}
        inputRef={cityRef}
        placeholder={card.city != undefined ? card.city : "São Paulo"}
        onChangeText={(text) => {
          cityRef.current.value = text;
        }}
        onSubmitEditing={() => {
          stateRef.current.focus();
        }}
        keyboardType="default"
        returnKeyType={"next"}
      />

      <Input
        field="UF"
        maxLength={2}
        inputRef={stateRef}
        placeholder={card.state != undefined ? card.state : "SP"}
        onChangeText={(text) => {
          stateRef.current.value = text;
        }}
        onSubmitEditing={() => {
          handlesForm();
        }}
        keyboardType="default"
        returnKeyType={"next"}
      />

      <Text> </Text>
      <Button
        ref={buttonRef}
        title="Salvar Atualizações"
        onPress={() => {
          handlesForm();
        }}
      />
    </View>
  );
};

export default CardEditForm;

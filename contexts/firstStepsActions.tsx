import React, { useContext, useRef } from "react";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import FirstStepsRoutes from "../routes/first-steps.routes";
import { AuthContext } from "./auth";

interface Picture {
  height: string;
  uri: string;
  width: string;
}

interface FirstStepsContextData {
  activeFirstStepsStage1: boolean;
  activeFirstStepsStage2: boolean;
  activeFirstStepsStage3: boolean;
  activeFirstStepsStage4: boolean;
  activeFirstStepsStage5: boolean;
  activeFirstStepsStage6: boolean;
  activeFirstStepsStage7: boolean;
  showFirstSteps: string;
  showIntro: string;
  account: string;
  registerCard: string;
  registerSelf: string;

  setAccount(data): void;
  setRegisterCard(data): void;
  setRegisterSelf(data): void;
  hiddenMessageIntroRegister(): void;
  hiddenRegisterAccount(): void;
  hiddenRegisterCard(): void;
  hiddenMessageRegisterAccount(): void;
  hiddenMessageRegisterCard(): void;
  hiddenRegisterSelf(): void;
  hiddenMessageRegisterSelf(): void;
  setShowIntro(data): void;
  setShowFirstSteps(data): void;
}

export const FirstStepsContext = createContext<FirstStepsContextData>(
  {} as FirstStepsContextData
);

export const FirstStepsProvider = ({ children }) => {
  const [account, setAccount] = useState("no");
  const [registerCard, setRegisterCard] = useState("no");
  const [registerSelf, setRegisterSelf] = useState("no");
  const [showFirstSteps, setShowFirstSteps] = useState(null);
  const [showIntro, setShowIntro] = useState("show");
  const [activeFirstStepsStage1, setActiveFirstStepsStage1] = useState(false);
  const [activeFirstStepsStage2, setActiveFirstStepsStage2] = useState(false);
  const [activeFirstStepsStage3, setActiveFirstStepsStage3] = useState(false);
  const [activeFirstStepsStage4, setActiveFirstStepsStage4] = useState(false);
  const [activeFirstStepsStage5, setActiveFirstStepsStage5] = useState(false);
  const [activeFirstStepsStage6, setActiveFirstStepsStage6] = useState(true);
  const [activeFirstStepsStage7, setActiveFirstStepsStage7] = useState(false);

  //============Metodo para logar o usuario

  useEffect(() => {
    const loadStorage = async () => {
      try {
        const storageShowFirstSteps = await AsyncStorage.getItem(
          "@MAWTTECH_FirstStps:showFirstSteps"
        );
        //console.log(account)

        if (storageShowFirstSteps) {
          setShowFirstSteps(storageShowFirstSteps);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadStorage();
  }, []);

  function hiddenMessageIntroRegister() {
    setActiveFirstStepsStage1(false);
    setActiveFirstStepsStage2(true);
    console.log(
      "Primeiros passos iniciados abrindo formulário de cadastro de usuário..."
    );
  }

  function hiddenRegisterAccount() {
    setActiveFirstStepsStage2(false);
    setActiveFirstStepsStage3(true);
    console.log("Formulário preenchido...");
  }

  function hiddenMessageRegisterAccount() {
    setActiveFirstStepsStage3(false);
    setActiveFirstStepsStage4(true);
    console.log("Abrindo formulário de dados de usuário...");
  }

  function hiddenRegisterCard() {
    setActiveFirstStepsStage4(false);
    setActiveFirstStepsStage5(true);

    console.log("formulário de dados preenchido");
  }

  function hiddenMessageRegisterCard() {
    setActiveFirstStepsStage5(false);
    setActiveFirstStepsStage6(true);

    console.log("Pronto para tirar uma self...");
  }
  function hiddenRegisterSelf() {
    setActiveFirstStepsStage6(false);
    setActiveFirstStepsStage7(true);

    console.log("Pronto para o efetuar o login...");
  }
  async function hiddenMessageRegisterSelf() {
    setActiveFirstStepsStage7(false);

    setShowFirstSteps("hidden");
    await AsyncStorage.setItem("@MAWTTECH_FirstStps:showFirstSteps", "hidden");

    setActiveFirstStepsStage1(true);
    setActiveFirstStepsStage2(false);
    setActiveFirstStepsStage3(false);
    setActiveFirstStepsStage4(false);
    setActiveFirstStepsStage5(false);
    setActiveFirstStepsStage6(false);
    setActiveFirstStepsStage7(false);

    console.log("Todas etapas concluidas. Fazendo login do usuário...");
  }
  return (
    <FirstStepsContext.Provider
      value={{
        activeFirstStepsStage5,
        activeFirstStepsStage6,
        activeFirstStepsStage7,
        activeFirstStepsStage4,
        showIntro,
        showFirstSteps,
        activeFirstStepsStage1,
        activeFirstStepsStage2,
        activeFirstStepsStage3,
        hiddenMessageIntroRegister,
        hiddenRegisterAccount,
        hiddenRegisterCard,
        hiddenMessageRegisterAccount,
        hiddenMessageRegisterCard,
        hiddenRegisterSelf,
        hiddenMessageRegisterSelf,
        setShowFirstSteps,
        setShowIntro,
        account,
        setAccount,
        setRegisterCard,
        setRegisterSelf,
        registerCard,
        registerSelf,
      }}
    >
      {children}
    </FirstStepsContext.Provider>
  );
};

export default FirstStepsContext;

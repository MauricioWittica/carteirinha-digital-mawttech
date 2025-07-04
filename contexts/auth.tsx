import React, { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import * as register from "../services/register_manneger";
import { PanResponderGestureState, Alert } from "react-native";
import { FirstStepsContext } from "./firstStepsActions";
import { CameraContext } from "./camera";

interface Documents {
  rg: string;
  cpf: string;
  titulo: string;
}

interface Card {
  birth_date: string;
  filiation_date: string;
  zone: string;
  section: string;
  city: string;
  state: string;
  picture_avatar: string;
  documents: Documents | null;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
interface UserRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface UserLogin {
  email: string;
  password: string;
}
interface ResponseData {
  message: string;
  jwt: string;
  expireAt: string;
  user: User;
}

interface ResponseRegisterUser {
  message: string;
  erro: boolean;
  id?: string;
}

interface ResponseRegisterCard {
  codeErro: string;
  message: string;
  erro: boolean;
}

interface AuthContextData {
  loading: boolean;
  signed: boolean;
  user: User | null;
  firstLogin(): void;
  card: Card | null;
  idUser: number;
  saveSelf(data, id): void;
  setCard(data: Card): void;
  signIn(data): void;
  signOut(): void;
  saveCard(data): void;
  editCard(data): void;
  getCard(data): void;
  registerUsers(data: UserRegister): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }) => {
  const {
    hiddenRegisterAccount,
    hiddenRegisterCard,
    setAccount,
    setRegisterCard,
    setRegisterSelf,
    account,
  } = useContext(FirstStepsContext);
  const { avatarPicture } = useContext(CameraContext);
  const [user, setUser] = useState<User | null>(null);
  const [card, setCard] = useState<Card | null>(null);
  const [userLogin, setUserLogin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [idUser, setIdUser] = useState(null);

  useEffect(() => {
    async function loadStoragegetData() {
      try {
        const storageUserLogin = await AsyncStorage.getItem(
          "@MAWTTECH_Auth:userLogin"
        );
        const storageUser = await AsyncStorage.getItem("@MAWTTECH_Auth:user");
        const storageToken = await AsyncStorage.getItem("@MAWTTECH_Auth:token");
        const storageExpireAt = await AsyncStorage.getItem(
          "@MAWTTECH_Auth:espireAt"
        );
        const storageCard = await AsyncStorage.getItem("@MAWTTECH_Auth:card");
        if (storageUserLogin) {
          setUserLogin(JSON.parse(storageUserLogin));
        }
        if (storageUser && storageToken) {
          api.defaults.headers.Authorization = `Bazer ${storageToken}`;
          //console.log('mauriciowittica' + api.defaults.headers.Authorization)
          setUser(JSON.parse(storageUser));
          if (storageCard) {
            setCard(JSON.parse(storageCard));
            //console.log(card)
          }
          setLoading(false);
          //console.log(loading + ' valor loading dentro do if');
          //console.log(storageUser + ' valor USER dentro do if');
          //console.log(storageToken + ' valor TOKEN dentro do if');
        } else {
          setLoading(false);
        }
      } catch (e) {
        ("Error reading value");
      }
    }

    loadStoragegetData();
  }, []);
  //console.log(loading + ' valor loading depois do metodo use Effect');

  //========================| Metodo para logar o usuario |=========================//

  async function signIn(data) {
    try {
      const response = await api.post(`/auth/login`, data);
      const responseData: ResponseData = response.data;
      
      // const{token, user} = response;
      //console.log("Pós Login: " + JSON.stringify(response.data.expireAt));
      //console.log("Pós Login: " + JSON.stringify(response.data.jwt));
      setUser(responseData.user);
      // console.log('sou um aviso!!!!!!!!' + JSON.stringify(responseData.expireAt));
      api.defaults.headers.Authorization = `Bazer ${response.data.jwt}`;

      await AsyncStorage.setItem(
        "@MAWTTECH_Auth:user",
        JSON.stringify(responseData.user)
      );
      await AsyncStorage.setItem(
        "@MAWTTECH_Auth:token",
        JSON.stringify(responseData.jwt)
      );
      await AsyncStorage.setItem(
        "@MAWTTECH_Auth:expireAT",
        JSON.stringify(responseData.expireAt)
      );
      getCard(responseData.user.id);
    } catch (e) {
      
      console.log("Erro ao efetuar o Login");
      //console.log(JSON.stringify(e))
      console.log({...e})

      //console.log('error: ',e)
      //console.log('error: ',e.response.status)
      //console.log('error: ',e.response.data)
      //console.log('error: ',e.response.headers)
    
      Alert.alert(
        "",
        "Não foi posível efetuar o login.\nPor favor tente novamente mais tarde.",
        [
          {
            text: "Entendi",
            onPress: () => console.log("Entendi on clicked!"),
            style: "cancel",
          },
        ]
      );
    }
  }

  //=======================| Metodo para deslogar o usuario |====================================//

  function signOut() {
let keys = ['@MAWTTECH_Auth:user', '@MAW_Auth:token', '@MAW_Auth:card', '@MAW_Auth:espireAT'];

    const storages = AsyncStorage.multiRemove(keys).then((res)=>{
      setUser(null)
    setCard(null)
    })
    console.log(storages);

    
  }

  //============================| Metodo para registrar o Usuário |==================================//
  function firstLogin() {
    signIn(userLogin);
  }
  async function registerUsers(data: UserRegister) {
    try {
      const response: ResponseRegisterUser = await register.registerUser(data);
      //console.log(response)

      if (!response.erro) {
        const user: UserLogin = {
          email: data.email,
          password: data.password,
        };
        hiddenRegisterAccount();
        setAccount("yes");
        setUserLogin(user);
        await AsyncStorage.setItem(
          "@MAWTTECH_Auth:userLogin",
          JSON.stringify(user)
        );
        setIdUser(response.id);
        console.log("Conta criada com sucesso!");
        //console.log('user: ', userLogin)
        return response;
      } else if (response.erro) {
        Alert.alert(
          "",
          "Não foi possível criar sua conta.\nTente novamente mais tarde."
        );
      }
    } catch (erro) {
      console.log(erro);
      Alert.alert(
        "",
        "Não foi possível criar sua conta.\nTente novamente mais tarde."
      );
    }
  }

  //==================| Metodos para registrar e editar os dados do Usuário |=======================//
  async function saveCard(data) {
    try {
      const response: ResponseRegisterCard = await register.registerCard(data);
      console.log(response)
      if (!response?.erro) {
        hiddenRegisterCard();
        setRegisterCard("yes");
        console.log("Cartão registerado.");
      } else {
        console.log("Algo deu errado tente novamente mais tarde.");
      }
    } catch (error) {
      console.log(error);
      console.log("Algo deu errado tente novamente mais tarde.  <-=->  ");
    }
  }

  async function editCard(data) {
    try {
      const response= await register.editCard(data);
      console.log(response);
     if(!response.erro){
      setCard(data);

      await AsyncStorage.setItem(
        "@MAWTTECH_Auth:card",
        JSON.stringify(data)
      );

      Alert.alert('','Seus dados foram atualizados com sucesso!')
     }else{
      Alert.alert('Falha','Algo deu errado não foi possível salvar as atualizações!')
     }

    } catch (error) {
      console.log(error);
      Alert.alert('Falha','Algo deu errado não foi possível salvar as atualizações!')
    }
  }
  async function getCard(id) {
    try {
      let data = {
        user_id: id,
      };
      const response: Card = await register.showCard(data);

      setCard(response);
      console.log(response);
      await AsyncStorage.setItem(
        "@MAWTTECH_Auth:card",
        JSON.stringify(response)
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function saveSelf(data, userId) {
    try {
      const response = await register.saveSelf(data, userId);
      console.log("resposta", response);
    } catch (error) {
      //console.log(error);
      console.log(
        "Algo deu errado tente novamente mais tarde.  <-=->  ",
        error
      );
    }
  }

  async function editSelf(photo, id) {
    try {
      const response = await register.editSelf(photo, id);
    } catch (error) {
      //console.log("err", error);
    }
  }
  /*
    if(loading){
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large' color='#666'/>
            </View>);
    } */

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        firstLogin,
        card,
        idUser,
        setCard,
        signIn,
        signOut,
        saveCard,
        getCard,
        editCard,
        registerUsers,
        saveSelf,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

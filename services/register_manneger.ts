import api from "./api";


interface ResponseRegisterUser {
  message: string;
  erro: boolean;
  id: string;
}

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
  card: Card | null;
}

interface ResponseSingnIn {
  message: string;
  jwt: string;
  expireAt: string;
  user: User | null;
}

export async function signIn<ResponseSignIn>(data) {
  let user: User;
  let card;

  const responseLogin = await api
    .post(`/auth/login`, data)
    .then((responseLogin) => {
      user = responseLogin.data;
      console.log("response login", responseLogin);
    })
    .then(() => {
      setTimeout(() => {
        const responseCard = showCard(user.id);
        card = responseCard;
      }, 2000);
    })
    .catch((error) => {
      if (error.response) {
        console.log("err.: ");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("error,error.message");
      }
      console.log(error.config);
    });
}

export async function registerUser<ResponseRegisterUser>(data) {
  try {
    const response = await api.post(`/auth/register`, data);
    const responseJson = response.data;
    return responseJson;
  } catch (erro) {
    console.log(erro);
  }
}

export async function registerCard(data) {
  try {
    const response = await api.post(`/auth/card/register`, data);
    const responseJson = response.data;
    return responseJson;
  } catch (erro) {
    console.log(erro);
  }
}

export async function editCard(data) {
  try {
    const response = await api.post(`/auth/card/edit/`, data);
    const responseJson = response.data;

    return responseJson;
  } catch (erro) {
    console.log(erro);
  }
}

export async function showCard<Card>(data) {
  try {
    const response = await api.post(`/auth/card/show`, data);
    const responseJson = response.data;
    return responseJson;
  } catch (erro) {
    console.log(erro);
  }
}
interface Photo {
  filename: string;
  type: string;
  uri: string;
  height: number;
  width: number;
}

export async function saveSelf(data, userId) {
  
  const self = {
    user_id: userId,    
    uri: data
  }

  const response = await api
    .post(`/auth/picture-avatar/self`, self )
    .then(function (response) {
      //handle success
      console.log("sucess: ", response);
    })
    .catch(function (response) {
      //handle error
      console.log("err: ", response);
    });
}

export async function editSelf(photo: Photo, id) {
  const formData = new FormData();
  console.log(id);
  console.log(photo.uri);
  formData.set("photo_avatar", photo.uri);
  const config = {
    headers: {
      "Content-Type": "multpart/form-data",
    },
  };
  const response = await api
    .post(`/auth/picture-avatar/upload`, formData, config)
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
}

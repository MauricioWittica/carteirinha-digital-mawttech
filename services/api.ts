import axios from 'axios';
import Constants from "expo-constants";
const  {manifest}  = Constants;


//const uri= ((typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
//? manifest.debuggerHost.split(':').shift().concat(':80')
//: `ndhs.org.br`);
//const uri = `http://${manifest.debuggerHost.split(':').shift()}:80`
const uri = `http://ndhs.org.br`
console.log('sou uma uri------',uri)
const api = axios.create({
    baseURL: uri + `/maw-api/v1/public`,
});

export default api;
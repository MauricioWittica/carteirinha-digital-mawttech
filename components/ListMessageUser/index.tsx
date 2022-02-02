import React from'react';
import * as userMessageBox from './../../services/user_message_box';
import { useEffect, useContext } from 'react';
import { AuthContext } from './../../contexts/auth';



const ListMessageUser = ()=>{
const {user} = useContext(AuthContext);




useEffect(()=>{

async function listMessage() {
    const response =  await userMessageBox.listMessages({user_id : user?.id})
    
}

listMessage()
},[]);

return(<>



</>);


}

export default ListMessageUser;
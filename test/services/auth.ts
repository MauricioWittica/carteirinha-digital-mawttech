interface Response{
    token: string;
    user:{
        name: string;
        email: string;
    }
}
export function signIn(): Promise<Response>  {
return new Promise(resolve =>{
setTimeout(() => {
    resolve({
        token: "₢34tuv8u254ty703vch77nm59gmhv7gy5g9mgv27y",
        user:{
            name:"Tom",
            email:"mauricio@gmail.com"
        },
    })
}, 2000);
});
}



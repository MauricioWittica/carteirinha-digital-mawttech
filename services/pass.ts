


interface ResponsePass {

    password: {
        key1: string;
        key2: string;
        key3: string;
        key4: string;
        key5: string;
        key6: string;

    }


}

interface ResponseSuportPass{
    suportPass:{
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
    input6: string;
    }
}
export function checkPasswordFormat(): Promise<ResponsePass> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                password: {
                    key1: "*",
                    key2: "*",
                    key3: "*",
                    key4: "*",
                    key5: "*",
                    key6: "*",
                },
            })
        }, 20);
    });
}

export function checkInputSelertor(): Promise<ResponseSuportPass> {
    return new Promise(resolve => {
        resolve({
            suportPass:{
                input1: null,
                input2: null,
                input3: null,
                input4: null,
                input5: null,
                input6: null,
                },
        });
    });
}


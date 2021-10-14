interface Response {
    token: string;
    user: {
        name: string;
        email: string;
        records: {
            birth_date: string;
            zone: string;
            section: string;
            county: string;
            affiliation: string;
            register_number: string;
            picture: string;
            biometry: boolean;
        }
    }

}
export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "₢34tuv8u254ty703vch77nm59gmhv7gy5g9mgv27y",
                user: {
                    name: "Abelardo Pinto Júnior",
                    email: "AbelardoPintoJúnior@gmail.com",
                    records: {
                        birth_date: '13/06/2000',
                        zone: '434',
                        section: '3423',
                        county: 'Sumaré/SP',
                        affiliation: 'Ana Maria Ribeiro',
                        register_number: '4484 8323 0141',
                        picture: 'C:/Meus-Projetos/App-PRTB/abelardo-ndhs.jpg',
                        biometry: false,


                    },
                },


            })
        }, 2000);
    });
}



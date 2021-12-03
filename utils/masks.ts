export function maskRg(value: string){

    value = value.replace(/\D/g,""); // 12345
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4"); //12.123.123-4
    return value;
}


export function maskCpf(value: string){

    value = value.replace(/\D/g,""); // 12345
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); //123.123.123-41
    return value;
}


export function maskPhone(value: string){

    value = value.replace(/\D/g,""); // 12345
    value = value.replace(/^(\d{2})(\d{5})(\d{5})/, "($1) $2-$3"); //(19) 12345-1234
    return value;
}


export function maskElectoralTitle(value: string){

    value = value.replace(/\D/g,""); // 12345
    value = value.replace(/^(\d{4})(\d{4})(\d{4})/, "$1 $2 $3"); // 1234 1234 1234
    return value;
}


export function maskDate(value: string){

    value = value.replace(/\D/g,""); // 12345
    value = value.replace(/^(\d{2})(\d{2})(\d{4})/, "$1/$2/$3"); // 12/12/1234
    return value;
}


export function maskZone(value: string){

    value = value.replace(/\D/g,""); // 12345
    value = value.replace(/^(\d{3})/, "$1"); // 123
    return value;
}


export function maskSection(value: string){

    value = value.replace(/\D/g,""); // 1234
    value = value.replace(/^(\d{4})/, "$1"); // 1234
    return value;
}
import {config, appFetch} from './appFetch';

export const findUsers = ({nombre, page=0, size}, onSuccess) =>{
    
    let path = `/catalogo-usuarios/usuarios?page=${page}`;

    path += nombre? `&nombreUsuario=${nombre}` : "";
    path += size? `&size=${size}` : "";

    appFetch(path, config('GET'), onSuccess);
}

export const findUser = ({userName}, onSuccess) =>{
    
    let path = `/catalogo-usuarios/usuarios/${userName}`;

    appFetch(path, config('GET'), onSuccess);
}

export const signUp = (usuarioDto, onSuccess, onErrors) => {

    let path = `/catalogo-usuarios/registrarse`;

    appFetch(path, config('POST', usuarioDto), onSuccess, onErrors);
}

export const logIn = (usuarioDto, onSuccess, onErrors) => {

    let path = `/catalogo-usuarios/iniciar-sesion`;

    appFetch(path, config('POST', usuarioDto), onSuccess, onErrors);
}
import { config, appFetch } from './appFetch';

export const findContests = ({ idCategoria, estado, nombre, page = 0, size }, onSuccess) => {

    let path = `/catalogo-concursos/concursos?page=${page}`;

    path += idCategoria ? `&idCategoria=${idCategoria}` : "";
    path += estado !== null ? `&estado=${estado}` : "";
    path += nombre ? `&nombre=${nombre}` : "";
    path += size ? `&size=${size}` : "";

    appFetch(path, config('GET'), onSuccess);
}

export const getContestData = ({ contestId, contestName }, onSuccess) => {

    let path = `/catalogo-concursos/concursos/${contestName}`;

    appFetch(path, config('POST', contestId), onSuccess);
}

export const getNumberContenders = (contestId, onSuccess) => {

    let path = `/catalogo-concursos/concursos/${contestId}/numeroParticipantes`;

    appFetch(path, config('GET'), onSuccess);
}

export const isOrganizador = ({userName, contestId}, onSuccess) => {

    let path = `/catalogo-concursos/concursos/${contestId}/${userName}/esOrganizador`;

    appFetch(path, config('GET'), onSuccess);
}

export const findCategories = (onSuccess) => {

    let path = "/catalogo-concursos/categorias";

    appFetch(path, config('GET'), onSuccess);
}

export const createContest = (contestData, userName, onSuccess, onErrors) => {

    let path = `/catalogo-concursos/concursos?userName=${userName}`;

    appFetch(path, config('POST', contestData), onSuccess, onErrors);
}

export const createCategory = (categoryData, onSuccess, onErrors) => {

    let path = `/catalogo-concursos/categorias`;

    appFetch(path, config('POST', categoryData), onSuccess, onErrors);
}

export const findStaff = ({contestId, page=0, size}, onSuccess) =>{
    
    let path = `/catalogo-concursos/concursos/${contestId}/organizadores?page=${page}`;

    path += size? `&size=${size}` : "";

    appFetch(path, config('GET'), onSuccess);
}

export const findContenders = ({contestId, page=0, size}, onSuccess) =>{
    
    let path = `/catalogo-concursos/concursos/${contestId}/participantes?page=${page}`;

    path += size? `&size=${size}` : "";

    appFetch(path, config('GET'), onSuccess);
}

export const findJury = ({contestId, page=0, size}, onSuccess) =>{
    
    let path = `/catalogo-concursos/concursos/${contestId}/jurado?page=${page}`;

    path += size? `&size=${size}` : "";

    appFetch(path, config('GET'), onSuccess);
}
package com.figueiras.photocontest.backend.rest.dtos;

public class FotografiaDto {

    private boolean aceptoLasNormas;
    private long idConcurso;
    private String nombreUsuario;
    private String datosJpg;
    private String datosRaw;
    private String tituloFotografia;
    private String descripcionFotografia;
    private String aperturaDiafragma;
    private String fabricanteCamara;
    private String modeloCamara;
    private String distanciaFocal;
    private String velocidadObturacion;
    private String iso;
    private String resolucion;
    private long idCategoria;
    private String nombreCategoria;

    public boolean isAceptoLasNormas() {
        return aceptoLasNormas;
    }

    public void setAceptoLasNormas(boolean aceptoLasNormas) {
        this.aceptoLasNormas = aceptoLasNormas;
    }

    public long getIdConcurso() {
        return idConcurso;
    }

    public void setIdConcurso(long idConcurso) {
        this.idConcurso = idConcurso;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getDatosJpg() {
        return datosJpg;
    }

    public void setDatosJpg(String datosJpg) {
        this.datosJpg = datosJpg;
    }

    public String getDatosRaw() {
        return datosRaw;
    }

    public void setDatosRaw(String datosRaw) {
        this.datosRaw = datosRaw;
    }

    public String getTituloFotografia() {
        return tituloFotografia;
    }

    public void setTituloFotografia(String tituloFotografia) {
        this.tituloFotografia = tituloFotografia;
    }

    public String getDescripcionFotografia() {
        return descripcionFotografia;
    }

    public void setDescripcionFotografia(String descripcionFotografia) {
        this.descripcionFotografia = descripcionFotografia;
    }

    public String getAperturaDiafragma() {
        return aperturaDiafragma;
    }

    public void setAperturaDiafragma(String aperturaDiafragma) {
        this.aperturaDiafragma = aperturaDiafragma;
    }

    public String getFabricanteCamara() {
        return fabricanteCamara;
    }

    public void setFabricanteCamara(String fabricanteCamara) {
        this.fabricanteCamara = fabricanteCamara;
    }

    public String getModeloCamara() {
        return modeloCamara;
    }

    public void setModeloCamara(String modeloCamara) {
        this.modeloCamara = modeloCamara;
    }

    public String getDistanciaFocal() {
        return distanciaFocal;
    }

    public void setDistanciaFocal(String distanciaFocal) {
        this.distanciaFocal = distanciaFocal;
    }

    public String getVelocidadObturacion() {
        return velocidadObturacion;
    }

    public void setVelocidadObturacion(String velocidadObturacion) {
        this.velocidadObturacion = velocidadObturacion;
    }

    public String getIso() {
        return iso;
    }

    public void setIso(String iso) {
        this.iso = iso;
    }

    public String getResolucion() {
        return resolucion;
    }

    public void setResolucion(String resolucion) {
        this.resolucion = resolucion;
    }

    public long getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(long idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getNombreCategoria() {
        return nombreCategoria;
    }

    public void setNombreCategoria(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }
}
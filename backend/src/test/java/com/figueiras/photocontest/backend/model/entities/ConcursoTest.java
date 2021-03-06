package com.figueiras.photocontest.backend.model.entities;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class ConcursoTest {

    private static Validator validator;

    @BeforeAll
    public static void setUp() {
        ValidatorFactory vFactory = Validation.buildDefaultValidatorFactory();
        validator = vFactory.getValidator();
    }

    @Test
    public void crearInstanciaTest() {
        Concurso concurso = new Concurso();

        Assertions.assertNotNull(concurso);
    }

    @Test
    public void setNombreConcursoTest() {
        Concurso concurso = new Concurso();
        String nombre = "nombre";

        concurso.setNombreConcurso(nombre);

        Assertions.assertEquals(concurso.getNombreConcurso(), nombre);
    }

    @Test
    public void setNombreConcursoLargoTest() {
        Concurso concurso = new Concurso();

        concurso.setNombreConcurso(UtilidadesParaPruebas.CADENA_LARGA);

        Assertions.assertFalse(validator.validate(concurso).isEmpty());
    }

    @Test
    public void setDescripcionConcursoTest() {
        Concurso concurso = new Concurso();
        String desc = "desc";

        concurso.setDescripcionConcurso(desc);

        Assertions.assertEquals(concurso.getDescripcionConcurso(), desc);
    }

    @Test
    public void setDescripcionConcursoLargoTest() {
        Concurso concurso = new Concurso();

        concurso.setDescripcionConcurso(UtilidadesParaPruebas.CADENA_LARGA);

        Assertions.assertFalse(validator.validate(concurso).isEmpty());
    }

    @Test
    public void setEstadoConcursoTest() {
        Concurso concurso = new Concurso();

        concurso.setEstadoConcurso(EstadoConcurso.ABIERTO);

        Assertions.assertEquals(concurso.getEstadoConcurso(), EstadoConcurso.ABIERTO);
    }

    @Test
    public void setTipoAccesoTest() {
        Concurso concurso = new Concurso();

        concurso.setTipoAccesoConcurso(TipoAcceso.PRIVADO);

        Assertions.assertEquals(concurso.getTipoAccesoConcurso(), TipoAcceso.PRIVADO);
    }

    @Test
    public void setTipoVotanteTest() {
        Concurso concurso = new Concurso();

        concurso.setTipoVotanteConcurso(TipoVotante.JURADO);

        Assertions.assertEquals(concurso.getTipoVotanteConcurso(), TipoVotante.JURADO);
    }

    @Test
    public void setTipoVotoTest() {
        Concurso concurso = new Concurso();

        concurso.setTipoVotoConcurso(TipoVoto.CINCO_ESTRELLAS);

        Assertions.assertEquals(concurso.getTipoVotoConcurso(), TipoVoto.CINCO_ESTRELLAS);
    }

    @Test
    public void setFotoConcursoTest() {
        Concurso concurso = new Concurso();

        concurso.setFotoConcurso(UtilidadesParaPruebas.CADENA_LARGA);

        Assertions.assertEquals(concurso.getFotoConcurso(), UtilidadesParaPruebas.CADENA_LARGA);
    }

    @Test
    public void setCategoriaUnicaTest() {
        Concurso concurso = new Concurso();

        concurso.setCategoriaUnica(Boolean.FALSE);

        Assertions.assertEquals(concurso.getCategoriaUnica(), Boolean.FALSE);
    }

    @Test
    public void setMaxFotosTest() {
        Concurso concurso = new Concurso();

        concurso.setMaxFotos(5);

        Assertions.assertEquals(concurso.getMaxFotos(), 5);
    }

    @Test
    public void setMaxFotosUsuarioTest() {
        Concurso concurso = new Concurso();

        concurso.setMaxFotosUsuario(5);

        Assertions.assertEquals(concurso.getMaxFotosUsuario(), 5);
    }

    @Test
    public void setMaxVotosUsuarioTest() {
        Concurso concurso = new Concurso();

        concurso.setMaxVotosUsuario(5);

        Assertions.assertEquals(concurso.getMaxVotosUsuario(), 5);
    }

    @Test
    public void setNumGanadoresTest() {
        Concurso concurso = new Concurso();

        concurso.setNumGanadores(2);

        Assertions.assertEquals(concurso.getNumGanadores(), 2);
    }

    @Test
    public void setTituloReqTest() {
        Concurso concurso = new Concurso();

        concurso.setTituloReq(Boolean.FALSE);

        Assertions.assertEquals(concurso.getTituloReq(), Boolean.FALSE);
    }

    @Test
    public void setDescReqTest() {
        Concurso concurso = new Concurso();

        concurso.setDescReq(Boolean.FALSE);

        Assertions.assertEquals(concurso.getDescReq(), Boolean.FALSE);
    }

    @Test
    public void setDatosExifReqTest() {
        Concurso concurso = new Concurso();

        concurso.setDatosExifReq(Boolean.FALSE);

        Assertions.assertEquals(concurso.getDatosExifReq(), Boolean.FALSE);
    }

    @Test
    public void setOcultarFotosTest() {
        Concurso concurso = new Concurso();

        concurso.setOcultarFotos(Boolean.FALSE);

        Assertions.assertEquals(concurso.getOcultarFotos(), Boolean.FALSE);
    }

    @Test
    public void setModeracionTest() {
        Concurso concurso = new Concurso();

        concurso.setModeracion(Boolean.FALSE);

        Assertions.assertEquals(concurso.getModeracion(), Boolean.FALSE);
    }

    @Test
    public void setFormatoTest() {
        Concurso concurso = new Concurso();

        concurso.setFormato(FormatoFotografia.JPG);

        Assertions.assertEquals(concurso.getFormato(), FormatoFotografia.JPG);
    }

    @Test
    public void setOcultarVotosTest() {
        Concurso concurso = new Concurso();

        concurso.setOcultarVotos(Boolean.FALSE);

        Assertions.assertEquals(concurso.getOcultarVotos(), Boolean.FALSE);
    }

    @Test
    public void setFechaInicioConcursoTest() {
        Concurso concurso = new Concurso();

        concurso.setFechaInicioConcurso(UtilidadesParaPruebas.FECHA_HOY);

        Assertions.assertEquals(concurso.getFechaInicioConcurso(), UtilidadesParaPruebas.FECHA_HOY);
    }

    @Test
    public void setFechaInicioVotacionTest() {
        Concurso concurso = new Concurso();

        concurso.setFechaInicioVotacion(UtilidadesParaPruebas.FECHA_HOY);

        Assertions.assertEquals(concurso.getFechaInicioVotacion(), UtilidadesParaPruebas.FECHA_HOY);
    }

    @Test
    public void setFechaCreacionConcursoTest() {
        Concurso concurso = new Concurso();

        concurso.setFechaCreacion(UtilidadesParaPruebas.FECHA_HOY);

        Assertions.assertEquals(concurso.getFechaCreacion(), UtilidadesParaPruebas.FECHA_HOY);

    }

    @Test
    public void setFechaFinConcursoTest() {
        Concurso concurso = new Concurso();

        concurso.setFechaFinConcurso(UtilidadesParaPruebas.FECHA_HOY);

        Assertions.assertEquals(concurso.getFechaFinConcurso(), UtilidadesParaPruebas.FECHA_HOY);

    }

    @Test
    public void testDescVotacionTest() {
        Concurso concurso = new Concurso();

        concurso.setDescVotacion(UtilidadesParaPruebas.CADENA_MEDIA);

        Assertions.assertEquals(concurso.getDescVotacion(), UtilidadesParaPruebas.CADENA_MEDIA);
    }

    @Test
    public void testDescVotacionLargaTest() {
        Concurso concurso = new Concurso();

        concurso.setDescVotacion(UtilidadesParaPruebas.CADENA_LARGA);

        Assertions.assertFalse(validator.validate(concurso).isEmpty());
    }

    @Test
    public void setBasesConcurso() {
        Concurso concurso = new Concurso();

        concurso.setBasesConcurso(UtilidadesParaPruebas.CADENA_LARGA);

        Assertions.assertEquals(concurso.getBasesConcurso(), UtilidadesParaPruebas.CADENA_LARGA);
    }

    @Test
    public void setCategoriasPermitidas(){
        Concurso concurso = new Concurso();
        CategoriaFotografica categoria = new CategoriaFotografica();
        Set<CategoriaFotografica> categorias = new HashSet<>();
        categorias.add(categoria);

        concurso.setCategoriasPermitidas(categorias);

        Assertions.assertEquals(concurso.getCategoriasPermitidas(), categorias);
    }
}
package com.figueiras.photocontest.backend.model.entities;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

public class NotificacionTest {

    private static Validator validator;

    @BeforeAll
    public static void setUp() {
        ValidatorFactory vFactory = Validation.buildDefaultValidatorFactory();
        validator = vFactory.getValidator();
    }

    @Test
    public void crearInstanciaTest(){
        Notificacion notificacion = new Notificacion();

        Assertions.assertNotNull(notificacion);
    }

    @Test
    public void setNombreNotificacionCortoTest(){
        Notificacion notificacion = new Notificacion();

        notificacion.setNombreNotificacion(Utilidades.CADENA_VACIA);

        Assertions.assertFalse(validator.validate(notificacion).isEmpty());
    }

    @Test
    public void setNombreNotificacionTest(){
        Notificacion notificacion = new Notificacion();

        notificacion.setNombreNotificacion(Utilidades.CADENA_MEDIA);

        Assertions.assertEquals(notificacion.getNombreNotificacion(), Utilidades.CADENA_MEDIA);
    }

    @Test
    public void setNombreNotificacionLargaTest(){
        Notificacion notificacion = new Notificacion();

        notificacion.setNombreNotificacion(Utilidades.CADENA_LARGA);

        Assertions.assertFalse(validator.validate(notificacion).isEmpty());
    }

    @Test
    public void setDescripcionNotificacionCortaTest(){
        Notificacion notificacion = new Notificacion();

        notificacion.setMensajeNotificacion(Utilidades.CADENA_VACIA);

        Assertions.assertFalse(validator.validate(notificacion).isEmpty());
    }

    @Test
    public void setDescripcionNotificacionTest(){
        Notificacion notificacion = new Notificacion();

        notificacion.setMensajeNotificacion(Utilidades.CADENA_MEDIA);

        Assertions.assertEquals(notificacion.getMensajeNotificacion(), Utilidades.CADENA_MEDIA);
    }

    @Test
    public void setDescripcionNotificacionLargaTest(){
        Notificacion notificacion = new Notificacion();

        notificacion.setMensajeNotificacion(Utilidades.CADENA_LARGA);

        Assertions.assertFalse(validator.validate(notificacion).isEmpty());
    }

    @Test
    public void setUsuarioTest(){
        Notificacion notificacion = new Notificacion();
        Usuario usuario = Utilidades.crearUsuario("root");

        notificacion.setUsuario(usuario);

        Assertions.assertEquals(notificacion.getUsuario(), usuario);
    }
}

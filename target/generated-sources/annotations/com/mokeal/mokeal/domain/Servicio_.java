package com.mokeal.mokeal.domain;

import com.mokeal.mokeal.domain.enumeration.EstadoServicio;
import com.mokeal.mokeal.domain.enumeration.Frecuencia;
import com.mokeal.mokeal.domain.enumeration.TipoServicio;
import com.mokeal.mokeal.domain.enumeration.ZonaTarifa;
import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SetAttribute;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Static metamodel for {@link com.mokeal.mokeal.domain.Servicio}
 **/
@StaticMetamodel(Servicio.class)
@Generated("org.hibernate.processor.HibernateProcessor")
public abstract class Servicio_ {

	
	/**
	 * @see #id
	 **/
	public static final String ID = "id";
	
	/**
	 * @see #tipoServicio
	 **/
	public static final String TIPO_SERVICIO = "tipoServicio";
	
	/**
	 * @see #zona
	 **/
	public static final String ZONA = "zona";
	
	/**
	 * @see #frecuencia
	 **/
	public static final String FRECUENCIA = "frecuencia";
	
	/**
	 * @see #fecha
	 **/
	public static final String FECHA = "fecha";
	
	/**
	 * @see #horaInicio
	 **/
	public static final String HORA_INICIO = "horaInicio";
	
	/**
	 * @see #duracionHoras
	 **/
	public static final String DURACION_HORAS = "duracionHoras";
	
	/**
	 * @see #numTrabajadores
	 **/
	public static final String NUM_TRABAJADORES = "numTrabajadores";
	
	/**
	 * @see #estado
	 **/
	public static final String ESTADO = "estado";
	
	/**
	 * @see #direccion
	 **/
	public static final String DIRECCION = "direccion";
	
	/**
	 * @see #municipio
	 **/
	public static final String MUNICIPIO = "municipio";
	
	/**
	 * @see #notas
	 **/
	public static final String NOTAS = "notas";
	
	/**
	 * @see #precioTotal
	 **/
	public static final String PRECIO_TOTAL = "precioTotal";
	
	/**
	 * @see #descuento
	 **/
	public static final String DESCUENTO = "descuento";
	
	/**
	 * @see #cliente
	 **/
	public static final String CLIENTE = "cliente";
	
	/**
	 * @see #tarifa
	 **/
	public static final String TARIFA = "tarifa";
	
	/**
	 * @see #trabajadoreses
	 **/
	public static final String TRABAJADORESES = "trabajadoreses";

	
	/**
	 * Static metamodel type for {@link com.mokeal.mokeal.domain.Servicio}
	 **/
	public static volatile EntityType<Servicio> class_;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#id}
	 **/
	public static volatile SingularAttribute<Servicio, Long> id;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#tipoServicio}
	 **/
	public static volatile SingularAttribute<Servicio, TipoServicio> tipoServicio;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#zona}
	 **/
	public static volatile SingularAttribute<Servicio, ZonaTarifa> zona;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#frecuencia}
	 **/
	public static volatile SingularAttribute<Servicio, Frecuencia> frecuencia;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#fecha}
	 **/
	public static volatile SingularAttribute<Servicio, LocalDate> fecha;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#horaInicio}
	 **/
	public static volatile SingularAttribute<Servicio, String> horaInicio;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#duracionHoras}
	 **/
	public static volatile SingularAttribute<Servicio, BigDecimal> duracionHoras;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#numTrabajadores}
	 **/
	public static volatile SingularAttribute<Servicio, Integer> numTrabajadores;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#estado}
	 **/
	public static volatile SingularAttribute<Servicio, EstadoServicio> estado;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#direccion}
	 **/
	public static volatile SingularAttribute<Servicio, String> direccion;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#municipio}
	 **/
	public static volatile SingularAttribute<Servicio, String> municipio;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#notas}
	 **/
	public static volatile SingularAttribute<Servicio, String> notas;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#precioTotal}
	 **/
	public static volatile SingularAttribute<Servicio, BigDecimal> precioTotal;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#descuento}
	 **/
	public static volatile SingularAttribute<Servicio, BigDecimal> descuento;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#cliente}
	 **/
	public static volatile SingularAttribute<Servicio, Cliente> cliente;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#tarifa}
	 **/
	public static volatile SingularAttribute<Servicio, Tarifa> tarifa;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Servicio#trabajadoreses}
	 **/
	public static volatile SetAttribute<Servicio, Trabajador> trabajadoreses;

}


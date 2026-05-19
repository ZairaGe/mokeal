package com.mokeal.mokeal.domain;

import com.mokeal.mokeal.domain.enumeration.TipoServicio;
import com.mokeal.mokeal.domain.enumeration.ZonaTarifa;
import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.math.BigDecimal;

/**
 * Static metamodel for {@link com.mokeal.mokeal.domain.Tarifa}
 **/
@StaticMetamodel(Tarifa.class)
@Generated("org.hibernate.processor.HibernateProcessor")
public abstract class Tarifa_ {

	
	/**
	 * @see #id
	 **/
	public static final String ID = "id";
	
	/**
	 * @see #zona
	 **/
	public static final String ZONA = "zona";
	
	/**
	 * @see #tipoServicio
	 **/
	public static final String TIPO_SERVICIO = "tipoServicio";
	
	/**
	 * @see #precioFirstHora
	 **/
	public static final String PRECIO_FIRST_HORA = "precioFirstHora";
	
	/**
	 * @see #precioHoraAdicional
	 **/
	public static final String PRECIO_HORA_ADICIONAL = "precioHoraAdicional";
	
	/**
	 * @see #minimoHoras
	 **/
	public static final String MINIMO_HORAS = "minimoHoras";
	
	/**
	 * @see #precioPorKm
	 **/
	public static final String PRECIO_POR_KM = "precioPorKm";
	
	/**
	 * @see #activa
	 **/
	public static final String ACTIVA = "activa";

	
	/**
	 * Static metamodel type for {@link com.mokeal.mokeal.domain.Tarifa}
	 **/
	public static volatile EntityType<Tarifa> class_;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Tarifa#id}
	 **/
	public static volatile SingularAttribute<Tarifa, Long> id;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Tarifa#zona}
	 **/
	public static volatile SingularAttribute<Tarifa, ZonaTarifa> zona;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Tarifa#tipoServicio}
	 **/
	public static volatile SingularAttribute<Tarifa, TipoServicio> tipoServicio;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Tarifa#precioFirstHora}
	 **/
	public static volatile SingularAttribute<Tarifa, BigDecimal> precioFirstHora;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Tarifa#precioHoraAdicional}
	 **/
	public static volatile SingularAttribute<Tarifa, BigDecimal> precioHoraAdicional;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Tarifa#minimoHoras}
	 **/
	public static volatile SingularAttribute<Tarifa, Integer> minimoHoras;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Tarifa#precioPorKm}
	 **/
	public static volatile SingularAttribute<Tarifa, BigDecimal> precioPorKm;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Tarifa#activa}
	 **/
	public static volatile SingularAttribute<Tarifa, Boolean> activa;

}


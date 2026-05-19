package com.mokeal.mokeal.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SetAttribute;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

/**
 * Static metamodel for {@link com.mokeal.mokeal.domain.Trabajador}
 **/
@StaticMetamodel(Trabajador.class)
@Generated("org.hibernate.processor.HibernateProcessor")
public abstract class Trabajador_ {

	
	/**
	 * @see #id
	 **/
	public static final String ID = "id";
	
	/**
	 * @see #nombre
	 **/
	public static final String NOMBRE = "nombre";
	
	/**
	 * @see #telefono
	 **/
	public static final String TELEFONO = "telefono";
	
	/**
	 * @see #email
	 **/
	public static final String EMAIL = "email";
	
	/**
	 * @see #activo
	 **/
	public static final String ACTIVO = "activo";
	
	/**
	 * @see #notas
	 **/
	public static final String NOTAS = "notas";
	
	/**
	 * @see #servicioses
	 **/
	public static final String SERVICIOSES = "servicioses";

	
	/**
	 * Static metamodel type for {@link com.mokeal.mokeal.domain.Trabajador}
	 **/
	public static volatile EntityType<Trabajador> class_;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Trabajador#id}
	 **/
	public static volatile SingularAttribute<Trabajador, Long> id;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Trabajador#nombre}
	 **/
	public static volatile SingularAttribute<Trabajador, String> nombre;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Trabajador#telefono}
	 **/
	public static volatile SingularAttribute<Trabajador, String> telefono;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Trabajador#email}
	 **/
	public static volatile SingularAttribute<Trabajador, String> email;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Trabajador#activo}
	 **/
	public static volatile SingularAttribute<Trabajador, Boolean> activo;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Trabajador#notas}
	 **/
	public static volatile SingularAttribute<Trabajador, String> notas;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Trabajador#servicioses}
	 **/
	public static volatile SetAttribute<Trabajador, Servicio> servicioses;

}


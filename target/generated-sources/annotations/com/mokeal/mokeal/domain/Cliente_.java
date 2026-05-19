package com.mokeal.mokeal.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

/**
 * Static metamodel for {@link com.mokeal.mokeal.domain.Cliente}
 **/
@StaticMetamodel(Cliente.class)
@Generated("org.hibernate.processor.HibernateProcessor")
public abstract class Cliente_ {

	
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
	 * @see #nifCif
	 **/
	public static final String NIF_CIF = "nifCif";
	
	/**
	 * @see #direccion
	 **/
	public static final String DIRECCION = "direccion";
	
	/**
	 * @see #municipio
	 **/
	public static final String MUNICIPIO = "municipio";
	
	/**
	 * @see #codigoPostal
	 **/
	public static final String CODIGO_POSTAL = "codigoPostal";
	
	/**
	 * @see #notas
	 **/
	public static final String NOTAS = "notas";
	
	/**
	 * @see #activo
	 **/
	public static final String ACTIVO = "activo";

	
	/**
	 * Static metamodel type for {@link com.mokeal.mokeal.domain.Cliente}
	 **/
	public static volatile EntityType<Cliente> class_;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#id}
	 **/
	public static volatile SingularAttribute<Cliente, Long> id;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#nombre}
	 **/
	public static volatile SingularAttribute<Cliente, String> nombre;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#telefono}
	 **/
	public static volatile SingularAttribute<Cliente, String> telefono;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#email}
	 **/
	public static volatile SingularAttribute<Cliente, String> email;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#nifCif}
	 **/
	public static volatile SingularAttribute<Cliente, String> nifCif;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#direccion}
	 **/
	public static volatile SingularAttribute<Cliente, String> direccion;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#municipio}
	 **/
	public static volatile SingularAttribute<Cliente, String> municipio;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#codigoPostal}
	 **/
	public static volatile SingularAttribute<Cliente, String> codigoPostal;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#notas}
	 **/
	public static volatile SingularAttribute<Cliente, String> notas;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Cliente#activo}
	 **/
	public static volatile SingularAttribute<Cliente, Boolean> activo;

}


package com.mokeal.mokeal.domain;

import com.mokeal.mokeal.domain.enumeration.EstadoFactura;
import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Static metamodel for {@link com.mokeal.mokeal.domain.Factura}
 **/
@StaticMetamodel(Factura.class)
@Generated("org.hibernate.processor.HibernateProcessor")
public abstract class Factura_ {

	
	/**
	 * @see #id
	 **/
	public static final String ID = "id";
	
	/**
	 * @see #numero
	 **/
	public static final String NUMERO = "numero";
	
	/**
	 * @see #fechaEmision
	 **/
	public static final String FECHA_EMISION = "fechaEmision";
	
	/**
	 * @see #fechaVencimiento
	 **/
	public static final String FECHA_VENCIMIENTO = "fechaVencimiento";
	
	/**
	 * @see #baseImponible
	 **/
	public static final String BASE_IMPONIBLE = "baseImponible";
	
	/**
	 * @see #iva
	 **/
	public static final String IVA = "iva";
	
	/**
	 * @see #total
	 **/
	public static final String TOTAL = "total";
	
	/**
	 * @see #estado
	 **/
	public static final String ESTADO = "estado";
	
	/**
	 * @see #notas
	 **/
	public static final String NOTAS = "notas";
	
	/**
	 * @see #servicio
	 **/
	public static final String SERVICIO = "servicio";
	
	/**
	 * @see #cliente
	 **/
	public static final String CLIENTE = "cliente";

	
	/**
	 * Static metamodel type for {@link com.mokeal.mokeal.domain.Factura}
	 **/
	public static volatile EntityType<Factura> class_;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#id}
	 **/
	public static volatile SingularAttribute<Factura, Long> id;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#numero}
	 **/
	public static volatile SingularAttribute<Factura, String> numero;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#fechaEmision}
	 **/
	public static volatile SingularAttribute<Factura, LocalDate> fechaEmision;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#fechaVencimiento}
	 **/
	public static volatile SingularAttribute<Factura, LocalDate> fechaVencimiento;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#baseImponible}
	 **/
	public static volatile SingularAttribute<Factura, BigDecimal> baseImponible;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#iva}
	 **/
	public static volatile SingularAttribute<Factura, BigDecimal> iva;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#total}
	 **/
	public static volatile SingularAttribute<Factura, BigDecimal> total;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#estado}
	 **/
	public static volatile SingularAttribute<Factura, EstadoFactura> estado;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#notas}
	 **/
	public static volatile SingularAttribute<Factura, String> notas;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#servicio}
	 **/
	public static volatile SingularAttribute<Factura, Servicio> servicio;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.Factura#cliente}
	 **/
	public static volatile SingularAttribute<Factura, Cliente> cliente;

}


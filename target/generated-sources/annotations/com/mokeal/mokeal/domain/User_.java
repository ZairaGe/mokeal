package com.mokeal.mokeal.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SetAttribute;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.time.Instant;

/**
 * Static metamodel for {@link com.mokeal.mokeal.domain.User}
 **/
@StaticMetamodel(User.class)
@Generated("org.hibernate.processor.HibernateProcessor")
public abstract class User_ extends AbstractAuditingEntity_ {

	
	/**
	 * @see #id
	 **/
	public static final String ID = "id";
	
	/**
	 * @see #login
	 **/
	public static final String LOGIN = "login";
	
	/**
	 * @see #password
	 **/
	public static final String PASSWORD = "password";
	
	/**
	 * @see #firstName
	 **/
	public static final String FIRST_NAME = "firstName";
	
	/**
	 * @see #lastName
	 **/
	public static final String LAST_NAME = "lastName";
	
	/**
	 * @see #email
	 **/
	public static final String EMAIL = "email";
	
	/**
	 * @see #activated
	 **/
	public static final String ACTIVATED = "activated";
	
	/**
	 * @see #langKey
	 **/
	public static final String LANG_KEY = "langKey";
	
	/**
	 * @see #imageUrl
	 **/
	public static final String IMAGE_URL = "imageUrl";
	
	/**
	 * @see #activationKey
	 **/
	public static final String ACTIVATION_KEY = "activationKey";
	
	/**
	 * @see #resetKey
	 **/
	public static final String RESET_KEY = "resetKey";
	
	/**
	 * @see #resetDate
	 **/
	public static final String RESET_DATE = "resetDate";
	
	/**
	 * @see #authorities
	 **/
	public static final String AUTHORITIES = "authorities";

	
	/**
	 * Static metamodel type for {@link com.mokeal.mokeal.domain.User}
	 **/
	public static volatile EntityType<User> class_;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#id}
	 **/
	public static volatile SingularAttribute<User, Long> id;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#login}
	 **/
	public static volatile SingularAttribute<User, String> login;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#password}
	 **/
	public static volatile SingularAttribute<User, String> password;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#firstName}
	 **/
	public static volatile SingularAttribute<User, String> firstName;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#lastName}
	 **/
	public static volatile SingularAttribute<User, String> lastName;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#email}
	 **/
	public static volatile SingularAttribute<User, String> email;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#activated}
	 **/
	public static volatile SingularAttribute<User, Boolean> activated;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#langKey}
	 **/
	public static volatile SingularAttribute<User, String> langKey;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#imageUrl}
	 **/
	public static volatile SingularAttribute<User, String> imageUrl;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#activationKey}
	 **/
	public static volatile SingularAttribute<User, String> activationKey;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#resetKey}
	 **/
	public static volatile SingularAttribute<User, String> resetKey;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#resetDate}
	 **/
	public static volatile SingularAttribute<User, Instant> resetDate;
	
	/**
	 * Static metamodel for attribute {@link com.mokeal.mokeal.domain.User#authorities}
	 **/
	public static volatile SetAttribute<User, Authority> authorities;

}


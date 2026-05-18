package com.mokeal.mokeal;

import com.mokeal.mokeal.config.AsyncSyncConfiguration;
import com.mokeal.mokeal.config.DatabaseTestcontainer;
import com.mokeal.mokeal.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.context.ImportTestcontainers;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = {
        MokealApp.class,
        JacksonConfiguration.class,
        AsyncSyncConfiguration.class,
        com.mokeal.mokeal.config.JacksonHibernateConfiguration.class,
    }
)
@ImportTestcontainers(DatabaseTestcontainer.class)
public @interface IntegrationTest {}

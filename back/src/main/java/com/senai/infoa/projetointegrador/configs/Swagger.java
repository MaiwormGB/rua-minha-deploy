package com.senai.infoa.projetointegrador.configs;

import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@Configuration
@OpenAPIDefinition(info = @Info(title = "Projeto-Integrador", version = "1.0", description = "Site infantil. Integrantes: Gabriel Maiworm, Isabela Santos, Maria Clara Fonseca, Rebeca Mendes e Rebeca Coelho"))

public class Swagger {
}
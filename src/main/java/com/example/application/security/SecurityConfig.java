package com.example.application.security;

import com.vaadin.flow.spring.security.VaadinWebSecurity;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends VaadinWebSecurity {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        super.configure(http);
        setLoginView(http, "/login");
    }

    @Bean
    public UserDetailsManager userDetailsService() {

        return new InMemoryUserDetailsManager(
                User.withUsername("userA").password("{noop}user").roles("USER").build(),
                User.withUsername("userB").password("{noop}user").roles("USER_NO_ACCESS").build(),
                User.withUsername("admin").password("{noop}admin").roles("ADMIN", "USER").build());
    }

}

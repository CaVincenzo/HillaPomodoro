package com.example.application.security;

import dev.hilla.BrowserCallable;
import jakarta.annotation.Nonnull;
import jakarta.annotation.security.PermitAll;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;
import java.util.stream.Collectors;

@BrowserCallable
public class UserInfoService {
    @PermitAll
    @Nonnull
    public com.example.application.security.UserInfo getUserInfo() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if(auth == null || auth.getPrincipal()== null){
            return new com.example.application.security.UserInfo("anonymousUser", List.of());
        }

        final List<String> authorities = auth.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return new UserInfo(auth.getName(), authorities);
    }
}

package com.example.application;

import org.springframework.data.jpa.repository.JpaRepository;
// A way to get and save in the Database
public interface TodoRepo extends JpaRepository<Todo,Long> {
}

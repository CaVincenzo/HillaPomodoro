package com.example.application.repository;

import com.example.application.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// A way to get and save in the Database
public interface TodoRepo extends JpaRepository<Todo, Long> {

    public List<Todo> getAllByDoneIsFalseAndUsername(String username);

    public List<Todo> getAllByDoneIsTrueAndUsername(String username);

    @Transactional
    void deleteTodosByDoneIsTrueAndUsername(String username);

}

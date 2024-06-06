package com.example.application.endpoints;

import com.example.application.entity.Todo;
import com.example.application.repository.TodoRepo;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;

import java.util.List;

@Endpoint
@AnonymousAllowed
@PermitAll
public class TodoEndpoints {
    // API to call the Server
    private TodoRepo repo;

    TodoEndpoints(TodoRepo repo) {
        this.repo = repo;
    }

    @RolesAllowed({"USER", "ADMIN"})
    public List<Todo> findAllActive() {
        return repo.getAllByDoneIsFalse();
    }

    @RolesAllowed({"USER", "ADMIN"})
    public List<Todo> findAllDone() {
        return repo.getAllByDoneIsTrue();
    }
    @RolesAllowed({"USER", "ADMIN"})
    public void deleteDoneTodos() {
        repo.deleteTodosByDoneIsTrue();
    }
    @RolesAllowed({"USER", "ADMIN"})
    public Todo add(String task, int targetCount) {
        if (task.trim().isEmpty() || targetCount <= 0) {
            throw new IllegalArgumentException("Task must not be empty and targetCount must be greater than zero");
        }
        return repo.save(new Todo(task, targetCount));
    }
    @RolesAllowed({"USER", "ADMIN"})
    public Todo updateCounter(Long todoId, int increment) {
        Todo todo = repo.findById(todoId).orElseThrow();
        todo.setCurrentCount(todo.getCurrentCount() + increment);
        return repo.save(todo);
    }

    @RolesAllowed({"USER", "ADMIN"})
    public Todo update(Todo todo) {
        return repo.save(todo);
    }
}

package com.example.application.endpoints;

import com.example.application.entity.Todo;
import com.example.application.repository.TodoRepo;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

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

    private String getCurrentUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }

    @RolesAllowed({"USER", "ADMIN"})
    public List<Todo> findAllActive() {
        return repo.getAllByDoneIsFalseAndUsername(getCurrentUsername());
    }

    @RolesAllowed({"USER", "ADMIN"})
    public List<Todo> findAllDone() {
        return repo.getAllByDoneIsTrueAndUsername(getCurrentUsername());
    }

    @RolesAllowed({"USER", "ADMIN"})
    public void deleteDoneTodos() {
        repo.deleteTodosByDoneIsTrueAndUsername(getCurrentUsername());
    }

    @RolesAllowed({"USER", "ADMIN"})
    public Todo add(String task, int targetCount) {
        if (task.trim().isEmpty() || targetCount <= 0) {
            throw new IllegalArgumentException("Task must not be empty and targetCount must be greater than zero");
        }
        return repo.save(new Todo(task, targetCount,getCurrentUsername()));
    }

    @RolesAllowed({"USER", "ADMIN"})
    public Todo updateCounter(Long todoId, int increment) {
        Todo todo = repo.findById(todoId).orElseThrow();
        todo.setCurrentCount(todo.getCurrentCount() + increment);
        return repo.save(todo);
    }

    @RolesAllowed({"USER", "ADMIN"})
    public Todo update(Todo todo) {
        if (!todo.getUsername().equals(getCurrentUsername())) {
            throw new SecurityException("Unauthorized");
        }
        return repo.save(todo);
    }
}

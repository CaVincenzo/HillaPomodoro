package com.example.application.endpoints;

import com.example.application.entity.Todo;
import com.example.application.repository.TodoRepo;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import jakarta.annotation.security.PermitAll;

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

    public List<Todo> findAllActive() {
        return repo.getAllByDoneIsFalse();
    }

    public List<Todo> findAllDone(){return repo.getAllByDoneIsTrue();}

    public void deleteDoneTodos(){ repo.deleteTodosByDoneIsTrue();}
    public Todo add(String task, int targetCount) {
        if (task.trim().isEmpty() || targetCount <= 0) {
            throw new IllegalArgumentException("Task must not be empty and targetCount must be greater than zero");
        }
        return repo.save(new Todo(task,targetCount));
    }
    public Todo updateCounter(Long todoId, int increment) {
        Todo todo = repo.findById(todoId).orElseThrow();
        todo.setCurrentCount(todo.getCurrentCount() + increment);
        return repo.save(todo);
    }


    public Todo update(Todo todo) {
        return repo.save(todo);
    }
}

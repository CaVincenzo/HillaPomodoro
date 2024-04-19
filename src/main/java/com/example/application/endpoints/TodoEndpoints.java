package com.example.application.endpoints;

import com.example.application.Todo;
import com.example.application.TodoRepo;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoEndpoints {
    // API to call the Server
    private TodoRepo repo;

    TodoEndpoints(TodoRepo repo) {
        this.repo = repo;
    }

    public List<Todo> findAll() {
        return repo.findAll();
    }

    public Todo add(String task) {
        return repo.save(new Todo(task));
    }

    public Todo update(Todo todo) {
        return repo.save(todo);
    }
}

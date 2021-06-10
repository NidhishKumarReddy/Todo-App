import React, { Component } from "react";
import Todo from "./Todo";
import NewForm from "./NewForm";
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.lineThrough = this.lineThrough.bind(this);
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    edit(id, editedTask) {
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: editedTask };
            }
            return todo;
        })

        this.setState({
            todos: newTodos
        });
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    lineThrough(id) {
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        })

        this.setState({
            todos: newTodos
        });
    }
    render() {
        let todos = this.state.todos.map(todo =>
            <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeBox={this.remove}
                updateTodo={this.edit}
                strike={this.lineThrough} />)
        return (
            
            <div className="TodoList">
                <h1>Todo App</h1>
                {todos}
                <NewForm createTodo={this.create} />
            </div>
        );
    }
}

export default TodoList;
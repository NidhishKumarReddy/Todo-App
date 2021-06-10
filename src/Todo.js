import React, { Component } from "react";
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    toggleCompletion() {
        this.props.strike(this.props.id);
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }


    handleUpdate() {
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleRemove() {
        this.props.removeBox(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <input name="task" value={this.state.task} onChange={this.handleChange} />
                    <i class="icon3 bi bi-save-fill" onClick={this.handleUpdate}></i>
                </div>
            );
        } else {
            result = (
                <div className="Todo">
                    <li onClick={this.toggleCompletion} className={this.props.completed ? 'Todo-Completed' : ''}>{this.props.task}</li>
                    <div className="Icons">
                        <i class="icon1 bi bi-pen" onClick={this.toggleForm}></i>
                        <i class="icon2 bi bi-trash-fill" onClick={this.handleRemove}></i>
                    </div>

                </div>
            );
        }

        return result;
    }
}

export default Todo;
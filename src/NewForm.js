import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './NewForm.css';

class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let newTodo = { ...this.state, id: uuidv4(), completed: false };
        this.props.createTodo(newTodo);
        this.setState({
            task: ""
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        return (
            <div className="NewForm">
                <input name="task" value={this.state.task} placeholder="Type New Todo" onChange={this.handleChange} />
                <i class="bi bi-plus-square-fill add" onClick={this.handleSubmit}></i>
            </div>


        );
    }
}

export default NewForm;
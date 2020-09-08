import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import { Button } from './Button';
import { useState } from 'react';

const AddTodo = () => {

    // Initialisation du state local
    const [text, setText] = useState("");

    // Initialisation du dispatch pour envoyer les actions à notre reducer
    const dispatch = useDispatch();

    return (
        <div className="form-group">
            <input
                type="text"
                className="todo-input"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <Button
                className="btn"
                action={() => { dispatch(addTodo(text)) }}
            >
                Ajouter une tâche
            </Button>
        </div>
    );
}

export default AddTodo;
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(description.lenght <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    }
    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="¿Qué hay que hacer?"
            name="description"
            value={description}
            onChange={onInputChange}
          />
        </div>
        <button onClick={onFormSubmit} type="submit" className="btn btn-primary mt-2">
          Agregar
        </button>
      </form>
    </>
  );
};

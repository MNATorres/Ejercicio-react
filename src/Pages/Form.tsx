import React from "react";
import './Form.css';

export default function Form() {
    return (
        <div className="form">
            <h1>Complete los campos</h1>
            <form className="formulario" onSubmit={(e) => e.preventDefault()}>
                <div><input type="text" /><p>Nombre</p></div>
                <div><input type="checkbox" name="edad" /><p>Es mayor de edad?</p></div>
                <div><input type="date" name="date" /><p>Fecha de nacimiento</p></div>
                <button>Submit</button>
            </form>
        </div>
    )
}
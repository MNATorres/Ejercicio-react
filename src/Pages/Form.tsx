import React, { useState } from "react";
import './Form.css';

export default function Form() {


    const [text, setText] = useState("");
    const [list, setList] = useState<Tipo>([]);

    let setup = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setText(e.currentTarget.value);
    }

    let handleAdd = () => {
        setList([...list, {title: text, id: Math.random(), value: true }])
    }

    return (
        <div className="form">
            <h1>Complete los campos</h1>
            <form className="formulario" onSubmit={(e) => e.preventDefault()}>
                <div><input value={text} onChange={setup} type="text" placeholder="Write here..." /><p>Nombre</p></div>
                <div><input type="checkbox" name="edad" /><p>Es mayor de edad?</p></div>
                <div><input type="date" name="date" /><p>Fecha de nacimiento</p></div>
                <button>Submit</button>
            </form>
            <div className="dataForm">
                <ul>

                </ul>
            </div>
        </div>
    )
}
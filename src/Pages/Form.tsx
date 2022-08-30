import { stringify } from "querystring";
import React, { useState } from "react";
import './Form.css';
import Element from '../Components/Element';

export default function Form() {


    const [text, setText] = useState("");
    const [list, setList] = useState<{ title: string, id: number, value: boolean }[]>([{
        title: '',
        id: 0,
        value: false
    }]);

    let setup = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setText(e.currentTarget.value);
    }

    let handleAdd = () => {
        setList([...list, { title: text, id: Math.random(), value: true }])
        setText("");
    }

    let handleReset = () => {
        setList([])
    }

    console.log(text)

    return (
        <div className="form">
            <h1>Complete los campos</h1>
            <form className="formulario" onSubmit={(e) => e.preventDefault()}>
                <div><input value={text} onChange={setup} type="text" placeholder="Write here..." /><p>Nombre</p></div>
                <div><input type="checkbox" name="edad" /><p>Es mayor de edad?</p></div>
                <div><input type="date" name="date" /><p>Fecha de nacimiento</p></div>
                <button onClick={handleAdd}>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </form>
            <div className="dataForm">
                <ul>
                    {list.map((element) => {
                        return (
                            <Element
                                text={element.title} title={undefined} id={0} />
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
import React from "react";
import './Header.css';
import Table from "./Table";
import Form from "./Form";
import { Routes, Route } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <h1>Datos de Usuarios</h1>
                <Routes>
                    <Route path="/" element={<Table />} />
                    <Route path="about" element={<Form />} />
                </Routes>
            </header>
        </>
    );
}

export default Header;
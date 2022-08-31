import React, { useState } from "react";
import "./Form.css";
import Element from "../Components/Element";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type User = { text: string; value: boolean; id: number; date: Date };
type UserFormData = {
  name: string;
  children: boolean;
  date: Date | null;
};

export default function Form() {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    children: false,
    date: null
  });

  const [list, setList] = useState<User[]>([]);

  let handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.currentTarget.value });
  };

  let handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, children: e.currentTarget.checked });
  };

  let handleDateChange = (newDate: Date | null) => {
    setFormData({ ...formData, date: newDate });
  };

  let handleAdd = () => {
    if (!formData.date) return alert("Debe completar la fecha");
    if (formData.name.length < 1) return alert("Debe completar el nombre");
    setList([
      ...list,
      {
        text: formData.name,
        id: Math.random(),
        value: formData.children,
        date: formData.date
      }
    ]);
    setFormData({
      name: "",
      children: false,
      date: null
    });
  };

  let handleReset = () => {
    setList([]);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));

  

  return (
    <div className="form">
      <h1>Complete los campos</h1>
     
      <form className="formulario" onSubmit={e => e.preventDefault()}>
        <div>
          <input
            value={formData.name}
            onChange={handleNameChange}
            type="text"
            placeholder="Write here..."
          />
          <p>Nombre</p>
        </div>
        <div>
          <input
            onChange={handleCheckboxChange}
            checked={formData.children}
            type="checkbox"
            name="edad"
          />
          <p>¿Tiene Hijos?</p>
        </div>
        <div>
          <DatePicker
            placeholderText="Choose a date..."
            selected={formData.date}
            onChange={handleDateChange}
          />
          <p>Fecha de nacimiento</p>
        </div>
        <button onClick={handleAdd}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
      <div className="dataForm">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700, maxWidth: 800 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>NOMBRE</StyledTableCell>
                <StyledTableCell align="right">
                  ¿TIENE HIJOS?
                </StyledTableCell>
                <StyledTableCell align="right">
                  FECHA DE NACIMIENTO
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{maxWidth: 800 }} >
              {list.map(({ text, id, value, date}) => {
                return <Element title={text} id={id} children={value} date={date} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
     
    </div>
  );
}

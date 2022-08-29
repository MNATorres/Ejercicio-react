import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from '../data.json';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    nombre: string,
    edad: number,
    carrera: string,
    hobbie: string,
  ) {
    return { nombre, edad, carrera, hobbie };
  }
  
  
export default function TableUsers() {
    return (
        <div style={{padding:"30px 15px"}} className="table">
           
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NOMBRE</StyledTableCell>
            <StyledTableCell align="right">EDAD</StyledTableCell>
            <StyledTableCell align="right">CARRERA</StyledTableCell>
            <StyledTableCell align="right">HOBBIE</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <StyledTableRow key={row.nombre}>
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{row.edad}</StyledTableCell>
              <StyledTableCell align="right">{row.carrera}</StyledTableCell>
              <StyledTableCell align="right">{row.hobbie}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    )
}
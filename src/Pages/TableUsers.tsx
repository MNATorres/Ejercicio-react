import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    name: string,
    calories: number,
    fat: string,
    carbs: string,
  ) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, '6.0', '24'),
    createData('Ice cream sandwich', 237, '9.0', '37'),
    createData('Eclair', 262, '16.0', '24'),
    createData('Cupcake', 305, '3.7', '67'),
    createData('Gingerbread', 356, '16.0', '49'),
  ];
  

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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    )
}
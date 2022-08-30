import React, { ReactNode } from "react";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


type ElementProps = {
    title: string;
    id: number;
    isAdult: boolean;
    date: Date;
}

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
  
 

const Element: React.FC<ElementProps> = ({title, id, isAdult, date}) => {
    
    return (

        <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {title}
              </StyledTableCell>
              <StyledTableCell align="right">{isAdult}</StyledTableCell>
              <StyledTableCell align="right">{date.toISOString()}</StyledTableCell>
            </StyledTableRow>
    )
}
export default Element
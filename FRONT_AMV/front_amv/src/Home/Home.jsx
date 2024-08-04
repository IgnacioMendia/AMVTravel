import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Navbar from '../Navbar/Navbar.jsx'
import ModalNewBooking from './ModalNewBooking.jsx'

export default function Home() {
    const [Tour, setTour] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedTourId, setSelectedTourId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(window.conexion + "/Tour/MostrarTours");
                if (!response.ok) {
                    throw new Error('No se pudo obtener la información.');
                }
                const data = await response.json();
                setTour(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
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

    const handleClickOpen = (id) => {
        setSelectedTourId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Nombre</StyledTableCell>
                                <StyledTableCell align="center">Destino</StyledTableCell>
                                <StyledTableCell align="center">Fecha de inicio</StyledTableCell>
                                <StyledTableCell align="center">Fecha de fin</StyledTableCell>
                                <StyledTableCell align="center">Precio</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Tour.map((tour) => (
                                <StyledTableRow key={tour.Id}>
                                    <StyledTableCell align="center">{tour.Nombre}</StyledTableCell>
                                    <StyledTableCell align="center">{tour.Destino}</StyledTableCell>
                                    <StyledTableCell align="center">{tour.FechaInicio}</StyledTableCell>
                                    <StyledTableCell align="center">{tour.FechaFin}</StyledTableCell>
                                    <StyledTableCell align="center">{tour.Precio}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button value={tour.Id} onClick={() => handleClickOpen(tour.Id)}>Reservar</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <ModalNewBooking open={open} handleClose={handleClose} idTour={selectedTourId} />
            </section>
        </div>
    )
}
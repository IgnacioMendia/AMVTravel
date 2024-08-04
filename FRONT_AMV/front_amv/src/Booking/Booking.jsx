import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Navbar from '../Navbar/Navbar.jsx'

export default function Booking() {
    const [Tour, setTour] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                var idClient =JSON.parse(localStorage.getItem('user')).IdUsuario;
                const response = await fetch(window.conexion + "/Reserva/MostrarReservas?idCliente="+idClient)
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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES');
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
                                <StyledTableCell align="center">Fecha de reserva</StyledTableCell>
                                <StyledTableCell align="center">Fecha de inicio</StyledTableCell>
                                <StyledTableCell align="center">Fecha de fin</StyledTableCell>
                                <StyledTableCell align="center">Precio</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Tour.map((tour) => (
                                <StyledTableRow key={tour.Id}>
                                    <StyledTableCell align="center">{tour.Tour.Nombre}</StyledTableCell>
                                    <StyledTableCell align="center">{tour.Tour.Destino}</StyledTableCell>
                                    <StyledTableCell align="center">{formatDate(tour.FechaReserva)}</StyledTableCell>
                                    <StyledTableCell align="center">{formatDate(tour.Tour.FechaInicio)}</StyledTableCell>
                                    <StyledTableCell align="center">{formatDate(tour.Tour.FechaFin)}</StyledTableCell>
                                    <StyledTableCell align="center">{tour.Tour.Precio}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </div>
    )
}
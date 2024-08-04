import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalComponent({ open, handleClose, idTour }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        let Tour= {
            TourID:idTour,
            Cliente:JSON.parse(localStorage.getItem('user')).IdUsuario
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Tour)
        };
        fetch(window.conexion + '/Reserva/AgregarReserva', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                
                if(data == true){
                    handleClose();
                }
            
            })
            .catch(function (error) {
                var alert500 = document.getElementById('alert500')
                alert500.style.display = '';
            })
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2">
                    Reserva de Tour
                </Typography>
                <Typography id="modal-description" sx={{ mt: 2 }}>
                    ¿ Quiere reservar el Tour ? 
                </Typography>
                <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">
                    Cerrar
                </Button>
                <Button sx={{ mt: 2,ml:1 }} variant="contained" color="success" onClick={handleSubmit}> 
                    Reservar
                </Button>
            </Box>
        </Modal>
    );
}
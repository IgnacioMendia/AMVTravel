import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import './Login.css'

export default function SignInSide() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let User = {
          email: email,
          password: password,
        };
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(User)
        };
        fetch(window.conexion + '/Login/Login', requestOptions)
          .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            if (data != null) {
                localStorage.setItem('user', JSON.stringify(data))
                window.location.href = `/Home`
            }
            if (data?.Message == '400') {
              var alert500 = document.getElementById('alert500')
              alert500.style.display = '';
            }
            if (data?.Message == '401') {
              var alert = document.getElementById('alert')
              alert.style.display = '';
            }
          })
          .catch(function (error) {
            var alert500 = document.getElementById('alert500')
            alert500.style.display = '';
          })
      };

    return (
        <div className="container-fluid h-100">
            <div className="row align-items-center login-container">
                <div className="col-md-7 login-image"></div>
                <div className="col-md-5 login-form p-5">
                    <section className="mb-4">
                        <div className="cont-head-login">
                            <h2 className="mb-4 text-decoration-underline">Iniciar Sesión</h2>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required></input>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="contrasena" placeholder="contrasena"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required></input>
                            <label htmlFor="contrasena">Contraseña</label>
                        </div>
                    </section>
                    <section className="mb-4">
                        <input type="button" className="btn-login" value="Iniciar Sesión" onClick={handleSubmit}></input>
                    </section >
                    <section>
                        <Alert severity="warning" style={{display:'none'}} id="alert">Usuario y/o contraseña incorrectos.</Alert>
                        <Alert severity="error" style={{display:'none'}} id="alert500">En este momento no podemos procesar su solicitud.</Alert>
                    </section>
                </div>
            </div>
        </div>
    );
}
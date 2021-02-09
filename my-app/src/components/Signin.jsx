import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Registro</h1>
            
            <div className="row">
                <div className="col-6 form-group">
                    <label htmlFor="username">Usuario</label>
                    <input type="text" name="username" className="form-control"/>
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" className="form-control"/>
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="password">Confirma contraseña</label>
                    <input type="password" name="confirm-password" className="form-control"/>
                </div>
                <button className="btn btn-primary">Aceptar</button>
                <button className="btn btn-danger">Login</button>
            </div>
        </div>
    );
}

export default Login;
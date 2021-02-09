import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>

            <div className="row col-6">
                <div className="col-12 form-group">
                    <label htmlFor="">Usuario</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12 form-group">
                    <label htmlFor="">Usuario</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-primary col-12">Aceptar</button>
                </div>
                <div className="col-12 mt-2 d-flex justify-content-center">
                    <button className="btn btn-danger col-12">Registrase</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
import React from 'react';
import { withRouter } from 'react-router-dom';
import api from "../utils/exercises-api";

const Login = ({ history }) => {
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");

    const changeUser = ({ target: { value } }) => {
        setUser(value);
    }

    const changePassword = ({ target: { value } }) => {
        setPassword(value);
    }

    const btnLogin = () => {
        api.Login(user, password, (data) => {
            if (data.status !== 404) {
                sessionStorage.setItem("usuarioLogeado", JSON.stringify(data));
                sessionStorage.setItem("token", data.token);

                api.GetTrainingTypes(data.token, (data) => {
                    if (data !== undefined && data != null) sessionStorage.setItem("training-types", JSON.stringify(data));
                });

                history.push("./Dashboard");
            }
            else alert("Usuario o contraseña incorrecta");
        });
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
            <div className="row col-4" style={{"min-width": "430px"}}>
                <h1 className="col-12 text-center">Login</h1>
                <div className="col-12 form-group">
                    <label htmlFor="">Usuario</label>
                    <input type="text" className="form-control" onChange={changeUser} />
                </div>
                <div className="col-12 form-group">
                    <label htmlFor="">Contraseña</label>
                    <input type="text" className="form-control" onChange={changePassword} />
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-primary col-12" onClick={btnLogin} >Aceptar</button>
                </div>
                <div className="col-12 mt-2 d-flex justify-content-center">
                    <a href="/Home" className="btn btn-danger col-12">Registrase</a>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);
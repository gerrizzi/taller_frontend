import React from "react";
import { withRouter } from 'react-router-dom';

const AddExercise = ({ trinningTypes, addExercise }) => {
    const [weight, setWeight] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [trinningType, setTrinningType] = React.useState("");

    const changeWeight = ({ target: { value } }) => {
        setWeight(value);
    }

    const changeMinutes = ({ target: { value } }) => {
        setMinutes(value);
    }

    const changeTrinningType = ({ target: { value } }) => {
        console.log(value);
        setTrinningType(value);
    }

    const btnSaveExercise = () => {
        if (trinningType && trinningType.lenght == 0 ||
            weight && String(minutes).lenght == 0 ||
            minutes && String(minutes).lenght == 0)
            alert("Faltan datos");

        addExercise({ trainning_type: parseInt(trinningType), weight: parseFloat(weight), minutes: parseFloat(minutes) });
    }

    return (
        <div className="">
            <h2>Nuevo ejercicio</h2>
            <div className="form-row col-12">
                <div className="form-group col-md-4">
                    <label htmlFor="trainning_type">Tipo de entrenamiento</label>
                    <select className="form-control" name="trainning_type" id="trainning_type" onChange={changeTrinningType}>
                        <option value="" disabled="disabled" selected>Seleccione una opcion...</option>
                        <option value="1">Test</option>
                        {
                            trinningTypes &&
                            trinningTypes.map((e, i) => {
                                return <option value={e.id} key={i}>{e.name}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="weight">Peso</label>
                    <input type="number" className="form-control" name="weight" id="weight" onKeyUp={changeWeight} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="minutes">Minutos</label>
                    <input type="number" className="form-control" name="minutes" id="minutes" onKeyUp={changeMinutes} />
                </div>
                <div className="form-group col-12">
                    <button className="btn btn-primary" onClick={btnSaveExercise}>Guarar</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(AddExercise);
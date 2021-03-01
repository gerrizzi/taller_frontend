import React from 'react';
import api from '../utils/exercises-api';

const MyExercises = ({ exercises, deleteExercise, setTrinningType }) => {
    const setTrainningTypesToExercises = () => {
        const trainning_types = JSON.parse(sessionStorage.getItem("training-types"));
        let _exercises = [];

        for (let i = 0; i < exercises.length; i++) {
            const e = exercises[i];
            console.log(e);
            const [trainning_type] = trainning_types.filter(x => x.id == 11);
            const exercise = { ...e, exerciseName: trainning_type.name, totalCalories: trainning_type.calories_per_minute * e.minutes };

            _exercises = [exercise, ..._exercises]
        }
    }

    return (
        <div>
            <h2>Mis ejercicios</h2>
            {
                exercises !== undefined && exercises.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            {
                                Object.keys(exercises[0]).map((key, value) => {
                                    return <th>{key}</th>;
                                })
                            }
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exercises && exercises.length > 0 &&
                            exercises.map((e, i) => {
                                return <tr key={i}>
                                    {
                                        Object.entries(e).map((key, value) => {
                                            return <td>{key[1]}</td>;
                                        })
                                    }
                                    <td><button className="btn btn-danger btn-sm" title="Eliminar entrenamiento" onClick={() => deleteExercise(e.id)}>Eliminar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default MyExercises;

import React from 'react';
import ExercisesCount from "./ExercisesCount";

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
            <div className="w-100 d-flex justify-content-between align-items-center">
                <h2>Mis ejercicios</h2>
                <ExercisesCount exercises={exercises} size="50px"></ExercisesCount>
            </div>
            <div style={{position: "relative", height: "500px", overflow: "auto", display: "block"}}>
                {
                exercises !== undefined && exercises.length > 0 &&
                <table className="table table-bordered table-striped" >
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
            {
                (exercises === undefined || exercises == null || exercises.length == 0) &&
                <p className="ml-2">Sin entrenamientos para mostrar.</p>
            }
            </div>
        </div>
    )
}

export default MyExercises;

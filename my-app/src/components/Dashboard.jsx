import React from 'react';
import { connect } from "react-redux";
import { AddExercise, AddExercises, UpdateExercise, DeleteExercise, AddTrinningType } from "../redux/actions/ExercisesActions";
import MyExercises from "./MyExercises";
import _AddExercise from "./AddExercise";
import ExercisesMinutes_Chart from "./ExercisesMinutes_Chart";
import IMC_Chart from "./IMC_Chart";
import api from "../utils/exercises-api";

const Dashboard = ({ Exercises, DeleteExercise, AddExercise, AddExercises }) => {
    const userData = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
    const userToken = sessionStorage.getItem("token");

    React.useEffect(() => {
        api.MyExercises(userData.id/*131*/, userToken, function (data) {
            console.log(data);
            AddExercises(data);
        });
    }, []);

    const SaveExercise = (exercise) => {
        exercise.user_id = userData.id;

        //Gurado en el server
        api.AddExercise(exercise.user_id, exercise.trainning_type, exercise.weight, exercise.minutes, userToken, (res) => {
            if (res.status != 200)
                alert(`Error. ${res.status} - ${res.message}`);
            else {
                //Si se guardo en el server correctamte lo agrego al state del ExerciseReducer
                exercise.id = res.data.trainingID;
                AddExercise(exercise);
            }
        })
    }

    const _DeleteExercise = (exerciseId) => {
        //Delimino en el server
        api.DeleteExercise(userData.id, exerciseId, userToken, (res) => {
            if (res.message?.indexOf("satisfactoriamente") == -1)
                alert(`Error. ${res.status} - ${res.message}`);
            else {
                //Si se elimino en el server correctamte lo elimino state del ExerciseReducer
                DeleteExercise(exerciseId);
            }
        })
    }

    return (
        <div className="container-fluid">
            <h1>Dashboard</h1>
            <hr className="mt-0" />
            <MyExercises exercises={Exercises} deleteExercise={_DeleteExercise} ></MyExercises>
            <_AddExercise trinningTypes={[]} addExercise={SaveExercise}></_AddExercise>
            <ExercisesMinutes_Chart exercises={Exercises}></ExercisesMinutes_Chart>
            <IMC_Chart exercises={Exercises}></IMC_Chart>
        </div>
    );
}

const mapStateToProps = ({ Exercises: exercisesReducer }) => ({
    Exercises: exercisesReducer.Exercises
});

const mapDispatchToProps = { DeleteExercise, AddExercise, AddExercises };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
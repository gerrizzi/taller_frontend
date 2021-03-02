import React from 'react';
import Functions from "../utils/functions";
import { PieChart } from 'react-minimal-pie-chart';

const ExercisesCount = ({ exercises, size, color}) => {
    return (
        <div title="Cantidad total de entrenamientos" className="d-flex justify-content-center align-items-center bg-primary text-light m-2" style={{fontSize: "26px", width: size ?? "80px", height: size ?? "80px", background: color && color.length > 0 ? color + "!important" : "", borderRadius: "100%"}}>
            {exercises.length}
        </div>
    )
}

export default ExercisesCount;
import React from 'react';
import Functions from "../utils/functions";
import Chart from "./Chart";


const ExercisesMinutes_Chart = ({ exercises }) => {
    const [dataForChart, setDataForChart] = React.useState([]);

    React.useEffect(() => {
        SetDataForChart();
    });

    const SetDataForChart = async () => {
        let result = [];
        let exercisesGroupByType = Functions.GroupBy(exercises, x => (x.trainning_type));
        let i = 0;

        exercisesGroupByType.forEach((e) => {
            if (e && e.length > 0) {
                const primero = e[0];
                const minutosTotales = Functions.Sum(e, "minutes");
                result.push({ x: primero.trainning_type, y: minutosTotales, color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, minutosTotales: minutosTotales });
            }

            if (i >= exercisesGroupByType.size - 1) {
                setDataForChart(result);
            }

            i++;
        });
    }

    return (
        <div>
            <div>
                <h4>Minutos por entrenamiento</h4>
            </div>
            <div className="row">
            <div className="col-md-6" style={{position: "relative", height: "400px", overflow: "auto", display: "block"}}>
            {
                dataForChart && dataForChart.length > 0 &&
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Tipo de entrenamiento</th>
                            <th>Minutos totales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataForChart.map((e, i) => {
                                return <tr>
                                    <td>{e.x}</td>
                                    <td>{e.y}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
            </div>

            <Chart type="bar" className="col-md-6" data={dataForChart} width={600} height={400}></Chart>
            </div>
        </div>
    )
}

export default ExercisesMinutes_Chart;
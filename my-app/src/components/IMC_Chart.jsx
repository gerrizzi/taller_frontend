import React from 'react';
import Chart from "./Chart";


const IMC_Chart = ({ exercises }) => {
    const [dataForChart, setDataForChart] = React.useState([]);

    React.useEffect(() => {
        SetDataForChart();
    });

    const SetDataForChart = async () => {
        let result = [];
        let i = 0;

        exercises.forEach((e) => {
            if (e)
                result.push([e.id, e.weight]);

            if (i >= exercises.length - 1) {
                setDataForChart(result);
            }

            i++;
        });
    }

    return (
        <div>
            <h4>Gráfica de IMC</h4>
            <Chart type="line" data={dataForChart} width={600} height={500}></Chart>
        </div>
    )
}

export default IMC_Chart;
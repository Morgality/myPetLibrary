import React from "react";
import "./ChartBlock.scss"
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


export const ChartBlock = () => {

    const data = {
        labels: ['Куплено', 'Отменено', 'Ошибка доставки'],
        datasets: [{
          label: 'Единиц товара',
          data: [12, 19, 3],
          borderWidth: 1
        }]
      }

    return (
        <div className="chart-block">
            <div className="pie--chart">
                <Pie
                data={data}
                />
            </div>
        </div>
    )
}
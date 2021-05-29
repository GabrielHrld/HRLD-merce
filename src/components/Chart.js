import { red } from '@material-ui/core/colors';
import React from 'react'
import { Bar } from 'react-chartjs-2';

import '../styles/components/Chart.scss'

const data = {
  labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 153)',
    },
  ],
};

const options = {
  backgroundColor: 'rgb(75, 192, 192)',
  scales: {
    yAxes: 
      {
        ticks: {
          beginAtZero: true,
        },
      },
  },
};
const Chart = () => {
  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  )
}

export default Chart

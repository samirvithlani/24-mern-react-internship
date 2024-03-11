import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { ArcElement, BarElement, CategoryScale, Chart, LinearScale, LineElement } from "chart.js";
Chart.register(CategoryScale)
Chart.register(ArcElement);
Chart.register(LinearScale)
Chart.register(BarElement)


export const PieChartDemo = () => {
  const courses = [
    {
      id: 1,
      name: "java",
      value: 1000,
    },
    {
      id: 2,
      name: "python",
      value: 200,
    },
    {
      id: 3,
      name: "javascript",
      value: 300,
    },
    {
      id: 4,
      name: "c++",
    },
  ];
  const [data, setdata] = useState({
    labels: courses.map((course) => course.name),
    datasets: [
        {
            labels: 'Courses',
            data: courses.map((course) => course.value),
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
            ],
            borderWidth: 1
        }
    ]
  })
  return( <div>
    <h1>PIE CHART DEMO</h1>
    <div style={{height:200,width:200}}>
    {/* <Pie data={data}/> */}
    <Bar data={data}/>
    </div>
  </div>)
};

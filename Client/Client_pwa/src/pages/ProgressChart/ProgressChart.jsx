// Progress.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useParams } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function ProgressChart() {

    let id = useParams()
    let MyId = id.id.toUpperCase()

    // console.log("first",id)
  return (
    <div className='p-10 flex justify-center items-center flex-col'>
     <h1 className='text-3xl font-bold pb-10'> Section {MyId}</h1>
      <Pie data={data} className=''/>
      <div className='pt-8 text-semibold text-xl border-2 bg-gray-100 p-5 mt-7 rounded-xl'>
        <div>
            <h1 className='font-bold py-3'> Weakest area of students</h1>
            <h2 className='text-teal-500 font-semibold'> sdkvj</h2>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-6 gap-5 w-full'>    
        <button className='bg-teal-500 rounded-lg text-white p-3 w-full '>
            <h1 className='font-bold py-3 '>View all Students data</h1>
        </button>
        <button className='bg-teal-500 rounded-lg text-white p-3 w-full'>
            <h1 className='font-bold py-3'>Send resources </h1>
        </button>
      </div>
    </div>
  );
}

export default ProgressChart;

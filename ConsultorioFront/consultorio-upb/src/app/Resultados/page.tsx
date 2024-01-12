'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { pMax10, pMax5, pMax6, pMax9 } from '../helpers/ChartResults';
import NavBar from '../components/Navbar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Perfil de habitos y tecnicas de estudio',
    },
  },
};




export default function App({searchParams}:{
  searchParams:{
    groupA: number,
    groupB: number,
    groupC: number,
    groupD: number,
    groupE: number,
    groupF: number,
    groupG: number
  }
}) {

  const labels = ['AC', 'LU', 'ES','PL', 'TE', 'EX', 'TR'];
   const data = {
    labels,
    datasets: [
      {
        label: 'Resultados por categoria',
        data: [pMax10(searchParams.groupA),
        pMax10(searchParams.groupB),
        pMax6(searchParams.groupC),
        pMax10(searchParams.groupD),
        pMax9(searchParams.groupE),
        pMax5(searchParams.groupF),
        pMax6(searchParams.groupG)],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        
        data: [0,100],
        borderColor: 'rgb(0,0,0,0)',
        backgroundColor: 'rgba(0,0,0,0)',
      }
    ],
    
  };
  return (
    <>
      <NavBar/>
      <div className='w-[50%] flex h-screen items-center justify-center bg-center mx-auto '>
        <Line options={options} data={data} />
      </div>
    </>
    );
}
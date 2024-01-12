'use client'
import NavBar from '@/app/components/Navbar'
import { QUESTIONS } from '@/app/data/data'
import { Questions } from '@/app/interfaces/Questions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState,useEffect  } from 'react'

export default function myTest() {
  // const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log("🚀 ~ file: page.tsx:9 ~ myTest ~ currentQuestion:", currentQuestion)

  const [groupA,setGroupA] = useState(0);
  const [groupB ,setGroupB] = useState(0);;
  const [groupC ,setGroupC] = useState(0);;
  const [groupD ,setGroupD] = useState(0);;
  const [groupE ,setGroupE] = useState(0);;
  const [groupF ,setGroupF] = useState(0);;
  const [groupG ,setGroupG] = useState(0);;

  const handleClick = () => {
    // Almacenar datos en localStorage antes de redirigir a la página de resultados
    const data = {
      groupA,
      groupB,
      groupC,
      groupD,
      groupE,
      groupF,
      groupG,
    };

    localStorage.setItem('myTestData', JSON.stringify(data));

    // Redirigir a la página de resultados
    
  };
  
  

  const handleYesButton =(group:String)=>{
    if (group == "A"){
      setGroupA(groupA => groupA+1);
    } else if (group == "B"){
      setGroupB(groupB => groupB+1);
    } else if (group == "C"){
      setGroupC(groupC => groupC+1);
    } else if (group == "D"){
      setGroupD(groupD => groupD+1);
    } else if (group == "E"){
      setGroupE(groupE => groupE+1);
    } else if (group == "F"){
      setGroupF(groupF => groupF+1);
    } else if (group == "G"){
      setGroupG(groupG => groupG+1);
    } 
    console.log("grupoA "+groupA)
    console.log("grupoB "+ groupB)
    console.log("grupoC "+ groupC)
    console.log("grupoD "+ groupD)
    console.log("grupoE "+ groupE)
    console.log("grupoF "+ groupF)
    console.log("grupoG "+ groupG)
  }

 const filteredQuestions = ():Questions[] =>{
    return QUESTIONS.slice(currentQuestion,currentQuestion+8);
 }



  const handlePrevious = () => {
    const prevQues = currentQuestion - 8;
    prevQues >= 0 && setCurrentQuestion(prevQues);

  };
  
  const handleNext = () => {
    const nextQues = currentQuestion + 8;
    setCurrentQuestion(nextQues);
  };
    

  return (
    
    <main className=''>
        <NavBar></NavBar>
       <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
        <div className='text-white/60 text-3xl pb-12'>CUESTIONARIO DE HÁBITOS Y TÉCNICAS DE ESTUDIO (CHTE)</div>
        <div className="flex flex-col items-start w-full overflow-y-hidden">
          
          <div className="flex flex-col w-full items-center ">            

            {filteredQuestions().map(({id,statement,group}) => (
              

              <div
                key={id}
                className="flex items-center justify-between h-12 w-9/12 py-4 pl-5 m-2 ml-0 space-x-2 border-2 bg-white/5 border-white/10 rounded-xl"
              >
               
                <p className="ml-6 mt-6 text-white">{statement}</p>
                <div className="flex items-end">
                  <button className='w-[100%] px-2 mx-2 bg-[#519D90] rounded-lg' onClick={() => handleYesButton(group)}>Sí</button>
                  <button className=' w-[100%] px-2 mx-2 bg-[#E53E3E] rounded-lg'>No</button>
                </div>
                {/* <button className='flex-1 w-[5%] my-10 pl-24 bg-[#519D90] rounded-lg items-end'>yes</button> */}
              </div>
            ))} 
          </div>
          <div className="flex justify-between w-full mt-4 text-white">
            <button className="w-[49%] py-3 bg-[#82363A] rounded-lg mx-24 " onClick={handlePrevious}>Previous</button>
            <Link href={{
              pathname: "/Resultados",
              query:{
                groupA: groupA,
                groupB: groupB,
                groupC: groupC,
                groupD: groupD,
                groupE: groupE,
                groupF: groupF,
                groupG: groupG
              }
            }}>
              <button className='w-[49%] py-3 bg-[#519D90] rounded-lg mx-24'onClick={handleClick} >RESULTADOS</button>
            </Link>
            <button className="w-[49%] py-3 bg-[#82363A] rounded-lg mx-24" onClick={handleNext}>Next</button>
          </div>


        </div>

        </div>
    </main>
    
  )
}

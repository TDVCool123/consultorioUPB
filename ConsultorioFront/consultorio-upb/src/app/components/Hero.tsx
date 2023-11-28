import Link from "next/link";
import Image from 'next/image';
import bannerImage from '../../images/bannerConsultorio.jpg'
import { Button } from "@mui/material";
import CustomizedButtons from "./Button";
const Hero = () => {


    return (
      <>


        <section className='hero' id='home'>
          <div className='hero-banner'>
            <h1 >Consejeria UPB</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo debitis est autem dicta.
            </p>
            <a href="#Tests">
              <button className="bg-red-950 bg-opacity-80 rounded text-amber-100 text-opacity-85 text-base text-justify p-2 ">Prueba un Test!</button>
            </a>
             
            
          </div>
        </section>
      
      </>
    )
  }
  export default Hero
  
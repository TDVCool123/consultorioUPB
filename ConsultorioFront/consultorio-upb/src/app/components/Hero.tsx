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
              En nuestra plataforma de Consejería Estudiantil, estamos comprometidos a ser tu apoyo confiable mientras navegas por estos momentos cruciales.
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
  
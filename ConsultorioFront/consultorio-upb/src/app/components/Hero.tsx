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

            <CustomizedButtons/>
    
          </div>
        </section>
      
      </>
    )
  }
  export default Hero
  
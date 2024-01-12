import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from "next/link";

import chte from "../../../src/app/images/CHTE.png"


import Image from 'next/image';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1]; //Cambiar por la base de datos



export default function Tests() {
  return (
    <>
      <main className='bg-orange-600 bg-opacity-60' id='Tests'>
        {/* Hero unit */}
        <Container sx={{ py: 8}} maxWidth="md">
          <h1 className='flex justify-center align-middle mt-14 mb-24'>Tests</h1>
          {/* End hero unit */}
          <Grid container spacing={4} className='flex justify-center align-mid mb-24'>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={8} md={6} >
                <Link
                  href={{ pathname: `/test/${card}` } } 
                >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', flex:1}}
                >
                  <Image src={chte} // Aquí se espera un string, pero myImage es de tipo StaticImageData
                     alt="Descripción de la imagen"
                   
                  /> 
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      CUESTIONARIO DE HÁBITOS Y TÉCNICAS DE ESTUDIO
                    </Typography>
                    <Typography color="red" >
                      Conoce cuales son tu habilidades y debilidades a la hora de estudiar
                    </Typography>
                  </CardContent>
                  
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </>
  );
}
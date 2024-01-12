'use client';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import miniatura from "../../../src/app/images/Miniatura.png"
import Image from 'next/image';

import Link from "next/link";
import { VIDEOS } from '../data/data';
//import Video from './Video/[id]';
import { createContext } from 'react';

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

//const cards = {id:"1",name:"video1.mp4" 2}; //Cambiar por la base de datos


export default function Videos() {
  return (
    <>
      <main id='Videos'>
        {/* Hero unit */}
        <Container sx={{ py: 4 }} maxWidth="md">
          <h1 className='flex justify-center align-middle mt-14 mb-24'>Videos</h1>
          {/* End hero unit */}
          <Grid container spacing={4} className='flex justify-center align-mid mb-24'>
            {VIDEOS.map((videos) => (
              <Grid item key={videos.id} xs={12} sm={6} md={6}>
                <Link
                  href={{ pathname: `/video/${videos.id}` } } 
                >
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Image src={miniatura} // Aquí se espera un string, pero myImage es de tipo StaticImageData
                     alt="Descripción de la imagen"
                   
                  /> 
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                       {videos.tittle}
                    </Typography>
                    <Typography color="red">
                    Aprende de los estudiantes de la UPB cuales son los metodos que ellos usan para estudiar y sacar buenas notas
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
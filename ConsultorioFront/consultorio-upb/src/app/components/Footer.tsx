import { Copyright } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <main>
        {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Consejeria UPB
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Oficina:
          Frente al aula C3 en el bloque del centro de eventos. Cerca a la cancha de fútbol
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </main>
  )
}

export default Footer
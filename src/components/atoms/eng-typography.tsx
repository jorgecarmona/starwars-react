import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Types() {
    return (
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h1" gutterBottom>
          h1. Checando Typography...
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Checando Typography...
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Checando Typography...
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Checando Typography...
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Checando Typography...
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Checando Typography...
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitulo 1. Prueba de codigo de typography.. empezamos bien,, parece..
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitulo 2. Seguimos con la prueba.. super q vamos bien... hasta aca al menos...!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cuerpo 1. En serio q vamos mejor aun!.. seguimos checando el codigo!
        </Typography>
        <Typography variant="body2" gutterBottom>
          Cuerpo 2. Boom!!! ,,, señores y señoras, si q funcionó!!.. Typography, checked !!!
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
    );
  }

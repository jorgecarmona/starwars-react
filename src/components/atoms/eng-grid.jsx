import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#aaa',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={12}>
            <Item2>xs=12</Item2>
          </Grid>
          <Grid xs={1}>
            <Item2>xs=1</Item2>
          </Grid>
          <Grid xs={8}>
            <Item2>xs=8</Item2>
          </Grid>
          <Grid xs={6}>
            <Item2>xs=6</Item2>
          </Grid>
          <Grid xs={6}>
            <Item2>xs=6</Item2>
          </Grid>
          <Grid xs={6}>
            <Item2>xs=1</Item2>
          </Grid>
        </Grid>
      </Box>
    );
  }

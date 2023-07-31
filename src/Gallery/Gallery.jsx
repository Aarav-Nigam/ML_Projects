import React from 'react'
import { Grid, Paper } from '@mui/material'
import ProjCard from '../Proj_Card/Proj_Card'
import { List } from './List'
function Gallery({search}) {
  return (
    <Paper elevation={24} className='bg-primary m-5 p-5'>
        <Grid container spacing={2}>
        {
            List.filter((o)=>{
                if(o.name.toLowerCase().includes(search.toLowerCase())) return true;
                else return false;
            }).map(
                (obj)=>{return (
                    <Grid item>
                        <ProjCard details={obj}/>
                    </Grid>
                )
                }
            )
        }
        </Grid>
    </Paper>
  )
}

export default Gallery
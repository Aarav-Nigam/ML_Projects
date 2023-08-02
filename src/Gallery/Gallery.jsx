import React from 'react'
import { Grid, Paper } from '@mui/material'
import ProjCard from '../Proj_Card/Proj_Card'
import NoteBook_Card from '../NoteBook_Card/NoteBook_Card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ProjectList, NotebookList } from './List'
function Gallery({ search }) {
    const [alignment, setAlignment] = React.useState('notebooks');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    NotebookList.sort((a,b)=>{
        return b.id-a.id;
    })
    ProjectList.sort((a,b)=>{
        return b.id-a.id;
    })
    console.log(NotebookList)
    return (
        <>
            <div className='d-flex justify-content-center m-4'>
            <ToggleButtonGroup
                color='primary'
                elevation={24}
                className='text-bg-light w-50 m-auto'
                value={alignment}
                exclusive
                fullWidth
                size='large'
                onChange={handleChange}
                aria-label="Platform"
            >
                
                <ToggleButton  value="notebooks">Notebooks</ToggleButton>
                <ToggleButton value="projects">Projects</ToggleButton>
            </ToggleButtonGroup>
            </div>
            <Paper elevation={24} className='bg-primary m-5 p-5'>
                {alignment=='projects' && (<Grid container spacing={2}>
                    {
                        ProjectList.filter((o) => {
                            if (o.name.toLowerCase().includes(search.toLowerCase())) return true;
                            else return false;
                        }).map(
                            (obj) => {
                                return (
                                    <Grid item>
                                        <ProjCard details={obj} />
                                    </Grid>
                                )
                            }
                        )
                    }
                </Grid>) }
                {
                    alignment=='notebooks' && (<Grid container spacing={2}>
                        {
                            NotebookList.filter((o) => {
                                if (o.name.toLowerCase().includes(search.toLowerCase())) return true;
                                else return false;
                            }).map(
                                (obj) => {
                                    return (
                                        <Grid item>
                                            <NoteBook_Card details={obj} />
                                        </Grid>
                                    )
                                }
                            )
                        }
                    </Grid>

                    )
                }
            </Paper>
        </>
    )
}

export default Gallery
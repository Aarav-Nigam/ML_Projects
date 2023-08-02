import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function NoteBook_Card({details}) {
  return (
    <Card variant="outlined">
        <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 25 }} color="black" gutterBottom>
        {details.name}
      </Typography>
      
      <Typography variant="body2">
        {details.description}
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View Notebook</Button>
    </CardActions>
  </React.Fragment>
    </Card>
  )
}

export default NoteBook_Card
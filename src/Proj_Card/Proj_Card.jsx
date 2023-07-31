import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProjCard({details}) {
  return (
    <Card sx={{ maxWidth: 400 }} key={details.id} onClick={()=>{window.location.href = details.url;}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={details.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {details.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
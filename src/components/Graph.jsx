import React from 'react';
import { Box, Typography, Grid, Card, CardContent, IconButton, ButtonGroup, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CompareIcon from '@mui/icons-material/Compare';
import TabComponent from './TabComponent';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Price',
        data: [61000, 63000, 65000, 64000, 63000, 62000, 63179],
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h2" style={{fontWeight:'bold'}}>63,179.71 <sup style={{color:'#BDBEBF', fontSize:'1.2rem'}}>USD</sup></Typography>
          <Typography style={{fontWeight:'bold'}} variant="body1" color="#67BF6B">
            +2,161.42 (3.54%)
          </Typography>
        </Box>
        <TabComponent/>
        <Grid sx={{marginTop:'20px'}} container spacing={2} >
          <Grid item>
            <IconButton>
              <FullscreenIcon />
              <Typography>Fullscreen</Typography>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <CompareIcon />
              <Typography>Compare</Typography>
            </IconButton>
          </Grid>
          <Grid item alignSelf="flex-end">
            <ButtonGroup sx={{justifyContent:'flex-end'}}>
              <Button>1d</Button>
              <Button>3d</Button>
              <Button>1w</Button>
              <Button>1m</Button>
              <Button>6m</Button>
              <Button>1y</Button>
              <Button>max</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Box height={300} mt={2}>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Graph;

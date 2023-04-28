import axios from "axios";
import React from "react";
import { parseISO, isAfter, addDays } from 'date-fns';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2";
import Card from '@mui/material/Card';

const baseURL = "/api/schedule.json";

export default function NextRace() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  var nextRaceDate = 'Race Already Happened';
  var index = 0;
  var time = parseISO(post.stages[index].stages[5].scheduled);
  
  for (var i = 0; i < post.stages.length; i++) {
    const dateB = parseISO(post.stages[i].scheduled_end);
    if (isAfter(dateB, new Date())) {
      nextRaceDate = dateB.toDateString(); //next race date
      index = i; //get the index of the next race
      break;
    }
  }

  return (
    <div>
      <Card variant="outlined" sx={{ width: 600 }}>
        <Typography id="non-linear-slider" gutterBottom>
          <h2>{nextRaceDate} @ {time.getHours()} AM</h2>
          <h2>{post.stages[index].venue.name}</h2>
          <h3>{post.stages[index].venue.country}, {post.stages[index].venue.city}</h3>
          <Box sx={{ width: 600 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={3}>
                <h4>Left Turns: {post.stages[index].venue.curves_left}</h4>
              </Grid>
              <Grid item xs={3}>
                <h4>Right Turns: {post.stages[index].venue.curves_right}</h4>
              </Grid>
            </Grid>
          </Box>
        </Typography>
      </Card>
    </div>
  );
}
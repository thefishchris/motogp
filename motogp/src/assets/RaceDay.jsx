import axios from "axios";
import React from "react";
import { parseISO, isAfter, addDays } from 'date-fns';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2";
import Card from '@mui/material/Card';

//set the base URL for the API call
const baseURL = "/api/schedule.json";

export default function NextRace() {
  //set the state for the API call
  const [post, setPost] = React.useState(null);
  //make the API call
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  //dont proceed until API call is complete
  if (!post) return null;

  //declare variables
  var nextRaceDate = 'Race Already Happened';
  var index = 0;

  //loop through and compare dates to find upcoming race
  for (var i = 0; i < post.stages.length; i++) {
    const dateB = parseISO(post.stages[i].scheduled_end);
    if (isAfter(dateB, new Date())) {
      nextRaceDate = dateB.toDateString(); //next race date
      index = i; //get the index of the next race
      break;
    }
  }
  //get the time after we found the proper date
  //hardcoded variable as this is consistent in all API calls
  var time = parseISO(post.stages[index].stages[5].scheduled);

  //this funtion will pull the time from the date and format it to 12 hour time
  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    return (1 + ((hours - 1) % 12)) + ":" + minutes.toString().padStart(2, "0") + " " + ((hours > 11) ? "PM" : "AM");
  }
  
  //return the card with the proper information
  return (
    <div>
      <Card variant="outlined" sx={{ width: 600 }}>
        <Typography id="non-linear-slider" gutterBottom>
          <h2>{nextRaceDate} @ {/*time goes here ->*/formatTime(time)   } </h2>
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
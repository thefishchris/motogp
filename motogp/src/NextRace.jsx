
//make the slider work with the date, so that when you move the slider, the date changes

import axios from "axios";
import React from "react";
import { parseISO, isAfter} from 'date-fns';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Unstable_Grid2";

const baseURL = "/api/schedule";

export default function NextRace() {
  const [post, setPost] = React.useState(null);
  const today = new Date();
  const [racesMover, setRacesMover] = React.useState(0);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);


  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setRacesMover(newValue);
    }
  };


  if (!post) return null;
  var nextRaceDate = '';
  /* use ParseISO to convert date to ISO, so that we can
  display it nicely, use isAfter to compare the dates. */
  const dateB = parseISO(post.stages[racesMover].scheduled_end);
  if (isAfter(dateB, today)) {
    nextRaceDate = dateB.toDateString();
  }

  return (
    <div>
      <Box sx={{ width: 600 }}>
        <Slider
          size="small"
          width="100%"
          defaultValue={0}
          aria-label="Small"
          valueLabelDisplay="auto"
          value={racesMover}
          min={0}
          marks
          max={post.stages.length - 1}
          onChange={handleChange}
        />
      </Box>
      <h2>{nextRaceDate}</h2>
      <h2>Track: {post.stages[racesMover].venue.name}</h2>
      <h3>Country: {post.stages[racesMover].venue.country}</h3>
      <h4>City: {post.stages[racesMover].venue.city}</h4>
      <Box sx={{ width: 600 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <h5>Lefts: {post.stages[racesMover].venue.curves_left}</h5>
          </Grid>
          <Grid item xs={4}>
            <h5>Rights: {post.stages[racesMover].venue.curves_right}</h5>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import userCountByWeek from './user_count_by_week.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50,
    marginLeft: 50,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" paragraph={true}>
        均一教育平台網站公開數據
      </Typography>
      <Typography variant="h6" paragraph={true}>
        上週數據
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <LineChart width={1100} height={400} data={userCountByWeek}>
              <Line type="monotone" dataKey="unique_user_cnt" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
      <div >&zwj;</div>
      <Typography variant="h6" paragraph={true}>
        歷史數據
      </Typography>
      <Grid container spacing={2}>
          <Grid item xs>
            <Paper className={classes.paper}>

            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>

            </Paper>
          </Grid>
        </Grid>

      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

import React from 'react';
import Plot from 'react-plotly.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import figData from './user_count_by_week.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50,
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
      <Typography variant="h5" paragraph={true}>
        前一周數據
      </Typography>

      <Grid container spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Plot
                data={[
                  {
                    x: Object.values(figData['week']),
                    y: Object.values(figData['unique_user_cnt']),
                    type: 'scatter',
                    mode: 'lines',
                  },
                ]}
                  layout={ {width: 'auto', height: 400, title: '週活躍人數'} }
                />
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;

const data = {
  "week": {"0": "123", "1": "1234"}
}

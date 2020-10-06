import React from 'react';
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import userCountByWeek from './user_count_by_week.json';
import lastWeekUserCountByCity from './last_week_user_count_by_city.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50,
    marginLeft: 50,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
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
        上週數據 ({userCountByWeek[userCountByWeek.length-1].week})
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={lastWeekUserCountByCity}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="city"/>
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
                <Bar name="上週各縣市活躍人數" dataKey="active_student_cnt" fill="#3399FF"/>
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      <div >&zwj;</div>
      <div >&zwj;</div>

      <Typography variant="h6" paragraph={true}>
        累計數據 (2012-10~{userCountByWeek[userCountByWeek.length-1].week})
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userCountByWeek}>
                <Line name="週活躍人數" type="monotone" dataKey="unique_user_cnt" stroke="#3399FF" dot={false}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="week" tickFormatter={(tickItem) => tickItem.substring(0, 7)}/>
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
              </LineChart>
            </ResponsiveContainer>
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

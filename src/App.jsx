import React, { useState, useEffect, useCallback } from 'react';
import { Legend, Label, Cell, PieChart, Pie, BarChart, Bar, LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";

const AzureBlobURL = '/dashboard-json/';
const RADIAN = Math.PI / 180;

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

const colors4 = ['#880e4f', '#311b92', '#0d47a1', '#006064',];

const colors20 = [
  '#ff7961', '#ff6090', '#d05ce3', '#9a67ea',
  '#757de8', '#6ec6ff', '#67daff', '#62efff',
  '#52c7b8', '#80e27e', '#bef67a', '#629749',
  '#b4a647', '#ffb04c', '#ff833a', '#ff8a50',
  '#a98274', '#cfcfcf', '#8eacbb', '#484848',
];

function App() {
  const classes = useStyles();
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [WAUWeekByWeek, setWAUWeekByWeek] = useState([]);
  const [lastWeekWAUByCity, setLastWeekWAUByCity] = useState([]);
  const [regUserCategory, setRegUserCategory] = useState([]);
  const [contentType, setContentType] = useState([]);
  const [lastWeekWAUByHour, setLastWeekWAUByHour] = useState([]);
  const [contentUsageByMonth, setContentUsageByMonth] = useState([]);
  const [regUserByMonth, setRegUserByMonth] = useState([]);
  const [regUserByCity, setRegUserByCity] = useState([]);

  useEffect(() => {
    const jsonPairs = {
      'WAU_week_by_week.json': setWAUWeekByWeek,
      'last_week_WAU_by_city.json': setLastWeekWAUByCity,
      'reg_user_category.json': setRegUserCategory,
      'content_type.json': setContentType,
      'last_week_WAU_by_hour.json': setLastWeekWAUByHour,
      'content_usage_by_month.json': setContentUsageByMonth,
      'reg_user_by_month.json': setRegUserByMonth,
      'reg_user_by_city.json': setRegUserByCity,
    }

    const fetchJSON = async(filename) => {
      await fetch(AzureBlobURL + filename).then(
        response => {if(response.ok) return response.json()}).then(
          json => jsonPairs[filename](json)).catch(
            err => console.error(err)).finally(() => {
               setLoading(false);
            })
    };

    Object.keys(jsonPairs).forEach(filename => fetchJSON(filename));
  }, []);

  const renderInnerLabel = useCallback(({cx, cy, midAngle, innerRadius, outerRadius, percent, user_role,}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 15;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${user_role}：${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }, [],);

  const renderOuterLabel = useCallback(entry => {
    if (entry.city_total_student_cnt > 10000) {
      return entry.city + "：" + (entry.city_total_student_cnt * 100 / regUserCategory.reduce((total, obj) => total + obj.count, 0)).toFixed(2) + "%";
    }
      else{ return; }  
  }, [regUserCategory],);

  if (isLoading) {
    return (<div><p>Loading...</p></div>)
  }
  else {    
    return (
      <div className={classes.root}>

        <Typography variant="h4" paragraph={true}>
          均一教育平台網站公開數據
        </Typography>

        <Typography variant="h5" paragraph={true} color="secondary">
          上週數據({ WAUWeekByWeek[WAUWeekByWeek.length - 1].week })
        </Typography>

        <Grid container spacing={4}>

          <Grid item xs={6}>
            <Typography variant="h6">
              上週24小時各時段平均活躍人數
            </Typography>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={lastWeekWAUByHour}>
                  <Line name="平均活躍人數" type="monotone" dataKey="avg_user_cnt" stroke={colors20[0]} dot={true}/>
                  <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="hour"/>
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6">
              上週24小時各時段平均使用時間(分鐘)
            </Typography>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={lastWeekWAUByHour}>
                  <Line name="平均使用時間(分鐘)" type="monotone" dataKey="avg_time_minute" stroke={colors20[2]} dot={true}/>
                  <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="hour"/>
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

        </Grid>

        <Grid container spacing={4}>

          <Grid item xs>
            <Typography variant="h6">
              上週各縣市活躍人數
            </Typography>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={lastWeekWAUByCity}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="city"/>
                  <YAxis />
                  <Tooltip />
                  {/* <Legend verticalAlign="top" height={36}/> */}
                  <Bar name="上週各縣市活躍人數" dataKey="active_student_cnt" fill={colors20[4]}/>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

        </Grid>

        <div >&zwj;</div>
        <div >&zwj;</div>

        <Typography variant="h5" paragraph={true}  color="secondary">
            長期數據 (2012-10 ~ { WAUWeekByWeek[WAUWeekByWeek.length-1].week })
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs>
            <Typography variant="h6">
              每週活躍使用者人數
            </Typography>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={WAUWeekByWeek}>
                  <Line name="週活躍人數" type="monotone" dataKey="unique_user_cnt" stroke={colors20[8]} dot={false}/>
                  <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="week" tickFormatter={(tickItem) => tickItem.substring(0, 7)}/>
                  <YAxis />
                  <Tooltip />
                  {/* <Legend verticalAlign="top" height={36}/> */}
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs>
            <Typography variant="h6">
              每月內容使用人次
            </Typography>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={contentUsageByMonth}>
                  <Line name="影片使用人次" type="monotone" dataKey="video_cnt" stroke={colors20[11]} dot={false}/>
                  <Line name="習題使用人次" type="monotone" dataKey="exercise_cnt" stroke={colors20[12]} dot={false}/>
                  <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="year_month"/>
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36}/>
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4}>

          <Grid item xs={6}>
            <Typography variant="h6">
              各縣市不同身分註冊使用者統計
            </Typography>
            <Paper className={classes.paper}>
              <MapChart setTooltipContent={setContent} data={regUserByCity}/>
              <ReactTooltip>{content}</ReactTooltip>
            </Paper>
          </Grid>
          
          <Grid item xs={6}>

            <Typography variant="h6">
              網站內容統計
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <Typography variant="h4" paragraph={true} align="center">
                    {contentType.length > 0 ? contentType[0].exercise.toLocaleString('en'): 'Loading...'}
                  </Typography>
                  <Typography variant="h5" paragraph={true} align="center">
                    知識點個數
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <Typography variant="h4" paragraph={true}  align="center">
                    {contentType.length > 0 ? contentType[0].quiz.toLocaleString('en'): 'Loading...'}
                  </Typography>
                  <Typography variant="h5" paragraph={true} align="center">
                    練習題總數
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <Typography variant="h4" paragraph={true} align="center">
                    {contentType.length > 0 ? contentType[0].video.toLocaleString('en'): 'Loading...'}
                  </Typography>
                  <Typography variant="h5" paragraph={true} align="center">
                    影片總數
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

          </Grid>

        </Grid>

        <Grid container spacing={4}>
          <Grid item xs>
            <Typography variant="h6">
              每月新增註冊人數
            </Typography>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={regUserByMonth}>
                  <Line name="單月新增註冊人數" type="monotone" dataKey="monthly_register_count" stroke={colors20[14]} dot={false}/>
                  <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="date" tickFormatter={(tickItem) => tickItem.substring(0, 7)}/>
                  <YAxis />
                  <Tooltip />
                  {/* <Legend verticalAlign="top" height={36}/> */}
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs>
            <Typography variant="h6">
              所有註冊使用者縣市/身分占比
            </Typography>
            <Paper className={classes.paper}>
              <ResponsiveContainer width="100%" height={600}>
                <PieChart>
                  <Pie data={regUserCategory} dataKey="count" nameKey="user_role" cx="50%" cy="50%" innerRadius={100} outerRadius={230} fill="#8884d8" labelLine={false} label={renderInnerLabel}>
                    {
                      regUserCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors4[index]}/>
                      ))
                    }
                    <Label value={"註冊使用者：" + regUserCategory.reduce((total, obj) => total + obj.count, 0).toLocaleString('en')} position="center" />
                  </Pie>
                  <Pie data={lastWeekWAUByCity} dataKey="city_total_student_cnt" nameKey="city" cx="50%" cy="50%" innerRadius={230} outerRadius={280} fill="#82ca9d" label={renderOuterLabel} labelLine={false}>
                    {
                      lastWeekWAUByCity.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors20[index]}/>
                      ))
                    } 
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

      </div>
    );}
}

export default App;

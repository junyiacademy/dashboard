import React, { useState, useEffect } from 'react';
import { Legend, Label, Cell, PieChart, Pie, BarChart, Bar, LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactTooltip from "react-tooltip";

export default RegUserByCity = () => {
    // production
    // const JSONPath = 'https://storageaccountazure88f7.blob.core.windows.net/dashboard-json/reg_user_by_city.json';
    // local
    const JSONPath = '/dashboard-json/reg_user_by_city.json';
    const RADIAN = Math.PI / 180;
    const colors4 = ['#880e4f', '#311b92', '#0d47a1', '#006064',];
    const colors20 = [
    '#ff7961', '#ff6090', '#d05ce3', '#9a67ea',
    '#757de8', '#6ec6ff', '#67daff', '#62efff',
    '#52c7b8', '#80e27e', '#bef67a', '#629749',
    '#b4a647', '#ffb04c', '#ff833a', '#ff8a50',
    '#a98274', '#cfcfcf', '#8eacbb', '#484848',
    ];

    const renderInnerLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, user_role,}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) - 15;
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${user_role}：${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    const renderOuterLabel = entry => {
    if (entry.city_total_student_cnt > 10000) {
        return entry.city + "：" + (entry.city_total_student_cnt * 100 / regUserCategory.reduce((total, obj) => total + obj.count, 0)).toFixed(2) + "%";
    }
        else{ return; }  
    };

    // const [isLoading, setLoading] = useState(true);
    const [data , setData] = useState([]);

    useEffect(
        async (JSONPath) => {
            await fetch(JSONPath).then(
                response => { if(response.ok) return response.json(); }).then(
                    json => setData(json)).catch(
                        err => console.err(err))
        }
    , []);

    if (data) {
        return <div></div>
    }

}

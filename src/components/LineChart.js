import React from "react";
import { Line } from "react-chartjs-2";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

function LineChart(){

const data={
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[
{
label:"Sales Trend",
data:[5000,7000,6500,9000,8500,10000],
borderColor:"blue",
fill:false
}
]
};

return(
<div style={{width:"600px",margin:"auto"}}>
<h2>Sales Trend</h2>
<Line data={data}/>
</div>
);

}

export default LineChart;
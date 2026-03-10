import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {

const data = {
labels:["Electronics","Clothing","Furniture"],
datasets:[
{
label:"Product Sales",
data:[300,200,150],
backgroundColor:["red","blue","green"]
}
]
};

return(
<div style={{width:"400px",margin:"auto"}}>
<h2>Product Category Sales</h2>
<Pie data={data}/>
</div>
);

}

export default PieChart;

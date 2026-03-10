import React from "react";
import SalesChart from "./components/saleschart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div style={{padding:"20px", fontFamily:"Arial"}}>

      <h1 style={{textAlign:"center"}}>Sales Analytics Dashboard</h1>

      {/* Statistics Cards */}

      <div style={{
        display:"flex",
        justifyContent:"space-around",
        marginBottom:"30px"
      }}>

        <div style={{
          background:"#4CAF50",
          color:"white",
          padding:"20px",
          borderRadius:"10px",
          width:"200px",
          textAlign:"center"
        }}>
          <h3>Total Sales</h3>
          <h2>$45,000</h2>
        </div>

        <div style={{
          background:"#2196F3",
          color:"white",
          padding:"20px",
          borderRadius:"10px",
          width:"200px",
          textAlign:"center"
        }}>
          <h3>Total Orders</h3>
          <h2>1,250</h2>
        </div>

        <div style={{
          background:"#FF9800",
          color:"white",
          padding:"20px",
          borderRadius:"10px",
          width:"200px",
          textAlign:"center"
        }}>
          <h3>Revenue</h3>
          <h2>$32,000</h2>
        </div>

      </div>

      {/* Charts */}

      <SalesChart/>
      <PieChart/>
      <LineChart/>

    </div>
  );
}

export default App;
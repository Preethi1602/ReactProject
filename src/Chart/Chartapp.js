import React, { useState } from "react";
import Header from "../Header";
import Chart from "react-apexcharts";
const ChartApp=()=>{

    const [options,setoptions]=useState({
        chart: {
            type: 'bar',
            height: 350,
            stacked:true
          },
          plotOptions: {
            bar: {
                borderRadius:10,
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            // enabled: false.
            formatter:(val)=>{
                return `$${val}`
            },
            style:{
                colors:['pink','white','blue'],
            }
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            tickPlacement:"on",
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            title: {
                text: 'Months'
              },
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            },
            labels:{
                formatter:(val)=>{
                    return `$${val}`
                },
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        },
    )
    const [series,setseries]=useState([
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            color:"#0d25d6"
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            color:"#f0d"
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            color:"#ff0"
          }]
    )
    return(
        <div className="ChartApp">
            <Header/>
            <Chart style={{ marginLeft: "280px" ,marginTop:"90px"}} options={options} series={series} type="bar"width={1000} height={350} />
        </div>
    )
}

export default ChartApp;
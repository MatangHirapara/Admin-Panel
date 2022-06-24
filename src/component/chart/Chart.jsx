import React from 'react'
import "./chart.css"
import { AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area } from "recharts"

const Chart = ({title, yLine, dataName,userData,dataUp, dataDown}) => {
  
  return (
    <>
      <div className='chart'>
        <h3 className='chartTitle' >{title}</h3>
          <AreaChart width={1550} height={320} fontSize={13} color={255} data={userData} margin={{ top: 30, right: 30, left: 0, bottom: 0 }} >
            <defs >
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#cf231d" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#cf231d" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis stroke="#ffffff" dataKey={dataName} />
            <YAxis stroke="#ffffff" dataKey={yLine} />
            <CartesianGrid strokeDasharray="3 3" stroke="#6b6d70"/>
            <Tooltip />
            <Area type="monotone" dataKey={dataDown} stroke="#cf231d" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey={dataUp} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
      </div>
    </>
  )
}

export default Chart;
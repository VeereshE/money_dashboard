import React from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts"

import './index.css'


export default function TopthreeTransaction(props) {

  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

     
  return (
  
    <div className='last-transcation'>
             <h1 className='last_heading'>Debit & Credit Overview</h1>
              <div className='last-transcation-details'>
          <ResponsiveContainer>
              <BarChart
               
                margin={{
                  top: 5,
                }}
              >
              <XAxis
                dataKey="group_name"
                tick={{
                  stroke: "gray",
                  strokeWidth: 1,
                }}
              />
              <YAxis
                tickFormatter={DataFormatter}
                tick={{
                  stroke: "gray",
                  strokeWidth: 0,
              }}
              />
              <Legend
                wrapperStyle={{
                  padding: 30,
                }}
              />
              <Bar dataKey="sum" name="Credit" fill="#1f77b4" barSize="20%" />
              <Bar dataKey="sum" name="Debit" fill="#fd7f0e" barSize="20%" />
            </BarChart>
        </ResponsiveContainer>
      </div>
  </div>
  )
}

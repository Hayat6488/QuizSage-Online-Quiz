import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const apiData = useLoaderData();
    const data = apiData.data;
    console.log(data);
    return (
        <div className='flex justify-center items-center mt-20 flex-col'>
            <ResponsiveContainer width="95%" height={400}>
            <LineChart width={500} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="total" stroke="#FB923C" />
            <XAxis dataKey="name" stroke='#FACC15' padding={{ left: 30, right: 30 }} />
          <YAxis stroke='#FACC15' />
          <Legend></Legend>
          <Tooltip></Tooltip>
            </LineChart>
            </ResponsiveContainer>
            <p className='break-normal mt-8 text-2xl font-semibold text-orange-400'>Fig: Line Chart Showing Topic and Number of Questions</p>
        </div>
    );
};

export default Statistics;
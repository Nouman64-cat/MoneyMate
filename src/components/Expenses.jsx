import React from 'react'


import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { category: 'Category 1', value: 500 },
  { category: 'Category 2', value: 300 },
  { category: 'Category 3', value: 700 },
  { category: 'Category 4', value: 200 },
  // Add more data entries for each expense category
];

const totalExpense = data.reduce((sum, entry) => sum + entry.value, 0);

const Expenses = () => {
  return (
    <div>
      <h1 className='text-3xl text-[#FBF2E4] pt-10 pb-10 '>Your<span className='font-bold'> Trusted </span>Financial Companion</h1>
      <div className=' mt-3 rounded-lg bg-[#FBF2E4] w-[35rem] h-[23.7rem] flex flex-col p-5'>
        <h1 className='text-[#28696A] text-xl'>Expenses</h1>
        <ResponsiveContainer width="100%" height={330}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#28696A">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`rgb(75, ${100 + index * 30}, 192)`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
      </div>
       
    </div>
  )
}

export default Expenses
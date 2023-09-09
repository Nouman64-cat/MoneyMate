import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const BudgetDoughnutChart = ({ income, remainingAmount, spentAmount }) => {
  // Calculate the remaining percentage
  const remainingPercentage = Math.round((remainingAmount / income) * 100);

  const data = [
    { name: 'Remaining', value: remainingAmount },
    { name: 'Spent', value: spentAmount },
  ];

  // Define colors for the segments
  const colors = ['#28696A', '#FFCE56'];

  return (
    <div className=' flex flex-col items-center justify-center bg-[#FBF2E4] rounded-lg shadow-2xl w-[25rem]'>
      <h1 className="text-xl pt-5 text-[#28696A]">Remaining Amount</h1>
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={70} // Adjust the inner radius for a Doughnut Chart effect
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={0}
        startAngle={90}
        endAngle={450}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={35} fontStyle={'Bold'} fill="#28696A"
      fontFamily='ABeeZee'>
        {remainingPercentage}%
      </text>
    </PieChart>
    <div className='flex justify-around w-full mb-2'>
      {/* <h1>Income: {income} </h1> */}
      <div className='flex items-center gap-2'>
        <div className='bg-[#28696A] h-3 w-3 '/>
        <h1>Remaining: {remainingAmount} </h1>
      </div>
      
      <div className='flex items-center gap-2'>
        <div className='bg-[#FFCE56] h-3 w-3 '/>
        <h1>Spent: {spentAmount} </h1>
      </div>
    </div>
    </div>
  );
};

export default BudgetDoughnutChart;

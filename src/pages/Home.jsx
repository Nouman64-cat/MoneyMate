import React from 'react'
import { BudgetDoughnutChart, Navbar, Expenses } from '../components'
import './style.css'

const Home = () => {
  const income = 5000;
  const spentAmount = 2900;
  const remainingAmount = income - spentAmount;
  
  return (
    <div className=' bg-[#F3E8D0] w-full h-[100vh] '>
      <Navbar />
      
      <div className='bg-[#28696A] flex ml-5 mr-5 main-container pb-9'>
        <div className="flex flex-col absolute pl-10 pt-15">
        <Expenses />
      </div>
      <div className='relative ml-[55rem] mt-[8rem] flex justify-end items-end align-bottom '>
      <BudgetDoughnutChart income={income} remainingAmount={remainingAmount} spentAmount={spentAmount} /></div>
    </div>
    </div>
  )
}

export default Home
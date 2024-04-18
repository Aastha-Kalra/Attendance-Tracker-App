import React from 'react'

const Button = ({calculatePercentage}) => {
  return (
    <button className='px-14 py-4 bg-blue-500 text-white rounded-lg cursor-pointer hover:scale-90 shadow-md shadow-orange-500 font-bold  transition-all duration-500 delay-300' onClick={calculatePercentage}>Calculate Attendence</button>
  )
}

export default Button
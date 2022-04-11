import React from 'react'

const Checkbox = (props) => {
  return (
    <>
        <div className=" flex items-center">
            <input type="checkbox" name="" id="" className=' w-5 h-5 rounded mr-4 border outline-none bg-gray-200 border-gray-300'/>
            <label htmlFor="" className=' text-xl text-gray-400 '>{props.label}</label>
        </div>
    </>
  )
}

export default Checkbox
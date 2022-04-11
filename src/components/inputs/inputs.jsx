import React from 'react'

const Inputs = (props) => {
  return (
    <>
        <div className="flex flex-col w-full">
            <label htmlFor="" className=' text-sm text-gray-400'>{props.label}</label>
            <input type={props.type}  className=' border-0 border-b-3 py-2 outline-none focus:border-b-blue-800 placeholder:text-lg placeholder:text-gray-300' placeholder={props.placeholder}/>
        </div>
    </>
  )
}

export default Inputs
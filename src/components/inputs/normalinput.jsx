import React from 'react'

const Normalinput = (props) => {
  return (
    <>
        <div className="flex flex-col w-full mb-6">
            <label htmlFor="" className=' mb-4 text-gray-700 font-medium text-sm'>{props.label}</label>
            <input type={props.type}  className='w-full h-11 border outline-none rounded text-gray-500 pl-3' placeholder={props.placeholder}/>
        </div>
    </>
  )
}

export default Normalinput
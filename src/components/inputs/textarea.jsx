import React from 'react'

const Textarea = (props) => {
  return (
    <div className="flex flex-col w-full">
            <label htmlFor="" className=' mb-4 text-gray-700 font-medium text-sm'>{props.label}</label>
            <textarea  className='w-full border outline-none rounded text-gray-500 pl-3' rows={props.row} placeholder={props.placeholder}>

            </textarea>
    </div>
  )
}

export default Textarea
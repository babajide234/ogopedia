import React from 'react'

const Select = (props) => {
  return (
    <>
        <div className=" flex flex-col mb-6">
            <label htmlFor="" className=" mb-4 text-gray-700 font-medium text-sm">{props.label}</label>
            <select name="" id="" className=' w-full h-11 border outline-none rounded text-gray-500 pl-3'>
                <option default selected >Choose</option>
                {
                    props.options.map((opt,i)=>{
                        return(
                            <>
                                <option key={i} value={opt.value}>{opt.text}</option>
                            </>
                        )
                    })

                }
            </select>
        </div>
    </>
  )
}

export default Select
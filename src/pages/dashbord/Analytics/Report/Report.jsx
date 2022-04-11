import React from 'react'

const Report = () => {
    const report = [
        {
            title:'February Report',
            date:'4th , October 2021  11:20am',
            new:true
        },
        {
            title:'February Report',
            date:'4th , October 2021  11:20am',
            new:false
        },
        {
            title:'February Report',
            date:'4th , October 2021  11:20am',
            new:false
        },
        {
            title:'February Report',
            date:'4th , October 2021  11:20am',
            new:false
        },
        {
            title:'February Report',
            date:'4th , October 2021  11:20am',
            new:false
        },
        {
            title:'February Report',
            date:'4th , October 2021  11:20am',
            new:false
        },
    ]
  return (
    <>
        <div className=" mb-10">
            <h2 className=" text-4xl font-bold" style={{color:'#0A043C'}}>View reports</h2>
        </div>
        <div className="border rounded-md">
            
                {
                    report.map((item,i)=>{
                        return(
                            <>
                                <div className=" group hover:bg-gray-50 hover:cursor-pointer flex  items-center py-3 w-full border-b p-4 last:border-b-0" key={i}>
                                    <div className=" w-1/12 flex items-center">
                                        <input type="checkbox" className=' w-5 h-5 border border-gray-200' name=""  id="" />
                                    </div>
                                    <div className=" w-1/4 ">
                                        <h2 className={item.new ? "font-medium capitalize text-blue-900":" font-normal text-gray-800 capitalize "}>{item.title}{item.new ? <span className=" bg-green-200 py-0.5 text-green-500 text-xs px-2 ml-2 rounded-xl">NEW</span>:''}</h2>
                                    </div>
                                    <div className=" w-2/5">
                                        <h2 className=" text-gray-500">{item.date}</h2>
                                    </div>
                                    <div className=" w-2/12">
                                        <button className=" w-28 py-3 bg-cyan-400 rounded font-medium text-white">View</button>
                                    </div>
                                    <div className="w-1/12 float-right">
                                        <button className=" hover:bg-slate-200 p-4 rounded-lg">
                                            <img src="/assets/message.png" className=' w-3' alt="" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
        </div>
    </>
  )
}

export default Report
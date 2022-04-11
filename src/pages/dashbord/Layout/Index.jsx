import React from 'react'
import Sidebar from '../../../components/sidebar'
import { Route, Routes} from "react-router-dom";
import Bills from '../Purchase/Bills';
import Home from './../Home/Home';
import Report from '../Analytics/Report/Report';
import Error from './../Err/Error';

const Layout = () => {
  return (
    <>
      <div className=" bg-gray-100 w-screen flex overflow-y-hidden">
          <Sidebar/>
          <div className="flex flex-col py-5" style={{width:'77%'}}>
            <div className="py-6 flex items-center justify-end pr-16">
              <div className=" mr-5">
                <button className=" rounded-full border h-10 w-10 flex justify-center items-center hover:bg-white">
                  <img src="/assets/group 67.png" alt="" className="" />
                </button>
              </div>
              <div className="flex items-center justify-between w-36">
                <span className=" bg-slate-800 h-10 w-10 rounded-full block"></span>
                <h3 className=" text-sm text-gray-800 font-medium">Ogoluwa</h3>
                <img src="/assets/caretdown.png" alt="" className="" />
              </div>
            </div>
            <div className=" w-full h-full bg-white rounded-tl-3xl px-14 py-16 ">
              <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="bills" element={<Bills/>}/>
                    <Route path="report" element={<Report/>}/>
                    <Route path="*" element={<Error/>}/>
              </Routes>
              {/* <Outlet/> */}
            </div>
          </div>
      </div>
    </>
  )
}

export default Layout
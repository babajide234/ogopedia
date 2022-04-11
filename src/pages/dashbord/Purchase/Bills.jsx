import React from 'react'
import Normalinput from '../../../components/inputs/normalinput';
import Textarea from '../../../components/inputs/textarea';
import Select from './../../../components/inputs/select';

const Bills = () => {
  const options = [
    {
      text:'option 1',
      value:'val'
    },
    {
      text:'option 1',
      value:'val'
    },
    {
      text:'option 1',
      value:'val'
    }
  ]
  return (
    <>
      <div className=" mb-10">
        <h2 className=" text-4xl font-bold" style={{color:'#0A043C'}}>Add bill</h2>
      </div>
      <div className="grid-cols-4 grid mb-10">
        <div className=" w-52">
          <Select
            label={`Vendor`}
            options={options}
          />
        </div>
        <div className=" w-52">
          <Normalinput
            label={`Date`}
            type={`date`}
            options={options}
          />
        </div>
        <div className=" w-52">
          <Normalinput
              label={`Bill #`}
              type={`text`}
              options={options}
            />
        </div>
        <div className=" w-52">
        </div>
        <div className=" w-52">
          <Select
            label={`Currency`}
            options={options}
          />
          <Select
            label={`Currency`}
            options={options}
          />
        </div>
        <div className=" w-52">
          <Normalinput
            label={`Due Date`}
            type={`date`}
            options={options}
          />
          <Normalinput
            label={`P.O. / S.O`}
            type={`date`}
            options={options}
          />
        </div>
        <div className=" w-52">
          <Textarea
              label={`Notes`}
              type={`textarea`}
              row={`6`}
              options={options}
            />
        </div>
        <div className=" w-52">
        </div>
      </div>
      <div className="border rounded-md p-4">
          <table className=" w-full table-auto">
            <thead className=' mb-2'>
              <tr className=" h-12 border-b-4 border-gray-300 mb-2">
                <th className=" text-sm">Item</th>
                <th className=" text-sm">Expense Category</th>
                <th className=" text-sm">Description</th>
                <th className=" text-sm">Qty</th>
                <th className=" text-sm">Price</th>
                <th className=" text-sm">Tax</th>
                <th className=" text-sm">Amount</th>
              </tr>
            </thead>
            <tbody className="mb-3">
              <tr className="">
                <td className=" py-4">
                  <div className="w-full flex justify-center">
                    <select name="" className='w-40 h-11 border outline-none rounded text-gray-500 pl-3' id="">
                      <option default selected >Choose</option>
                    </select>
                  </div>
                </td>
                <td className=" py-4">
                  <div className="w-full flex justify-center">
                    <select name="" className='w-40 h-11 border outline-none rounded text-gray-500 pl-3' id="">
                      <option default selected >Choose</option>
                    </select>
                  </div>
                </td>
                <td className=" py-4">
                  <div className="w-full flex justify-center">
                    <input type="text" className='w-40 h-11 border outline-none rounded text-gray-500 pl-3' />
                  </div>
                </td>
                <td className=" py-4">
                <div className="w-full flex justify-center">

                  <input type="text" className=' w-11 h-11 border outline-none rounded text-gray-500 pl-3' />
                </div>
                </td>
                <td className=" py-4">
                  <div className="w-full flex justify-center">
                    <input type="text" className=' w-16 h-11 border outline-none rounded text-gray-500 pl-3' />
                  </div>
                </td>
                <td className=" py-4">
                  <div className="w-full flex justify-center">
                    <input type="text" className='w-16 h-11 border outline-none rounded text-gray-500 pl-3' />
                    <button className=' ml-3 p-2 hover:bg-slate-200 rounded'><img src="/assets/edit.png" alt="" className=" w-6 h-6" /></button>
                  </div>
                </td>
                <td className=" py-4">
                  <div className="w-full flex justify-center items-center">
                    <h3 className=" ml-10">N0.00</h3>

                    <button className=' ml-3 p-2 hover:bg-slate-200 rounded'><img src="/assets/trash.png" alt="" className=" w-6 h-6" /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col w-full my-10 items-end">
            <div className="flex flex-col w-52 ">
              <div className="grid grid-cols-2 ">
                <span className=" text-base font-medium text-gray-800">Subtotal:</span>
                <span className=" text-base font-medium text-gray-800"> N0.00</span>
              </div>
              <div className="grid grid-cols-2 ">
                <span className=" text-base font-medium text-gray-800">Total (NGN):</span>
                <span className=" text-base font-medium text-gray-800"> N0.00</span>
              </div>
              
            </div>
            
          </div>
      </div>
      <div className="flex w-full justify-end mt-5">
        <div className="">
          <button className=" transition-all border-2 rounded-md py-3 font-medium mr-4 w-24 hover:bg-blue-400 hover:text-white hover:border-blue-400">Cancel</button>
          <button className=" transition-all bg-blue-400 text-white font-medium rounded-md px-4 py-3 w-24 border-2 border-blue-400 hover:bg-gray-100 hover:text-gray-800 hover:border-blue-400">Save</button>
        </div>
      </div>
    </>
  )
}

export default Bills
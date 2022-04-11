import React from 'react'
import Inputs from '../../components/inputs/inputs'
import Checkbox from './../../components/inputs/checkbox';
import Bigbtn from './../../components/buttons/bigbtn';
const Signup = () => {
    const style={
        background : 'url(./assets/signupbg.png)',
        backgroundSize: 'cover',
        backgrounPosition:'center',
    }
  return (
      <div className=" flex w-screen overflow-hidden" >
          <div className="h-screen w-1/2 flex justify-center items-end " style={style}>
              <p className="text-4xl text-white mb-58" style={{width:'449px'}}>
                Building exceptional services with Back Office 
                Support and Business Perfomance
              </p>
          </div>
          <div className="h-screen w-1/2 flex flex-col py-4 px-16 overflow-y-scroll">
              <div className=" mb-8">
                    <h2 className=" text-3xl text-blue-900 font-bold">Create Account</h2>
                    <p className=" text-xl text-gray-400 ">Build an exceptional business</p>
              </div>
              <div className=" w-full">
                    <div className="flex justify-between mb-5">
                        <div className=" w-5/12">
                            <Inputs
                                label={`First Name`}
                                placeholder={`Enter your first name`}
                                type={`text`}
                            />
                        </div>
                        <div className=" w-5/12">
                            <Inputs
                                label={`Last Name`}
                                placeholder={`Enter your last name`}
                                type={`text`}
                            />
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className="w-full">
                            <Inputs
                                label={`Phone Number`}
                                placeholder={`Enter your Phone Number`}
                                type={`tel`}
                            />
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className="w-full">
                            <Inputs
                                label={`Email Address`}
                                placeholder={`Enter your email address`}
                                type={`email`}
                            />
                        </div>
                    </div>
                    <div className="flex mb-7">
                        <div className="w-full">
                            <Inputs
                                label={`Password`}
                                placeholder={`Enter your Password`}
                                type={`password`}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mb-5">
                        <div className="">
                            <Checkbox
                                label={`Remember me`}
                            />
                        </div>
                        <div className="">
                            <a href="/" className=" capitalize text-cyan-500 font-medium hover:text-cyan-600">forgot password?</a>
                        </div>
                    </div>
                    <div className="mb-5">
                        <Bigbtn
                            text={`Sign Up`}
                        />
                    </div>
                    <div className="flex justify-center">
                        <p className=" text-lg text-gray-400 ">Got an Account? <a href="/" className=" text-cyan-500 text-lg ml-2 hover:text-cyan-600"> Sign In</a></p>
                    </div>
              </div>
          </div>
      </div>
  )
}

export default Signup
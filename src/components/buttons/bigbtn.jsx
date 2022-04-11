import React from 'react'
import { Link } from 'react-router-dom';

const Bigbtn = (props) => {
  return (
      <Link to='/dashboard' className=" flex justify-center text-2xl text-white bg-cyan-500 w-full p-2 py-3 rounded drop-shadow-lg hover:drop-shadow-xl hover:bg-cyan-600">{props.text}</Link>
  )
}

export default Bigbtn
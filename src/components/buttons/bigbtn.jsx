import React from 'react'

const Bigbtn = (props) => {
  return (
      <button className=" text-2xl text-white bg-cyan-500 w-full p-2 py-3 rounded drop-shadow-lg hover:drop-shadow-xl hover:bg-cyan-600">{props.text}</button>
  )
}

export default Bigbtn
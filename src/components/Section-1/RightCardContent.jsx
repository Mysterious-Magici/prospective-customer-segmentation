import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
      <>
     <div className="absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between">
      <h2 className="h-10 w-10  ml-1 rounded-full text-2xl font-bold bg-white flex items-center justify-center">{props.number}</h2>
       <div >
        <p className="text-lg leading-normal text-white mb-10">{props.intro}</p>
        <div className="flex justify-center items-center gap-4 mt-5">
            <button className="bg-blue-700 text-white font-medium px-8 py-2 rounded-full text-lg
            ">{props.tag}</button>
            <button className="bg-blue-700 text-white font-medium px-3 py-2 rounded-full text-lg
            "> <ArrowRight /></button>
        </div>
       </div>
      </div>
      </>
  )
}

export default RightCardContent
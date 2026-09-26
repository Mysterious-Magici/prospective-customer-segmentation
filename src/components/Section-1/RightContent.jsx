import React from 'react'
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <>
    <div id='right' className="h-full overflow-x-auto rounded-4xl p-6 w-2/3 mr-10 flex flex-nowrap gap-4 justify-center items-center">

      {props.users.map((user, index) => (
        <RightCard key={index} img={user.img} tag={user.tag} intro={user.intro} number={user.num}/>
      ))}

    </div>
    </>
  )
}

export default RightContent
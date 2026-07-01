import React from 'react'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
     <div className='h-full w-80 p-5  relative'>
      <img className='h-full w-full object-cover rounded-3xl ' src={props.img}  alt="" />
      <RightCardContent id={props.id} tag={props.tag}/>
     </div>
    
  )
}

export default RightCard;

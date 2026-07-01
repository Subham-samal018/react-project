import React from 'react'
import RightCard from './RightCard'
const Rightcontent = (props) => {
  console.log(props.users)
  return (
    <div className='h-full w-2/3 flex rounded-4xl overflow-x-auto flex-nowrap '>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default Rightcontent

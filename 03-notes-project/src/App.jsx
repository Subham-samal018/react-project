import React, { useState } from 'react'

const App = () => {
  const [title,setTitle]=useState('')
  const [details , setDetails]=useState('')
  const [task,setTask]=useState([])

  const subHandler = (e) => {
    e.preventDefault()

    const copytask=[...task]
    copytask.push({title,details})
    setTask(copytask)

    setTitle('')
    setDetails('')
  }
  const deletenote=(idx)=>{
    const copytask=[...task]
    copytask.splice(idx,1)
    setTask(copytask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={subHandler} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-4xl  font-bold'>Add Notes</h1>

        <input type="text"
          placeholder='Enter your name'
          className='border-2 font-medium px-5 py-2 w-full outline-none rounded'
          value={title}
          onChange={(e)=>{
               setTitle(e.target.value)
          }}
        />
        <textarea type="text"
          placeholder='Write Notes'
          className='w-full border-2 font-medium py-2 px-5 mt-5 outline-none rounded'
            value={details}
          onChange={(e)=>{
               setDetails(e.target.value)
          }}
       ></textarea>
        <button className='w-full flex-row border-2 font-medium py-2 px-5 mt-5 outline-none rounded'
        >Add Note</button>
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto  '>
          {task.map(function(elem,idx){
            return <div key={idx} className=' flex justify-between flex-col items-start h-52 w-40 p-4  rounded-xl text-black bg-cover bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)]'>
            <div className='p-3'>
              <h3 className='leading-tight text-lg  font-bold'>{elem.title}</h3>
              <p className='mt-3 text-xs leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deletenote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 ml-1 text-xs font-bold text-white'>Delete</button>
            </div>
           })}
           
        </div>
      </div>
    </div>
  )
}

export default App

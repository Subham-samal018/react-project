import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between '>
            <h2 className='bg-white text-lg font-semibold rounded-full h-9 w-9 flex justify-center text-center pt-1'>1</h2>
            <div>
                <p className='text-lg leading-normal mb-10 text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod modi autem provident quam deserunt cumque.</p>

                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full mb-5'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full mb-5'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
            )
}

 export default RightCardContent;

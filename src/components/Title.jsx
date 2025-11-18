import React from 'react'
// The Title component displays a small section heading
// with two parts of text (text1 and text2) side by side.
// Example: <Title text1="Our" text2="Products" />
// It also includes a horizontal line for visual styling.

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3'>
        <p className='text-gray-500'> {text1} <span className='font-medium text-gray-700'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title

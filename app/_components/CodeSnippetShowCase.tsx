import React from 'react'
import ScrollBar from './ScrollBar'

const CodeSnippetShowCase = () => {
  return (
    <div className='flex flex-col w-1/2  h-full '>
        <div className='w-full h-[calc(2rem+2px)] border-b  border-b-borderColor '></div>
        <div className="flex flex-row h-full w-full ">
        <ScrollBar/>
      </div>
    </div>
  )
}

export default CodeSnippetShowCase
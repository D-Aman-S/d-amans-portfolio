import React from 'react'
import Image from 'next/image'
import AboutMeTab from './AboutMeTab'
import ScrollBar from './ScrollBar'

const PersonalInfo = () => {
  return (
    <div className="flex flex-col w-1/2  h-full border border-transparent border-r-borderColor">
     <AboutMeTab selectedPage={"personal-info"} />
     <div className="flex flex-row h-full w-full ">
        <ScrollBar/>
      </div>
    </div>
  )
}

export default PersonalInfo
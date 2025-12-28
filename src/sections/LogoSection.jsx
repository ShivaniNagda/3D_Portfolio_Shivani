import React from 'react'
import { logoIconsList } from '../constants'

const LogoSection = () => {

    const LogoICon = ({icon} ) =>{
        return(
            <div className='flex-none flex-center marquee-item  border-card bg-white/20 rounded-lg p-2 md:w-48 w-32 h-28 md:h-48 '>
                <img src={icon.imgPath} alt={icon.name} className='w-38 h-26 object-contains  ' />
            </div>
        )
    }
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge' />
        <div className='gradient-edge' />

        <div className='marquee h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                {logoIconsList.map((icon)=>(
                    <LogoICon key={icon.name} icon={icon} />
                ))}
            </div>
        </div>

    </div>
  )
}

export default LogoSection

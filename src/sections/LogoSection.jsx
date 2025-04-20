import React from 'react'
import { logoIconsList } from '../constants'

const LogoSection = () => {

    const LogoICon = ({icon} ) =>{
        return(
            <div className='flex-none flex-center marquee-item  '>
                <img src={icon.imgPath} alt={icon.name} className='w-38 h-20 object-contains ' />
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
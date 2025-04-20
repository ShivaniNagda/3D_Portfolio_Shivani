import React from 'react'
import { socialImgs } from '../constants'
import { IconButton } from '@material-tailwind/react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center md:items-start'>
                <a href='https://github.com/ShivaniNagda'>Visit my github</a>
            </div>
            <div className='socials'>
                {socialImgs.map((img)=>(
                    <a className='icon' target="_blank" href={img.url} key={img.url}>
                        <img src={img.imgPath} className='size-6.5 border rounded-full' />
                    </a>
                //     <a className='icon' target="_blank" href={img.url} key={img.url}>
                //     <IconButton size="sm">
                //     <i className={img.classname} />
                //   </IconButton>
                //   </a> 
                ))}
            </div>

            <div className='flex flex-col justify-center '>
                <p className='text-center md:text-end'>
                    &copy; {new Date().getFullYear()} Shivani Nagda . All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
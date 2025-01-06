import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='img-dev'>
            <Image src="/banner-bg.png" alt="img" width={200} height={200} className="img"/>
        </div>
        <div className='info-div'>
        <h1 className='name'>Hello <br /> I am <br /> Asiya Irfan</h1>
        <div className='btn2'>
            <button className='bt1'><Link href="/about" className='bt-li'>About Me</Link></button>
            <button className='bt1'><Link href="/contact" className='bt-li'>Contact Me</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Hero
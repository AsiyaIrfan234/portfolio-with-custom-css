import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='nav'>
        <div className='logo'>
        <h2 className='logo'>Asiya</h2>
        </div>
        <div className='navigate'>
            <ul>
                <li><Link href="/" className='link'>Home</Link></li>
                <li><Link href="/about" className='link'>About</Link></li>
                <li><Link href="/contact" className='link'>Contact</Link></li>

            </ul>
        </div>
        <div className='btn'></div>
        <button className='bt'>Download CV</button>
    </header>
  )
}

export default Navbar;
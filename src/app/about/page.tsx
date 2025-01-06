import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div>
        
        <Image src="/banner-bg.png"alt="img" width={200} height={200} className="img1"/>
        <h2 className=''>About Me</h2>
        <p>Hello! I'm Asiya Irfan, an aspiring developer with a deep passion for coding and building impactful digital experiences. Currently, I'm enhancing my skills in TypeScript, Next.js, and Python, aiming to create dynamic, scalable web applications that push the boundaries of full-stack development. I am dedicated to learning and exploring new technologies to stay at the forefront of the ever-evolving tech landscape. My goal is to contribute to innovative projects and continuously grow as a versatile and proficient developer.</p>
        <div className='btn3'>
            <button className='bt2'><FaLinkedin className='icon'/></button>
            <button className='bt2'><FaGithub className='icon'/></button>
        </div>
        <Skills/>
    </div>
  )
}

export default About

export const Skills = () => {
  return(
    <div>
        <h1 className='heading'>My Skills</h1>
        <div>
            <h2 className='skill-h2'>HTML</h2>
            <div className='bar'></div>
        </div>
        <div>
            <h2 className='skill-h2'>CSS</h2>
            <div className='bar-1'></div>
        </div>
        <div>
            <h2 className='skill-h2'>JAVASCRIPT</h2>
            <div className='bar-2'></div>
        </div>
        <div>
            <h2 className='skill-h2'>TYPESCRIPT</h2>
            <div className='bar-3'></div>
        </div>
        <div>
            <h2 className='skill-h2'>Next.Js</h2>
            <div className='bar-4'></div>
        </div>
        <div>
            <h2 className='skill-h2'>React</h2>
            <div className='bar-5'></div>
        </div>
    </div>
  )
}
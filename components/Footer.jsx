import React from 'react'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> 2022 Rachit Gupta</p>
      <p className='icons'>
        <a href='https://www.linkedin.com/in/rachitgupta2001/'><AiFillLinkedin/></a>
        <a href='https://twitter.com/rachittwt'><AiOutlineTwitter/></a>
      </p>
    </div>
  )
}

export default Footer

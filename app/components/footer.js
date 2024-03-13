import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function footer() {
  return (
    <div className='flex justify-between'>
        <div className='flex flex-col'>
            <h1>ENGEC GROUP</h1>
            <div>
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedin />
            </div>
        </div>
        <div>
            <h1></h1>
        </div>
    </div>
  )
}

export default footer
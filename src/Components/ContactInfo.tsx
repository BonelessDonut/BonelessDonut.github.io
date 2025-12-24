import React from 'react'
import IconComponent from './IconComponent';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {AiFillMail} from 'react-icons/ai';

const ContactInfo = () => {
  return (
    <div id="contact" className="bg-gray-800 rounded-md border-gray-400 border-2 text-slate-100">
      <h2 className="text-3xl font-semibold border-b-2 border-double mb-2">Contact Info</h2>
        <ul className="bg-gray-700">
          <li className="flex flex-row justify-center items-center">
            <IconComponent icon={FaLinkedin}/>
            <a 
            className="links" 
            href="https://www.linkedin.com/in/eddie-suber-369370296/" 
            target='_blank'
            rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="flex flex-row justify-center items-center">
            <IconComponent icon={FaGithub}/>
            <a 
            className="links"
            href="https://github.com/BonelessDonut"
            target="_blank"
            rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="flex flex-row justify-center items-center">
            <IconComponent icon={AiFillMail}/>
            <a
            className="links"
            href="mailto:eddiesuber7@gmail.com?subject=Interest from your Portfolio Website">
              Email
            </a>
          </li>
        </ul>
    </div>
  )
}

export default ContactInfo;
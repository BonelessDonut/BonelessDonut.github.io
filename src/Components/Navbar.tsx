import React from 'react'
import { Link } from 'react-router-dom';

interface LinkObj {
  name: string,
  href: string
}

const Navbar = () => {
    const testArr: LinkObj[] = [
      {
        name: "Home",
        href: "/"
      },
      {
        name: "About Me",
        href: "/about-me"
      },
      {
        name: "Everroot Forest",
        href: "/everrootForest"
      }, 
      {
        name: "BrainStu Citation Generator",
        href: "/brainstu"
      }, 
      {
        name: "Riskless Investment Advisor",
        href: "/riskless"
      },
    ];
  return (
    <div className="w-25 h-screen text-amber-950">
        <h2 className="text-xl p-2">Quick Links</h2>
        <ul>
            {testArr.map((item)=> <li className="p-2 text-base border-gray-600 border-t-2 rounded-md hover:bg-slate-200 active:bg-slate-300">
                <Link to={item.href} className='cursor-pointer'>{item.name}</Link> 
            </li>)}
        </ul>
    </div>
  )
}

export default Navbar
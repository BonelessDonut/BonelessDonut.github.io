import React, {useState, useEffect, useMemo} from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

interface LinkObj {
  name: string,
  href: string
}

const Navbar = () => {
  const testArr: LinkObj[] = useMemo(() => [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About Me",
      href: "/about-me"
    },
    {
      name: "Riskless Investment Advisor",
      href: "/riskless"
    },
    {
      name: "BrainStu Citation Generator",
      href: "/brainstu"
    }, 
    {
      name: "Everroot Forest",
      href: "/everrootForest"
    }, 
  ], []);
  const [mobileShowing, setMobileShowing] = useState(false)
  const [mobileClass, setMobileClass] = useState(styles.mobileHide)
  const [currentPage, setCurrentPage] = useState('')
  function changeMobileShowing(){
    setMobileShowing(!mobileShowing)
  }
  useEffect(()=> { 
    let isMounted: boolean = true
    if (isMounted){
      if (mobileShowing){
        setMobileClass(styles.mobileShow)
      } else {
        setMobileClass(styles.mobileHide)
      }
    }
    return () => {
      isMounted = false
    }
  }, [mobileShowing])

  useEffect(()=> {
    let isMounted: boolean = true
    if (isMounted){
      const pathname = window.location.pathname
      for (let i: number = 0; i < testArr.length; i++){
        if (testArr[i].href === pathname){
          setCurrentPage(testArr[i].name);
          break;
        }
      }
    }
    return ()=> {isMounted = false}
  }, [testArr])

  return (<>
      <div className="flex flex-col sm:hidden w-screen align-middle text-amber-950 z-10 h-20 hover:cursor-pointer hover:bg-slate-200 active:bg-slate-300">
        <button className="min-h-[100%]" onClick={changeMobileShowing}>
          <h2 className="text-2xl "> Quick Links</h2>
        </button>
        <ul className={mobileClass}>
              {testArr.map((item)=> <li className={`flex justify-center items-center text-2xl h-20 bg-slate-100 border-gray-600 border-t-2 rounded-md hover:bg-slate-200 active:bg-slate-300 ${item.name === currentPage ? 'bg-slate-400' : ''}`}>
                  <Link to={item.href} onClick={()=> setCurrentPage(item.name)} className='cursor-pointer w-full'>
                    <button className={`w-full`}>
                      {item.name}
                    </button>
                  </Link> 
              </li>)}
          </ul>
      </div>
      <div className="w-25 h-screen text-amber-950 z-10 hidden sm:block">
          <h2 className="text-xl p-2">Quick Links</h2>
          <ul>
              {testArr.map((item)=> <li className={`text-base border-gray-600 border-t-2 rounded-md hover:bg-slate-200 active:bg-slate-300 ${item.name === currentPage ? 'bg-slate-400' : ''}`}>
                  <Link to={item.href} onClick={()=> setCurrentPage(item.name)} className='cursor-pointer w-full'>
                    <button className="w-full">
                      {item.name}
                    </button>
                  </Link> 
              </li>)}
          </ul>
      </div>
    </>
  )
}

export default Navbar
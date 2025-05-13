import React, { useState } from 'react'
import {FaBars, FaReact} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {HiX} from 'react-icons/hi'
import './style.scss';


const data=[
  {
    label: "Home",
    to: "/"
  },
  {
    label: "About",
    to: "/About"
  }, {
    label: "Contact",
    to: "/Contact"
  }, {
    label: "Portfolio",
    to: "/Portfolio"
  }, {
    label: "Resume",
    to: "/Resume"
  }, {
    label: "Skills",
    to: "/Skills"
  }

]
const Navbar = () => {
  const [toggleIcon,setToggleIcon]=useState(false)
  const handelToggleIcon=()=>{
    setToggleIcon(!toggleIcon)
    
    
  }
  return (
    <div>
       <nav className='navbar'>
        <div className='navbar_con'>
          <Link to={"/"}className='navbar_con_logo'>
          <FaReact size={30}/>
          </Link>

        </div>
        <ul className={`navbar_con_menu ${toggleIcon? 'active':''}`}>
          {
            data.map((item,key)=>(
              <li key={key} className='navbar_con_menu_item'>
                <Link className="navbar_con_menu_item_link" to={item.to}>
                {item.label}
                
                 </Link>
              </li>

            ))
          }
        </ul>
        <div className='nav_icon'onClick={handelToggleIcon}>
          {
            toggleIcon? <HiX size={30}/>:<FaBars size={30}/>
          }

        </div>

       </nav>
      
    </div>
  )
}

export default Navbar 


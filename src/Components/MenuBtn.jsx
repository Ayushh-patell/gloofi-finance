import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const MenuBtn = () => {
    const [isOpen, setisOpen] = useState(false)
    const [isActive, setisActive] = useState(false)
    const menuRef = useRef()

    const handleActive = () => {
        setisActive((prev) => !prev)
setTimeout(() => {
    if(isActive) {
        console.log(menuRef.current.style.height);
        menuRef.current.style.height = `200px`
        console.log(menuRef.current.style.height);
    }
    else {
        menuRef.current.style.height = `280px`
    }
}, 10);
    }
  return (
    <button onClick={() => {setisOpen((prev) => !prev)}} className=' lg:hidden block bg-[#d1fee60d] py-1 px-2 text-lg text-[#b1b1b1] rounded-md relative'>
      {!isOpen? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i>}
        <div ref={menuRef}
        style={
        isOpen
        ? { height: menuRef.current.scrollHeight }
        : { height: "0px" }
        }
        onClick={(e) => e.stopPropagation()}
         className={` absolute z-[60] top-[110%] -right-2 w-[90vw] bg-[#181b1a] rounded-lg ${isOpen?" py-2":"py-0"} text-sm transition-[height,padding] duration-300 overflow-hidden text-left px-4`}>
            <div onClick={handleActive} className=' py-2'>Resource <span className={`${isActive?" rotate-180":""}`}>▾</span></div>

            <p className={` py-2 px-3 hover:bg-[#d1fee60d] ${isActive?" block":" hidden"}`}>Documentation</p>
            <p className={` py-2 px-3 hover:bg-[#d1fee60d] ${isActive?" block":" hidden"}`}>Guide</p>

            <Link onClick={() => {setisOpen(false)}} to={'/gmi'}><p className=' py-2'>GMI</p></Link>
            {/* <p className=' py-2'>Borrow (Soon)</p>
            <p className=' py-2'>Gloofi Presale (Soon)</p> */}
            <div className=' flex gap-4 justify-start items-center flex-wrap text-white py-2 pb-4'>
      <div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
    <i className="fa-brands fa-x-twitter"></i>    
      </div>
      {/* <div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
<i className="fa-brands fa-discord"></i>
      </div> */}
<a href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer">
<div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
<i className="fa-solid fa-book"></i>
      </div>
</a>
<a href="http://t.me/gloofi" target="_blank" rel="noopener noreferrer">
<div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
<i class="fa-brands fa-telegram"></i>
      </div>
</a>
    </div>

        </div>
    </button>
  )
}

export default MenuBtn

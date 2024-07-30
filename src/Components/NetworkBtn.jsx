import React, { useRef, useState } from 'react'

const NetworkBtn = () => {
    const [isOpen, setisOpen] = useState(false)
    const networkMenu = useRef()

  return (
    <div onClick={() => {setisOpen((prev) => !prev)}} className=' cursor-pointer flex justify-center items-center gap-1 relative py-1 px-2 rounded-lg bg-[#d1fee60d]'>
<i className="fa-solid fa-triangle-exclamation"></i>
<p>▾</p>

<div ref={networkMenu}
style={
        isOpen
        ? { height: networkMenu.current.scrollHeight+25 }
        : { height: "0px" }
}
 className={` absolute top-full right-0 w-fit ${isOpen?" sm:py-4 py-2 ":" py-0"} sm:px-5 px-2 bg-black rounded-lg overflow-hidden transition-[height,padding] duration-300`}>
    <p className=' font-medium text-white py-2 pt-0 whitespace-nowrap'>Switch Network</p>
    <p className=' px-2 pr-4 py-2 hover:bg-[#d1fee60d] rounded-md flex justify-start items-center gap-2'>
        <img src="../gmi_wETH.svg" alt="ETH" className=' size-5 rounded-full object-contain object-center' />
        <p>Ethereum</p>
    </p>
 </div>
</div>
  )
}

export default NetworkBtn

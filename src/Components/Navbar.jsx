import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className=' flex justify-between items-center p-6 pt-10'>
<div className=' flex justify-start items-center gap-5'>
<Link to={"/"}><img src="../logo.svg" alt="logo" className=' h-6 mr-4' /></Link>
    <nav className=' flex justify-start items-center lg:gap-7'>
        <p className=' text-white/50 text-sm'>Docs</p>
        <Link to={'/gmi'}><p className=' text-white/50 text-sm'>GMI</p></Link>
        <p className=' text-white/50 text-sm'>Borrow(Soon)</p>
        <p className=' text-white/50 text-sm'>Gloofi Presale(Soon)</p>
    </nav>
</div>
<button className=' w-fit px-5 py-2 rounded-md bg-transparent border border-white/10 text-sm text-white'>Connect</button>
      
    </header>
  )
}

export default Navbar

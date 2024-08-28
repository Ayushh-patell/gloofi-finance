import { useWeb3Modal } from '@web3modal/wagmi/react';
import React from 'react'
import { Link } from 'react-router-dom'
import { useAccount, useDisconnect } from 'wagmi';
import NetworkBtn from './NetworkBtn';
import MenuBtn from './MenuBtn';

const Navbar = () => {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnecting, isConnected } = useAccount();
  
  return (
    <header className=' flex justify-between items-center p-6 pt-10'>
<div className=' flex justify-start items-center gap-5'>
<Link to={"/"}>
<img src="../nav logo.png" alt="logo" className={` h-8 mr-4 ${window.innerWidth<1024 && " hidden"}`} />
<img src="../new logo.png" alt="logo" className={` h-8 mr-4 ${window.innerWidth>1024 && " hidden"}`} />
</Link>
    <nav className=' lg:flex hidden justify-start items-center lg:gap-7'>
        <a href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer">
        <p className=' text-white/50 text-sm'>Docs</p>
        </a>
        <Link to={'/gmi'}><p className=' text-white/50 text-sm'>GMI</p></Link>
        {/* <p className=' text-white/50 text-sm'>Borrow(Soon)</p>
        <p className=' text-white/50 text-sm'>Gloofi Presale(Soon)</p> */}
    </nav>
</div>

<div className=' flex justify-center items-center gap-1'>
{isConnected && <NetworkBtn/>}
<button
  onClick={() => {
    isConnected ? disconnect() : open();
  }}
 className=' w-fit px-5 py-2 rounded-md bg-transparent border border-white/10 text-sm text-white'>
  {isConnecting
            ? "CONNECTING.."
            : !isConnected
              ? "CONNECT"
              : `${address.slice(0,3)}..${address.slice(40)}`}
 </button>
 <MenuBtn/>
</div> 
    </header>
  )
}

export default Navbar

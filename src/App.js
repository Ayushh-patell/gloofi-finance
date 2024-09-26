import { Outlet, useLocation } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';

function App() {
  const location = useLocation()
  return (
    <main className="App bg-[#0f0f0f] w-screen text-white">
    {location.pathname==="/" && 
    <img src="../Background.svg" alt="svg" className=' w-full h-dvh object-cover pointer-events-none absolute top-0 left-0 z-0' />
    }
    <div className=' max-w-[1320px] mx-auto xl:px-0 px-5 '>
      <Navbar/>
      </div>
    <div className=' max-w-[1320px] mx-auto xl:px-0 px-5 '>
    <Outlet/>
      </div>



<div className=' lg:flex hidden fixed z-50  top-[200px] right-0 flex-col justify-center items-center gap-4 p-2 py-4 rounded-l-lg text-white text-lg bg-[#222725]'>
{/* <i className="fa-brands fa-discord"></i> */}
<a href="https://x.com/Gloofifinance" target="_blank" rel="noopener noreferrer"  className=' flex justify-center items-center h-5'>
<i className="fa-brands fa-x-twitter"></i>
</a>
<a href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer"  className=' flex justify-center items-center h-5'>
<i className="fa-solid fa-book"></i>
</a>
<a href="http://t.me/gloofifinance" target="_blank" rel="noopener noreferrer"  className=' flex justify-center items-center h-5'>
<i class="fa-brands fa-telegram"></i>
</a>
</div>

<footer className=' bg-[#181b1a] py-12 mt-20'>
  <div className=' max-w-[1320px] xl:px-0 px-5 mx-auto flex lg:flex-row flex-col justify-between lg:items-start items-center'>
    <div className=' w-full flex justify-center items-center flex-col gap-5'>
      <img src="../nav logo.png" alt=" logo" className=' lg:h-20 sm:h-10 h-6 object-contain object-center mt-3' />

      <div>
      {/*  <h6 className=' text-lg text-white my-4 font-medium'>Communities</h6> */}
    <div className=' flex gap-4 justify-start items-center flex-wrap text-white'>
    <a title='Twitter' href="https://x.com/Gloofifinance" target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center h-16'>
      <div className=' sm:size-16 size-10 flex justify-center items-center bg-[#d1fee60d] rounded'>
    <i className=" sm:text-2xl text-xl fa-brands fa-x-twitter"></i>    
      </div>
    </a>

<a title='Docs' href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center h-16'>
<div className=' sm:size-16 size-10 flex justify-center items-center bg-[#d1fee60d] rounded'>
<i className=" sm:text-2xl text-xl fa-solid fa-book"></i>
      </div>
</a>
<a title='Telegram' href="http://t.me/gloofifinance" target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center h-16'>
<div className=' sm:size-16 size-10 flex justify-center items-center bg-[#d1fee60d] rounded'>
      <i class=" sm:text-2xl text-xl fa-brands fa-telegram"></i>
      </div>
</a>
    </div>
    </div>


    </div>
    {/* <div className=' lg:w-1/2 w-full grid lg::grid-cols-3 grid-cols-2 gap-5 text-left'>
      <div className=' space-y-3'>
      <h6 className=' text-base text-white my-4 font-medium'>Product</h6>
      <Link to={'/gmi'}>
      <p className=' text-sm text-[#b1b1b1]'>GMI</p>
      </Link>
      </div>
      <div className=' space-y-3'>
      <h6 className=' text-base text-white my-4 font-medium'>Resources</h6>
      <a href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer">
      <p className=' text-sm text-[#b1b1b1]'>Documentation</p>
      </a>
      <p className=' text-sm text-[#b1b1b1]'>Guide</p>
      </div>
      <div>
      <h6 className=' text-base text-white my-4 font-medium'>Communities</h6>
    <div className=' flex gap-4 justify-start items-center flex-wrap text-white'>
    <a href="https://x.com/Gloofifinance" target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center h-5'>
      <div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
    <i className="fa-brands fa-x-twitter"></i>    
      </div>
    </a>

<a href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center h-5'>
<div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
<i className="fa-solid fa-book"></i>
      </div>
</a>
<a href="http://t.me/gloofifinance" target="_blank" rel="noopener noreferrer" className=' flex justify-center items-center h-5'>
<div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
      <i class="fa-brands fa-telegram"></i>
      </div>
</a>
    </div>
      </div>
    </div> */}
  </div>
</footer>

    </main>
  );
}

export default App;

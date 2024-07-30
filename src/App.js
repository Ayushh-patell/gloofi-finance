import { Outlet, useLocation } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const location = useLocation()
  return (
    <main className="App bg-[#0f0f0f] w-screen text-white">
    {location.pathname==="/" && 
    <img src="../Background.svg" alt="svg" className=' w-full h-dvh object-cover pointer-events-none absolute top-0 left-0 z-0' />
    }
    <div className=' max-w-[1320px] mx-auto '>
      <Navbar/>
      </div>
    <div className=' max-w-[1320px] mx-auto '>
    <Outlet/>
      </div>



<div className=' fixed z-50  top-[200px] right-0 flex flex-col justify-center items-center gap-4 p-2 py-4 rounded-l-lg text-white text-lg bg-[#222725]'>
<i className="fa-brands fa-x-twitter"></i>
<i className="fa-brands fa-discord"></i>
<i className="fa-solid fa-book"></i>
<i className="fa-brands fa-medium"></i>
</div>

<footer className=' bg-[#181b1a] py-12 mt-20'>
  <div className=' max-w-[1320px] mx-auto flex lg:flex-row flex-col justify-between lg:items-start items-center'>
    <div className=' w-1/2 '>
      <img src="../logo.svg" alt=" logo" className=' h-8 object-contain object-center mt-3' />
    </div>
    <div className=' w-1/2 grid md:grid-cols-3 grid-cols-1 gap-5 text-left'>
      <div className=' space-y-3'>
      <h6 className=' text-base text-white my-4 font-medium'>Product</h6>
      <p className=' text-sm text-[#b1b1b1]'>Borrow (Soon)</p>
      <p className=' text-sm text-[#b1b1b1]'>GMI (Soon)</p>
      <p className=' text-sm text-[#b1b1b1]'>Gloofi PreSale (Soon)</p>
      </div>
      <div className=' space-y-3'>
      <h6 className=' text-base text-white my-4 font-medium'>Resources</h6>
      <p className=' text-sm text-[#b1b1b1]'>Documentation</p>
      <p className=' text-sm text-[#b1b1b1]'>Guide</p>
      </div>
      <div>
      <h6 className=' text-base text-white my-4 font-medium'>Communities</h6>
    <div className=' flex gap-4 justify-start items-center flex-wrap text-white'>
      <div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
    <i className="fa-brands fa-x-twitter"></i>    
      </div>
      <div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
<i className="fa-brands fa-discord"></i>
      </div>
      <div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
<i className="fa-solid fa-book"></i>
      </div>
      <div className=' size-6 flex justify-center items-center bg-[#d1fee60d] rounded'>
<i className="fa-brands fa-medium"></i>
      </div>
    </div>
      </div>
    </div>
  </div>
</footer>

    </main>
  );
}

export default App;

import React from 'react'
import FaqItem from './Faqitem'
import { FaqData } from '../FaqData'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
            <section className=' p-6 pb-0 flex justify-between items-center w-full pt-20'>
        <div className=' lg:w-1/2 w-full text-left'>
          <img src="../homePage.png" alt=" " className=' h-[80px] my-10 mt-0' />
          <h1 className=' text-4xl font-medium'>Enhance your capital efficiency.</h1>
          <p className=' text-left my-5'>Gloofi is a protocol that provides an efficiently balanced GM asset index token along with a sophisticated platform for strategic GM leverage through lending and borrowing.</p>
          <div className=' flex justify-start items-center my-10 gap-5'>
            <Link to={"/gmi"} ><button className=' bg-[#19fb80] hover:bg-[#36c174] transition-all duration-500 rounded-lg text-black font-medium px-5 py-3'>Get GMI</button></Link>
            <a href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer">
            <button className=' hover:border-[#19fb80] transition-all duration-500 border bg-transparent rounded-lg font-medium px-5 py-3 text-white'>Read Documentation</button>
            </a>
          </div>
        </div>
        <div className=' w-1/2 lg:block hidden relative'>
          <img src="../new info graphic edit.png" alt="img" className=' ml-auto w-[75%] h-full object-contain object-center relative z-0' />
        </div>
      </section>
      <div className=' bg-[#d1fee60d] border border-[#262d2a] rounded-lg p-6 pr-24 my-10 mt-0 flex lg:flex-row flex-col justify-between lg:items-center items-start gap-7'>
        <div className=' text-left text-4xl'>
          <p className=' text-[#19fb80]'>[Soon]</p>
          <p className=' text-2xl'>TVL</p>
        </div>
        <div className=' text-left text-4xl'>
          <p className=' text-[#19fb80]'>[Soon]</p>
          <p className=' text-2xl'>Total Borrowed</p>
        </div>
        <div className=' text-left text-4xl'>
          <p className=' text-[#19fb80]'>[Soon]</p>
          <p className=' text-2xl'>Total Lended</p>
        </div>
        <div className=' text-left text-4xl'>
          <p className=' text-[#19fb80]'>[Soon]</p>
          <p className=' text-2xl'>Total Users</p>
        </div>
      </div>
      <div className=' md:py-16 py-11 flex justify-center items-center'>
        <div className=''><img src="../Ethereum.png" alt="eth" className=' h-20' /></div>
      </div>

      <section className=' py-12'>
        <h2 className=' text-left text-4xl font-medium my-5'>Why Gloofi?</h2>
        <div className=' grid  lg:grid-cols-4 grid-cols-1 gap-5'>
          <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-5 text-left'>
            <img src="../Capitally_Efficient.svg" alt="efficient" className=' bg-[#d1fee60d] p-2 rounded-lg size-16' />
            <p className=' text-2xl font-medium'>Capitally Efficient</p>
            <p className=' text-white/60'>Rather than depending exclusively on GM tokens, strategically utilize the GMI index and explore borrowing against it to enhance your overall investment portfolio.</p>
          </div>
          <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-5 text-left'>
            <img src="../Low_Risk.svg" alt="risk" className=' bg-[#d1fee60d] p-2 rounded-lg size-16' />
            <p className=' text-2xl font-medium'>Low Risk</p>
            <p className=' text-white/60'>Our intelligent rebalancing algorithm automatically adjusts the weights of GM assets in the index to maximize returns and minimize risk, eliminating the need for you to constantly rebalance your portfolio yourself.</p>
          </div>
          <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-5 text-left'>
            <img src="../Secure.svg" alt="Secure" className=' bg-[#d1fee60d] p-2 rounded-lg size-16' />
            <p className=' text-2xl font-medium'>Secure</p>
            <p className=' text-white/60'>Highly skilled developers with smart contract auditing experience created Gloofi. Additionally, all our products and features have been audited by some of the leading firms in the industry.</p>
          </div>
          <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-5 text-left'>
            <img src="../Fun.svg" alt="Fun" className=' bg-[#d1fee60d] p-2 rounded-lg size-16' />
            <p className=' text-2xl font-medium'>Fun</p>
            <p className=' text-white/60'>The Gloofi community consists of amazing Arbitrum enthusiasts who are passionate about web3 and the future of finance.</p>
          </div>
        </div>
      </section>
 
      <section className=' lg:h-dvh w-full'>
        <h2 className=' text-3xl font-medium text-center my-2 mb-7'>GMI & Borrowing Synergies</h2>
        <div className=' w-full grid lg:grid-cols-2 grid-cols-1 gap-5 lg:h-[70%]'>
          <div className=' w-full rounded-lg bg-[#d1fee60d] p-5 text-left flex flex-col justify-between items-start'>
            <div className=' w-full h-3/5  rounded-lg mb-4'>
              <img src="../home_GMI new.png" alt="gmi" className=' w-full h-full object-cover object-center' />
            </div>
            <h6 className=' text-2xl text-white font-medium my-2'>GMI</h6>
            <p className=' text-[#b1b1b1]'>The GM Index token functions as a basket, providing a curated selection of GM assets. It undergoes optimal rebalancing via a proprietary algorithm to improve the risk/return ratio.</p>
          </div>
          <div className=' w-full rounded-lg bg-[#d1fee60d] p-5 text-left flex flex-col justify-between items-start'>
            <div className=' w-full h-3/5  rounded-lg mb-4'>
              <img src="../home_borrow.svg" alt="gmi" className=' w-full h-full object-cover object-center' />
            </div>
            <h6 className=' text-2xl text-white font-medium my-2'>Borrow against GMI</h6>
            <p className=' text-[#b1b1b1]'>Leveraging GMI holdings is effortless with our lending and borrowing platform, providing users with the flexibility to capitalize on emerging market trends.</p>
          </div>
        </div>
        <a href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer">
        <button className=' mx-auto w-fit px-4 py-2 rounded-lg bg-[#19fb80] font-medium text-base mt-6 text-black'>Read Documentation</button>
        </a>
      </section>

    
      <section className=' lg:h-dvh w-full relative lg:my-0 my-5'>
    <div className=' h-full w-full flex flex-col justify-center items-center gap-3 relative z-10 max-w-[1320px] mx-auto px-5'>
      <img src="../infographic edit.png" alt="boost main" className=' lg:aspect-square lg:h-3/5 lg:w-auto w-full lg:px-0 px-20 lg:my-0 my-5 object-contain object-center' />
      <h2 className=' text-3xl font-medium my-2 mb-5'>Build to Boost</h2>
      <p className=' text-[#b1b1b1]'>GMI comprises gmBTC, gmETH, gmSOL, and gmUSDC-USDT. To keep the index at its target weights, fees are adjusted according to variations in the targeted pool weights.</p>

    </div>

      <img src="../home_boost.svg" alt="boost lines" className=' w-screen h-full absolute top-0 left-0 object-cover object-center  pointer-events-none z-0'/>
      </section>
      <div className=' max-w-[1320px] xl:px-0 px-5 mx-auto lg:my-0 my-6 '>
<section className=' flex flex-col justify-center items-center w-full'>
    <h2 className=' text-3xl font-medium my-2 mb-5'>How it Works?</h2>
    <div className=' w-full h-[70%] grid lg:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4'>
      <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-4 text-left'>
        <div className=' size-12 flex justify-center items-center bg-[#d1fee60d] rounded-md'>
        <img src="../one.svg" alt="one" className=' size-[35%] rounded-md' />
        </div>
        <h6  className=' text-2xl text-white font-medium'>Connect Wallet</h6>
        <p className=' text-[#b1b1b1]'>Connect your wallet by clicking the “Connect" button located at the top right corner of the page.</p>
      </div>
      <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-4 text-left'>
        <div className=' size-12 flex justify-center items-center bg-[#d1fee60d] rounded-md'>
        <img src="../two.svg" alt="two" className=' size-[35%] rounded-md' />
        </div>
        <h6  className=' text-2xl text-white font-medium'>Go to GMI page</h6>
        <p className=' text-[#b1b1b1]'>Visit the dedicated GMI page to learn more about yield, the pool, and index adjustments..</p>
      </div>
      <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-4 text-left'>
        <div className=' size-12 flex justify-center items-center bg-[#d1fee60d] rounded-md'>
        <img src="../three.svg" alt="three" className=' size-[35%] rounded-md' />
        </div>
        <h6  className=' text-2xl text-white font-medium'>Buy GMI</h6>
        <p className=' text-[#b1b1b1]'>Gloofi handles it all for you. Deposit your USDC, and you'll receive GMI, which includes GM tokens algorithmically optimized by Gloofi's proprietary system..</p>
      </div>
      <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-4 text-left'>
        <div className=' size-12 flex justify-center items-center bg-[#d1fee60d] rounded-md'>
        <img src="../four.svg" alt="four" className=' size-[35%] rounded-md' />
        </div>
        <h6  className=' text-2xl text-white font-medium'>Borrow against GMI (Coming Soon)</h6>
        <p className=' text-[#b1b1b1]'>Take advantage of opportunities with our lending and borrowing feature, allowing you to leverage GMI holdings and gain flexibility in capitalizing on market trends.</p>
      </div>
    </div>
</section>


<section className=' w-full flex lg:flex-row flex-col justify-between lg:items-start text-center'>
  <div className=' lg:w-2/5 w-full flex flex-col justify-start items-start p-5'>
    <h2 className=' text-3xl font-medium text-white my-2 mb-5 text-left'>Find the answers you need about Gloofi.</h2>
    <a href="http://docs.gloofi.finance" target="_blank" rel="noopener noreferrer">
    <button className=' lg:block hidden w-fit px-5 py-2 rounded-lg bg-[#19fb80] font-medium text-base mt-6 text-black'>Read More</button>
    </a>
  </div>
  <div className=' lg:w-3/5 w-full'>
    {FaqData.map((data,i) => (
      <FaqItem faq={data} key={i}/>
    ))}
    <button className=' lg:hidden block w-fit px-5 py-2 rounded-lg bg-[#19fb80] font-medium text-base mx-auto mt-6 text-black'>Read More</button>
  </div>
</section>
      </div>
      <img src="../home_glow.svg" alt=" " className=' lg:block sm:hidden z-10 sm:w-1/2 w-full h-dvh object-fill sm:object-right object-left fixed sm:top-[20%] -top-[40%] sm:right-10 right-[0%] pointer-events-none' />

    </>
  )
}

export default HomePage

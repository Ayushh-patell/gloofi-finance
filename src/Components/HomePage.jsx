import React from 'react'
import FaqItem from './Faqitem'
import { FaqData } from '../FaqData'

const HomePage = () => {
  return (
    <>
            <section className=' p-6 pb-0 flex justify-between items-center w-full pt-20'>
        <div className=' lg:w-1/2 w-full text-left'>
          <img src="../home-name.svg" alt="svg" className=' h-[70px] my-10 mt-0' />
          <h1 className=' text-4xl font-medium'>Increase your capital efficiency</h1>
          <p className=' text-left my-5'>Gloop is a protocol offering an optimally weighted GM asset index token and an advanced lending/borrowing platform for strategic GM leverage.</p>
          <div className=' flex justify-start items-center my-10 gap-5'>
            <button className=' bg-[#19fb80] hover:bg-[#36c174] transition-all duration-500 rounded-lg text-black font-medium px-5 py-3'>Get GMI</button>
            <button className=' hover:border-[#19fb80] transition-all duration-500 border bg-transparent rounded-lg font-medium px-5 py-3 text-white'>Read Documentation</button>
          </div>
        </div>
        <div className=' w-1/2 lg:block hidden relative'>
          <img src="../home-img.png" alt="img" className=' ml-auto w-[75%] h-full object-contain object-center relative z-0' />
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
            <p className=' text-white/60'>Instead of relying solely on GM tokens, consider the strategic use of the GMI index and explore borrowing against it to optimize your overall investment portfolio.</p>
          </div>
          <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-5 text-left'>
            <img src="../Low_Risk.svg" alt="risk" className=' bg-[#d1fee60d] p-2 rounded-lg size-16' />
            <p className=' text-2xl font-medium'>Low Risk</p>
            <p className=' text-white/60'>Our smart rebalancing algorithm adjusts the weights of GM’s in the index to maximize return and minimize risk so you don’t have to constantly rebalance your own portfolio.</p>
          </div>
          <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-5 text-left'>
            <img src="../Secure.svg" alt="Secure" className=' bg-[#d1fee60d] p-2 rounded-lg size-16' />
            <p className=' text-2xl font-medium'>Secure</p>
            <p className=' text-white/60'>Extremely talented developers with smart contract auditing experience developed Gloop. All our products and features have also been audited out by some top firms in the field.</p>
          </div>
          <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-5 text-left'>
            <img src="../Fun.svg" alt="Fun" className=' bg-[#d1fee60d] p-2 rounded-lg size-16' />
            <p className=' text-2xl font-medium'>Fun</p>
            <p className=' text-white/60'>The Gloop community is made up of awesome arbitrum loving individuals who are passionate about web3 and the future of finance.</p>
          </div>
        </div>
      </section>
 
      <section className=' lg:h-dvh w-full'>
        <h2 className=' text-3xl font-medium text-center my-2 mb-7'>GMI & Borrowing Synergies</h2>
        <div className=' w-full grid lg:grid-cols-2 grid-cols-1 gap-5 lg:h-[70%]'>
          <div className=' w-full rounded-lg bg-[#d1fee60d] p-5 text-left flex flex-col justify-between items-start'>
            <div className=' w-full h-3/5  rounded-lg mb-4'>
              <img src="../home_GMI.svg" alt="gmi" className=' w-full h-full object-cover object-center' />
            </div>
            <h6 className=' text-2xl text-white font-medium my-2'>GMI</h6>
            <p className=' text-[#b1b1b1]'>The GM Index token operates as a basket, offering a curated assortment of GM assets. It also undergoes optimal rebalancing through a proprietary algorithm to enhance the risk/return ratio.</p>
          </div>
          <div className=' w-full rounded-lg bg-[#d1fee60d] p-5 text-left flex flex-col justify-between items-start'>
            <div className=' w-full h-3/5  rounded-lg mb-4'>
              <img src="../home_borrow.svg" alt="gmi" className=' w-full h-full object-cover object-center' />
            </div>
            <h6 className=' text-2xl text-white font-medium my-2'>Borrow against GMI</h6>
            <p className=' text-[#b1b1b1]'>Leveraging GMI holdings is made seamless with our lending and borrowing platform, offering users the flexibility to capitalize on emerging market trends.</p>
          </div>
        </div>
        <button className=' mx-auto w-fit px-4 py-2 rounded-lg bg-[#19fb80] font-medium text-base mt-6 text-black'>Read Documentation</button>
      </section>

    
      <section className=' lg:h-dvh w-full relative lg:my-0 my-5'>
    <div className=' h-full w-full flex flex-col justify-center items-center gap-3 relative z-10 max-w-[1320px] mx-auto px-5'>
      <img src="../home_boostmain.svg" alt="boost main" className=' lg:aspect-square lg:h-3/5 lg:w-auto w-full lg:px-0 px-20 lg:my-0 my-5 object-contain object-center' />
      <h2 className=' text-3xl font-medium my-2 mb-5'>Build to Boost</h2>
      <p className=' text-[#b1b1b1]'>GMI includes gmBTC, gmETH, gmSOL and gmUSDC-USDT. To maintain the index at its target weights, fees are adjusted in response to variations in the targeted pool weights.</p>
      <button className=' mx-auto w-fit px-5 py-2 rounded-lg bg-[#19fb80] font-medium text-base mt-6 text-black'>Start Earning</button>

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
        <p className=' text-[#b1b1b1]'>Connect your wallet with the “connect wallet” button on the top right side of the page.</p>
      </div>
      <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-4 text-left'>
        <div className=' size-12 flex justify-center items-center bg-[#d1fee60d] rounded-md'>
        <img src="../two.svg" alt="two" className=' size-[35%] rounded-md' />
        </div>
        <h6  className=' text-2xl text-white font-medium'>Go to GMI page</h6>
        <p className=' text-[#b1b1b1]'>Head over to the dedicated GMI page to get more info on yield, the pool, and index adjustments.</p>
      </div>
      <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-4 text-left'>
        <div className=' size-12 flex justify-center items-center bg-[#d1fee60d] rounded-md'>
        <img src="../three.svg" alt="three" className=' size-[35%] rounded-md' />
        </div>
        <h6  className=' text-2xl text-white font-medium'>Buy GMI</h6>
        <p className=' text-[#b1b1b1]'>Gloop takes care of everything. Deposit your USDC and, in return, receive GMI containing the GM tokens perfectly adjusted algorithmically by Gloop's proprietary optimizer.</p>
      </div>
      <div className=' bg-[#d1fee60d] rounded-lg p-5 space-y-4 text-left'>
        <div className=' size-12 flex justify-center items-center bg-[#d1fee60d] rounded-md'>
        <img src="../four.svg" alt="four" className=' size-[35%] rounded-md' />
        </div>
        <h6  className=' text-2xl text-white font-medium'>Borrow against GMI (Coming Soon)</h6>
        <p className=' text-[#b1b1b1]'>Seize opportunities with our lending and borrowing feature, empowering you to leverage GMI holdings and gain flexibility in capitalizing on market trends.</p>
      </div>
    </div>
</section>


<section className=' w-full flex lg:flex-row flex-col justify-between lg:items-start text-center'>
  <div className=' lg:w-2/5 w-full flex flex-col justify-start items-start p-5'>
    <h2 className=' text-3xl font-medium text-white my-2 mb-5 text-left'>Get the answers you need about Gloofi</h2>
    <button className=' lg:block hidden w-fit px-5 py-2 rounded-lg bg-[#19fb80] font-medium text-base mt-6 text-black'>Read More</button>
  </div>
  <div className=' lg:w-3/5 w-full'>
    {FaqData.map((data,i) => (
      <FaqItem faq={data} key={i}/>
    ))}
    <button className=' lg:hidden block w-fit px-5 py-2 rounded-lg bg-[#19fb80] font-medium text-base mx-auto mt-6 text-black'>Read More</button>
  </div>
</section>
      </div>
      <img src="../home_glow.svg" alt=" " className=' lg:block sm:hidden z-10 sm:w-1/2 w-full h-dvh object-cover sm:object-right object-left fixed sm:top-[20%] -top-[40%] sm:right-10 right-[0%] pointer-events-none' />

    </>
  )
}

export default HomePage

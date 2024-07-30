import React from 'react'
import Swapcard from './Swapcard'

const Gmi = () => {
  return (
    <>
      <section className=' pt-10 w-full'>
        <div className=' bg-[#d1fee60d] rounded-lg p-7 px-8 flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5'>
            <img src="../gmi.svg" alt=" gmi" className=' size-16 rounded-md' />
            <p className=' text-left pr-5'>GMI is an index token that includes a basket of optimally weighted GM assets, providing holders with a highly diversified return through automatic optimization of risk-to-return ratios.</p>
            <button className=' px-5 py-2 text-white rounded-md border border-white bg-transparent whitespace-nowrap'>More Information <span><i className="fa-solid fa-arrow-right -rotate-45"></i></span></button>
        </div>
      </section>
      <section className=' my-6 w-full'>
        <h2 className=' text-left lg:text-4xl text-3xl font-medium my-5'>Buy/Sell GMI</h2>
        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5'>
            <div className=' bg-[#d1fee60d] rounded-lg p-5 '>
                <div className=' flex justify-between items-center gap-2'>
                <h6 className=' font-medium text-lg'>GMI</h6>
                <button className=' px-5 py-2 rounded-md border border-[#19fb80] bg-[#d1fee60d] text-white font-medium'>16.654% APY</button>
                </div>
                <div aria-hidden className=' h-[2px] w-[95%] mx-auto bg-[#d1fee60d] my-5'/>
                <div className=' py-5 px-2 font-medium space-y-4'>
                    <div className=' flex justify-between items-center'>
                        <p className=' text-[#b1b1b1]'>GMI Price</p>
                        <p className=' text-white'>$1.1634</p>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <p className=' text-[#b1b1b1]'>TVL</p>
                        <p className=' text-white'>$46763.2334</p>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <p className=' text-[#b1b1b1]'>Total Supply</p>
                        <p className=' text-white'>39564.91 GMI</p>
                    </div>
                </div>
                <div aria-hidden className=' h-px w-[95%] mx-auto bg-[#d1fee60d] my-5'/>
                <div className=' py-5 px-2 font-medium space-y-4'>
                    <div className=' flex justify-between items-center'>
                        <p className=' text-[#b1b1b1]'>Balance</p>
                        <p className=' text-white'>0 GMI</p>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <p className=' text-[#b1b1b1]'>Total Value</p>
                        <p className=' text-white'>$0.00</p>
                    </div>

                </div>
            </div>
            <Swapcard/>
        </div>
      </section>

      <section className=' my-7 w-full rounded-xl bg-[#d1fee60d] p-5'>
        <h6 className=' text-xl my-2 font-medium text-left'>GMI Basket</h6>
        <div aria-hidden className=' pointer-events-none h-[2px] bg-[#d1fee60d] w-full my-3'/>
        <div className=' w-full lg:grid hidden grid-cols-8 gap-2 text-left'>
          <p className=' py-2 col-span-2 text-[#b1b1b1]'>Asset</p>
          <p className='  text-[#b1b1b1]'>Price</p>
          <p className='  text-[#b1b1b1]'>Available</p>
          <p className='  text-[#b1b1b1]'>Current</p>
          <p className='  text-[#b1b1b1]'>Target</p>
          <p className='  text-[#b1b1b1]'>Deposit Fee</p>
          <p className='  text-[#b1b1b1]'>Withdrawl Fee</p>

          <div className=' py-2 col-span-2 flex justify-start items-center gap-1'> <img src="../gmi_wETH.svg" alt="wETH" className=' size-6 rounded-full object-contain object-center' /><p className=' font-medium'>wETH</p></div>
          <p>$1.00</p>
          <p>9352.3604</p>
          <p>32.66%</p>
          <p>35%</p>
          <p>0.36%</p>
          <p>0.17%</p>
          

          <div className=' py-2 col-span-2 flex justify-start items-center gap-1'> <img src="../gmi_wETH.svg" alt="wETH" className=' size-6 rounded-full object-contain object-center' /><p className=' font-medium'>wETH</p></div>
          <p>$1.60</p>
          <p>8332.1524</p>
          <p>29.46%</p>
          <p>30%</p>
          <p>0.59%</p>
          <p>0.61%</p>
          

          <div className=' py-2 col-span-2 flex justify-start items-center gap-1'> <img src="../gmi_wBTC.svg" alt="wBTC" className=' size-6 rounded-full object-contain object-center' /><p className=' font-medium'>wBTC</p></div>
          <p>$1.74</p>
          <p>12669.1024</p>
          <p>48.71%</p>
          <p>45%</p>
          <p>0.68%</p>
          <p>0.52%</p>


          <div className=' py-2 col-span-2 flex justify-start items-center gap-1'> <img src="../gmi_USDC.svg" alt="USDC" className=' size-6 rounded-full object-contain object-center' /><p className=' font-medium'>USDC-USDT</p></div>
          <p>$1.07</p>
          <p>2929.1024</p>
          <p>69.03%</p>
          <p>5%</p>
          <p>0.98%</p>
          <p>0.22%</p>

        </div>

<div className=' lg:hidden block'>
<div>
          <div className=' w-full flex justify-between items-center py-2'>
          <p className=' py-2 col-span-2 text-[#b1b1b1]'>Asset</p>
                    <div className=' py-2 col-span-2 flex justify-start items-center gap-1'> <img src="../gmi_wETH.svg" alt="wETH" className=' size-6 rounded-full object-contain object-center' /><p className=' font-medium'>wETH</p></div>            
          </div>
          <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Price</p>
                    <p>$1.00</p>
          </div>
          <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Available</p>
                    <p>9352.3604</p>
          </div>
          <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Current</p>
                    <p>32.66%</p>
          </div>
          <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Target</p>
                    <p>35%</p>
          </div>
          <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Deposit Fee</p>
                    <p>0.36%</p>
          </div>
          <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Withdrawl Fee</p>
                    <p>0.17%</p>
          </div>
        </div>

        <div aria-hidden className=' h-[2px] w-[95%] mx-auto bg-[#d1fee60d] my-5'/>

        <div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className=' py-2 col-span-2 text-[#b1b1b1]'>Asset</p>
          <div className=' py-2 col-span-2 flex justify-start items-center gap-1'> <img src="../gmi_wETH.svg" alt="wETH" className=' size-6 rounded-full object-contain object-center' /><p className=' font-medium'>wETH</p></div>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Price</p>
          <p>$1.60</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Available</p>
          <p>8332.1524</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Current</p>
          <p>29.46%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Target</p>
          <p>30%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Deposit Fee</p>
          <p>0.59%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Withdrawl Fee</p>
          <p>0.61%</p>
        </div>
        </div>

        <div aria-hidden className=' h-[2px] w-[95%] mx-auto bg-[#d1fee60d] my-5'/>

        <div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className=' py-2 col-span-2 text-[#b1b1b1]'>Asset</p>
          <div className=' py-2 col-span-2 flex justify-start items-center gap-1'> <img src="../gmi_wBTC.svg" alt="wBTC" className=' size-6 rounded-full object-contain object-center' /><p className=' font-medium'>wBTC</p></div>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Price</p>
          <p>$1.74</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Available</p>
          <p>12669.1024</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Current</p>
          <p>48.71%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Target</p>
          <p>45%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Deposit Fee</p>
          <p>0.68%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Withdrawl Fee</p>
          <p>0.52%</p>
        </div>
        </div>

        <div aria-hidden className=' h-[2px] w-[95%] mx-auto bg-[#d1fee60d] my-5'/>

        <div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className=' py-2 col-span-2 text-[#b1b1b1]'>Asset</p>
          <div className=' py-2 col-span-2 flex justify-start items-center gap-1'> <img src="../gmi_USDC.svg" alt="USDC" className=' size-6 rounded-full object-contain object-center' /><p className=' font-medium'>USDC-USDT</p></div>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Price</p>
          <p>$1.07</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Available</p>
          <p>2929.1024</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Current</p>
          <p>69.03%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Target</p>
          <p>5%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Deposit Fee</p>
          <p>0.98%</p>
        </div>
        <div className=' w-full flex justify-between items-center py-2'>
          <p className='  text-[#b1b1b1]'>Withdrawl Fee</p>
          <p>0.22%</p>
        </div>
        </div>
</div>




      </section>
    </>
  )
}

export default Gmi

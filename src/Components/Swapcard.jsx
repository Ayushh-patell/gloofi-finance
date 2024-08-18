import React, { useEffect, useRef, useState } from 'react'
import { GMIData } from '../GMIData'

const Swapcard = () => {
    const [isBuy, setisBuy] = useState(true)
    const [selectedCrypto, setselectedCrypto] = useState(GMIData[0])
    const [isOpen, setisOpen] = useState(false)
    const [otherCrypto, setotherCrypto] = useState('')
    const [gmi, setgmi] = useState('')
    const cryptoMenu = useRef()

    const handleotherCrypto = (e) => {
      if(/^\d+$/.test(e.target.value)) {
        setotherCrypto(e.target.value)
        let newval = e.target.value * selectedCrypto.Rate
        setgmi(newval)
      }
      else {
        setotherCrypto('')
        setgmi('')
      }
    }

    const handlegmiCrypto = (e) => {
      if(/^\d+$/.test(e.target.value)) {
        setgmi(e.target.value)
        let newval = e.target.value/selectedCrypto.Rate
        setotherCrypto(newval)
      }
      else {
        setgmi('')
        setotherCrypto('')
      }
    }

    useEffect(() => {
      setgmi('')
      setotherCrypto('')
    },[isBuy])

    const closeMenu = (e) => {if(!(e.target.id==='openMenu')) setisOpen(false);} 

    useEffect(() => {
      window.addEventListener('click', closeMenu)

      return () => {
        window.removeEventListener('click', closeMenu)
      }
    },[])

  return (
    <div className=' bg-[#d1fee60d] rounded-lg p-5 '>
      <div className=' grid grid-cols-2'>
        <p onClick={() => {setisBuy(true)}} className={` ${isBuy ?" border-[#19fb80]":" border-[#d1fee60d]"} cursor-pointer py-3 border-b-2 text-center flex justify-center items-center`}>Buy GMI</p>
        <p onClick={() => {setisBuy(false)}} className={` ${!isBuy ?" border-[#19fb80]":" border-[#d1fee60d]"} cursor-pointer py-3 border-b-2 text-center flex justify-center items-center`}>Sell GMI</p>
      </div>

{/* SWAP BARS */}
      <div className={` flex ${isBuy? " flex-col":" flex-col-reverse"} justify-between items-center w-full gap-4 relative mt-6`}>
      {/* OTHER CRYPTO */}
        <div className=' bg-[#d1fee60d] rounded-lg p-4 w-full relative'>
            <div className=' flex justify-between items-center '>
                <input readOnly={!isBuy} type="text" placeholder='0.00' value={otherCrypto} onChange={handleotherCrypto} className=' bg-transparent outline-none focus:outline-none w-full font-medium placeholder:font-medium text-xl placeholder:text-xl' />
                <div id='openMenu' onClick={() => {setisOpen((prev) => !prev)}} className=' cursor-pointer w-fit flex justify-center items-center gap-1 pointer-events-auto'>
                    <img src={selectedCrypto.imgSrc} alt={selectedCrypto.Name} className=' size-5 rounded-full pointer-events-none' />
                    <p className=' text-lg text-white whitespace-nowrap pointer-events-none'>{selectedCrypto.Name}</p>
                    <p className={`${isOpen &&" rotate-180"} pointer-events-none`}>▾</p>
                    {/* POPUP MENU TO SELECT CRYPTO */}
                    <div ref={cryptoMenu}     
                    style={
                          isOpen
                            ? { height: cryptoMenu.current.scrollHeight+20 }
                            : { height: "0px" }
                    }
                    className={` absolute z-50 w-full rounded-xl bg-[#2c312f] top-1/2 left-0 ${isOpen?" sm:py-5 py-2":" py-0"} sm:px-5 px-2 overflow-hidden transition-[height,padding] duration-300`}>
                      <div className=' w-full grid grid-cols-4 py-4 text-sm font-light'>
                        <p className=' col-span-2 text-[#b1b1b1] text-left sm:px-5 px-2'>Asset</p>
                        <p className='text-[#b1b1b1]'>Deposit Fee</p>
                        <p className='text-[#b1b1b1]'>Withdrawl Fee</p>
                      </div>
                      {GMIData.map((data,i) => (
                      <div key={i} onClick={() => {setselectedCrypto(GMIData[i]);setgmi('');setotherCrypto('')}} className=' w-full grid grid-cols-4 p-4 text-sm bg-transparent hover:bg-[#d1fee60d]'>
                        <div className=' flex col-span-2 justify-start items-center gap-1'>
                          <img src={data.imgSrc} alt={data.Name} className=' size-4 rounded-full object-contain object-center' />
                          <p className=' text-white font-medium'>{data.Name}</p>
                        </div>
                        <p>{data.Deposit}%</p>
                        <p>{data.Withdrawl}%</p>
                      </div>
                      ))}
                    </div>
                    {/* POPUP MENU TO SELECT CRYPTO -- END */}
                </div>
            </div>
            <div className=' flex justify-between items-center '>
              <p className=' text-[#b1b1b1] text-sm'>${isNaN(parseFloat(otherCrypto).toFixed(2)) ? 0.00 :(parseFloat(otherCrypto) * selectedCrypto.Price).toFixed(2)}</p>
              <p className=' text-[#b1b1b1] text-sm'>Balance |0|</p>
            </div>
        </div>

{/* GMI */}
        <div className=' bg-[#d1fee60d] rounded-lg p-4 w-full'>
            <div className=' flex justify-between items-center '>
                <input readOnly={isBuy} type="text" placeholder='0.00' value={gmi} onChange={handlegmiCrypto} className=' bg-transparent outline-none focus:outline-none w-full font-medium placeholder:font-medium text-xl placeholder:text-xl' />
                <div className=' w-fit flex justify-center items-center gap-1'>
                    <img src='../logo black bg.png' alt='GMI' className=' size-5 rounded-full' />
                    <p className=' text-lg text-white'>GMI</p>
                </div>
            </div>
            <div className=' flex justify-between items-center '>
              <p className=' text-[#b1b1b1] text-sm'>${isNaN(parseFloat(otherCrypto).toFixed(2)) ? 0.00 :(parseFloat(otherCrypto) * selectedCrypto.Price).toFixed(2)}</p>
              <p className=' text-[#b1b1b1] text-sm'>Balance |0|</p>
            </div>
        </div>
{/* SWAP BUTTON */}
    <div onClick={() => {setisBuy((prev) => !prev)}} className=' cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black bg-[#d1fee60d] rounded-full size-12 flex justify-center items-center'>
      <img src="../gmi_swap.svg" alt="swap" className=' size-full object-contain object-center' />
    </div>

      </div>

      {/* FEES */}
      <div className=' flex justify-between items-center mt-6'>
        <p className='flex justify-center items-center gap-1 font-medium'>Fees <span className=' rounded-full font-normal border border-[#b1b1b1] text-[#b1b1b1] text-[8px] size-4 flex justify-center items-center'>i</span></p>
        <p>${((isBuy? otherCrypto*selectedCrypto.Deposit : otherCrypto*selectedCrypto.Withdrawl)/100).toFixed(4)}({isBuy? selectedCrypto.Deposit : selectedCrypto.Withdrawl}%)</p>
      </div>

      {/* APPROVE BTN */}
      <button disabled={!isBuy} className=' mt-5 w-full px-4 py-2 rounded-lg bg-[#19fb80] disabled:bg-[#35ba71] text-black font-medium'>{isBuy?"Approve":"Sell GMI"}</button>
    </div>
  )
}

export default Swapcard

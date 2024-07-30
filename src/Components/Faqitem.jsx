import React, { useEffect, useRef, useState } from 'react';

const FaqItem = ({faq}) => {

    const { question, answer } = faq;
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();
    const handleToggle = () => {
        setClicked((prev) => !prev);
      };

      useEffect(() => {// ANSWER IS ADDED HERE    
        if(document.getElementById(question)) {
          document.getElementById(question).innerHTML = `${answer}`
        }
      }, [])


  return (
    <div className=" w-full bg-transparant border-b border-white">
    <p
    onClick={handleToggle}

      className="cursor-pointer pointer-events-auto flex justify-between items-center p-6 pl-0"
    >
    {/*     THE QUESTION BAR     */}
      <span className=' text-xl text-white font-medium text-left'>{question}</span>
      <img src="../arrow.svg" alt="arrow" className={` h-2 transition-all ${clicked?" -rotate-180":" rotate-0"} `} />
    </p>
    <div
    ref={contentEl}
    style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      className={` accordianBody overflow-hidden md:text-xl transition-[height] duration-300 text-base text-left   `}
    >
    {/*     ANSWER BAR:ANSWER IS ADDED PROGRAMATICALLY    */}
      <p id={`${question}`} className=" text-left p-4 text-base pl-0 text-[#b1b1b1]">
        
        
      </p>
    </div>
  </div>
  )
}

export default FaqItem

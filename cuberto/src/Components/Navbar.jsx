import React,{useState} from 'react'
import { RiMenu4Line } from "react-icons/ri";
const Navbar = ({handleEnter, handleLeave, handleClick}) => {
    const menu=["Linkedin","Behance", "Dribble","Instagram","Youtube","Twitter","Github"]
    const social =["What we do","Projects","Company","Tutorials", "Contacts"]
  return (
    <div>
    <div className='h-[14vh] w-full bg-zinc-300 flex items-center justify-between px-16 bg-white'>
        <img className='object-contain h-16' src='data:image/png;base64,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' alt=''/>
         <div className='menu flex items-center gap-4 z-40  '>
            <h1 className='text-xl'>Menu</h1>
            <span onMouseEnter={handleEnter} onMouseLeave={handleLeave}  onClick={handleClick} className='text-xl bg-zinc-500 p-5 rounded-full'>< RiMenu4Line /></span>
         </div>
    </div>
    <div className='offsetMenu h-screen w-[50vw]  fixed bg-zinc-200 -right-[100%] top-0'>
   <div className="flex gap-40 mt-44 ">
   <div className='leftElem ml-32 '>
        <p className='font-medium pb-6'> Social media</p>
       <div className='social h-fit w-fit cursor-pointer'>
       {
        menu.map((item, index)=>(
            <h1 key={index}  className='flex flex-col h-6 my-4  overflow-hidden'>
            <span className='inline-block'>
               {item}
            </span>
            <span className='inline-block'>
               {item}
            </span>
        </h1>
        ))
       }

       </div>
    </div>
    <div className='rightElem'>
        <p className='font-medium pb-6'>Menu</p>
      <div className='menu h-fit w-fit cursor-pointer'>
      {
        social.map((item, index )=>(
            <h1 key={index} className='flex flex-col h-16 overflow-hidden'>
            <span className='text-5xl tracking-tighter inline-block py-2'> {item} </span>
            <span className='text-5xl tracking-tighter inline-block py-2'> {item}</span>
        </h1>
        ))
      }
      </div>
    </div>
   </div>
    </div>
    </div>
  )
}

export default Navbar

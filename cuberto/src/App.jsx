  import React, {useState, useRef, useEffect } from 'react';
  import gsap from 'gsap';
  import Navbar from './Components/Navbar'
  import Home from './Components/Home'


  const App = () => {
      const cursor = useRef()
      const [val, setVal] = useState();
    useEffect(()=>{
      window.addEventListener('mouseover',(dets)=>{
        gsap.to(cursor.current,{
        x: dets.clientX,
        y: dets.clientY,
        duration:1,
      ease:"expo"
    })  
        })
    const menu = document.querySelectorAll(".social h1")
    menu.forEach((item)=>{
      const spans = item.querySelectorAll("span")
      item.addEventListener("mouseenter", ()=>{
        gsap.to(cursor.current,{
          scale:5,
          duration:0.4,
          ease:"expo",
        });
        gsap.to(spans,{
          y:"-100%",
          duration:0.8,
          ease:"expo",
        })
      });
      item.addEventListener("mouseleave", ()=>{
        gsap.to(cursor.current,{
          scale:  1,
          duration:0.4,
          ease:"expo",
        });
        gsap.to(spans,{
          y:"0%",
          duration:0.8,
          ease:"expo",
        })
      });
    });
    const social = document.querySelectorAll('.menu h1')
    social.forEach((item)=>{
      const spans = item.querySelectorAll("span")
      item.addEventListener("mouseenter", ()=>{
        gsap.to(cursor.current,{
          scale:5,
          duration:0.4,
          ease:"expo",
        });
        gsap.to(spans,{
          y:"-100%",
          duration:0.8,
          ease:"expo",
        })
      });
      item.addEventListener("mouseleave", ()=>{
        gsap.to(cursor.current,{
          scale:  1,
          duration:0.4,
          ease:"expo",
        });
        gsap.to(spans,{
          y:"0%",
          duration:0.8,
          ease:"expo",
        })
      });
    })
    },[])
      const handleMouseEnter =()=>{
        gsap.to(cursor.current,{
          scale:5,
          duration:0.4,
          ease:"expo "
        })
      }
      const handleMouseLeave =()=>{
        gsap.to(cursor.current,{
          scale:1,
          duration:0.4,
          ease:"expo "
        })
      }
      const handleCLick =()=>{
    
    if(!val){
      gsap.to(".offsetMenu",{
        right:"0%",
        duration:0.8,
        ease:"expo",

      })
      setVal(true);
    }else{
      gsap.to(".offsetMenu",{
        right:"-100%",
        duration:1.5,
        ease:"expo",
      })
      setVal(false);
    }
      }
      
    return (
      <div>
        <div ref={cursor} className='h-3 w-3 rounded-full bg-white -translate-x-2/4 -translate-y-2/4 top-0 left-0 fixed z-50 pointer-events-none mix-blend-exclusion'> </div>
        <Navbar handleEnter ={handleMouseEnter} handleLeave={handleMouseLeave} handleClick={handleCLick}
      />
        <Home />

      </div>
    )
  }

  export default App

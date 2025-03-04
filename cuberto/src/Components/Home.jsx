import React from 'react'

const Home = () => {
  return (
    <div className='h-[86vh] w-full bg-zinc-300 px-40 pt-16 bg-white'>
      <div>
        <h1 className='text-9xl font-normal tracking-tighter'>
            <span>We </span> digital 
            <span>are  </span>
            <span>a </span>
            <span>digital </span>
        </h1>
      </div>
      <div className='flex items-center gap-4'>
        <video className='object-contain h-32 rounded-[5vw]'src="https://cuberto.com/assets/home/hero/header.mp4" autoPlay loop muted></video>
        <h1 className='text-9xl font-normal tracking-tighter'>
          <span className='italic font-light'>
            design
            </span> and
        </h1>
      </div>
      <div>
        <h1 className='text-9xl font-normal tracking-tighter'>
          motion agency
        </h1>
      </div>
    </div>
  )
}

export default Home

import './App.css'

function App() {

  return (
    <main className='w-screen min-h-screen bg-blue-950 grid place-content-center'>
      <article className='w-[93.5vw] max-w-[350px] h-auto flex flex-col justify-start items-center gap-y-[24px] bg-blue-900 rounded-[15px] p-[24px]'>
        <div className='cursor-pointer w-[302px] h-[302px] rounded-[8px] grid place-content-center hover:bg-cyan/50 bg-[url(../../image-equilibrium.jpg)] bg-center bg-contain bg-blend-overlay transition duration-400 hover:*:opacity-100'>
          <img className='opacity-0 transition duration-400' src="icon-view.svg" alt="image-equilibrium" />
        </div>
        <section className='w-full flex flex-col justify-start items-start gap-y-[16px]'>
          <h1 className='text-preset-1 text-white hover:text-cyan transition duration-400 cursor-pointer'>Equilibrium #3429</h1>
          <p className='text-preset-2 text-blue-500'>Our Equilibrium collection promotes balance and calm.</p>
        </section>
        <section className='w-full flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-start items-center gap-x-[8px]'>
            <img src="icon-ethereum.svg" alt="icon-ethereum" />
            <h2 className='text-preset-3 text-cyan '>0.041 ETH</h2>
          </div>
          <div className='flex flex-row justify-start items-center gap-x-[8px]'>
            <img src="icon-clock.svg" alt="icon-ethereum" />
            <h3 className='text-preset-3 text-blue-500'>3 days left</h3>
          </div>
        </section>
        <hr className='w-full border-0 outline-1 outline-blue-800'/>
        <section className='w-full flex flex-row justify-start items-center gap-x-[16px]'>
          <img className='w-[33px] h-[33px] border-[1px] border-white rounded-full' src="image-avatar.png" alt="image avatar" />
          <h2 className='text-preset-4 text-blue-500'>Creation of <span className='text-white pl-[8px] hover:text-cyan transition duration-400 cursor-pointer'>Jules Wyvern</span></h2>
        </section>
      </article>
    </main>
  )
}

export default App

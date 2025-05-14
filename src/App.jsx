import './style.css'
import equilibrium from '/images/image-equilibrium.jpg';
import eyeIcon from '/images/icon-view.svg';
import ethereum from '/images/icon-ethereum.svg';
import avatar from '/images/image-avatar.png';
import clockIcon from '/images/icon-clock.svg';


function App() {

  return (
    <div className='font-outfit bg-(--color-big-bg) h-screen flex justify-center items-center text-(--color-white) px-5 py-8'>
      <div className='bg-(--color-card-bg) p-6 rounded-xl md: max-w-sm'>

        <div className='relative group w-full h-78 overflow-hidden rounded-lg cursor-pointer'>
          <img src={equilibrium} alt="equiligrium"/>

          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80'>
            {/* overlay for hover effect */}

            <div className='absolute inset-0 bg-(--color-primary-cyan) opacity-50'></div>

            <img src={eyeIcon} alt="eye" className='z-10'/>
          </div>
        </div>


        <h1 className=' text-(--color-white) font-bold text-xl my-4 hover:text-(--color-primary-cyan) cursor-pointer'>Equilibrium #3429</h1>

        <p className='text-(--color-primary-blue) font-light'>Our Equilibrium collection promotes balance and calm.</p>

        <div className='flex justify-between py-4'>
          <span className='text-(--color-primary-cyan) flex items-center'>
            <img src={ethereum} alt="ethereum" className='mr-1.5'/>
            0.041 ETH
          </span>
          <span className='text-(--color-primary-blue) flex items-center'>
            <img src={clockIcon} alt="clock" className='mr-1.5'/>
            3 days left
          </span>
        </div>
    
        <div className='text-(--color-primary-blue) text-sm font-light flex items-center border-t-2 border-(--color-line) pt-4'>

          <img src={avatar} alt="avatar" className='w-8.5 border-white border-solid border-2 rounded-full mr-3.5'/>

          Creation of 

          <span className='text-(--color-white) pl-1 hover:text-(--color-primary-cyan) cursor-pointer'>Jules Wyvern</span>
        </div>
      </div>
    </div>
  )
}

export default App

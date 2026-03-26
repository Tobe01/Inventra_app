import cube from '../assets/icons/proicons--cube.svg';
import grid from '../assets/icons/proicons--grid.svg';
import settings from '../assets/icons/proicons--settings.svg';
import documents from '../assets/icons/proicons--document.svg';

export function Sidenav(){
  return(
    <div className='bg-text fixed left-0 top-0 bottom-0 flex flex-col align-middle justify-between py-5 px-4'>
      <div className='flex flex-col align-middle justify-center space-y-5'>
        <button className='text-white bg-secondary font-bold text-20 rounded-md text-center justify-items-center w-9 ml-auto mr-auto py-1 cursor-pointer'>SF</button>
          <div className='flex flex-col space-y-1'>
            <button className='bg-neutral-700 rounded-md text-center justify-items-center py-2 px-2.5 cursor-pointer'><img src={grid} alt='pos-icon' loading='lazy' /></button>
            <button className='bg-neutral-700 rounded-md text-center justify-items-center py-2 px-2.5 cursor-pointer'><img src={cube} alt='inventory-icon' loading='lazy' /></button>
            <button className='bg-neutral-700 rounded-md text-center justify-items-center py-2 px-2.5 cursor-pointer'><img src={documents} alt='orders-icon' loading='lazy' /></button>
          </div>
        <div className='border-b border-border w-7 m-auto'></div>
      </div>

      <div className='flex flex-col align-middle justify-center space-y-1'>
        <button className='text-center justify-items-center  bg-neutral-700 rounded-md py-2 px-2.5 cursor-pointer'><img src={settings} alt='settings-icon' loading='lazy' /></button>
        <button className='text-white font-bold bg-neutral-700 rounded-md text-center justify-items-center py-2 px-2.5 cursor-pointer'>AO</button>
      </div>
    </div>
  )
}
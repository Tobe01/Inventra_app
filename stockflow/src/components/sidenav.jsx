import cube from '../assets/icons/proicons--cube.svg';
import grid from '../assets/icons/proicons--grid.svg';
import settings from '../assets/icons/proicons--settings.svg';
import documents from '../assets/icons/proicons--document.svg';

export function Sidenav(){
  return(
    <div className='bg-text fixed left-0 top-0 bottom-0 flex flex-col align-middle justify-between py-5 px-2'>
      <div className='flex flex-col align-middle justify-center space-y-3.5 pb-5 border-b border-border'>
        <span className='text-white bg-secondary font-bold text-20 rounded-md text-center justify-items-center py-2.5 cursor-pointer'>SF</span>
        <span className='bg-neutral-700 rounded-md text-center justify-items-center p-2.5 cursor-pointer'><img src={grid} alt='pos-icon' loading='lazy' /></span>
        <span className='bg-neutral-700 rounded-md text-center justify-items-center p-2.5 cursor-pointer'><img src={cube} alt='inventory-icon' loading='lazy' /></span>
        <span className='bg-neutral-700 rounded-md text-center justify-items-center p-2.5 cursor-pointer'><img src={documents} alt='orders-icon' loading='lazy' /></span>
      </div>

      <div className='flex flex-col align-middle justify-center space-y-3.5'>
        <span className='text-center justify-items-center cursor-pointer'><img src={settings} alt='settings-icon' loading='lazy' /></span>
        <span className='text-white font-bold text-20 bg-neutral-700 rounded-md text-center justify-items-center p-2.5 cursor-pointer'>AO</span>
      </div>
    </div>
  )
}
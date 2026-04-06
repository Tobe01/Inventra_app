import { MainNav } from '../components/layout/main-nav';
import cookies from '../assets/icons/material-symbols--cookie.svg';
import { InventoryNav } from '../components/layout/inventory-nav';

export function InventoryPage(){
  return(
    <div>
      <MainNav/>
      <InventoryNav/>

      <div className='font-body text-[14px] gap-3 h- flex flex-col pl-25 pr-5 py-6'>
        <div className='flex align-middle m-auto justify-center gap-2 w-full'>
          <div className='p-3.5 w-80 rounded-lg bg-input border border-border'>
            <div className='space-y-1.5'>
              <p className='text-light font-bold text-sm'>Total Items</p>
              <p className='text-3xl font-bold font-money'>12</p>
              <p className='text-light text-sm'>ingredients tracked</p>
            </div>
          </div>
          <div className='border bg-input border-border p-3.5 w-80 rounded-lg'>
            <div className='space-y-1.5'>
              <p className='text-light font-bold text-sm'>Critical Stock</p>
              <p className='text-3xl font-bold font-money text-secondaryred'>3</p>
              <p className='text-light text-sm'>below minimum level</p>
            </div>
          </div>
          <div className='border bg-input border-border p-3.5 w-80 rounded-lg'>
            <div className='space-y-1.5'>
              <p className='text-light font-bold text-sm'>Low Stock</p>
              <p className='text-3xl font-bold font-money text-pending'>3</p>
              <p className='text-light text-sm'>needs attention</p>
            </div>
          </div>
          <div className='border bg-input border-border p-3.5 w-80 rounded-lg'>
            <div className='space-y-1.5'>
              <p className='text-light font-bold text-sm'>OK Items</p>
              <p className='text-3xl font-bold font-money text-secondary'>6</p>
              <p className='text-light text-sm'>well stocked</p>
            </div>
          </div>
        </div>

        <div className='rounded-bl-xl rounded-br-xl'>

          <div className='flex align-middle text-light py-1.5 bg-input rounded-tl-lg rounded-tr-lg border border-border gap-2'>
              <div className='w-90 my-auto pl-3.5'>Ingredient</div>
              <div className='w-65 my-auto pl-3.5'>In Stock</div>
              <div className='w-65 my-auto pl-3.5'>Min. Level</div>
              <div className='w-65 my-auto pl-3.5'>Stock Level</div>
              <div className='w-25 my-auto pl-3.5'></div>
          </div>
          
          <div className='rounded-bl-lg rounded-br-lg border-x border-border'>

            <div className='flex border-b rounded-bl-lg rounded-br-lg border-border align-middle py-3 hover:bg-input justify-items-start gap-2'>

              <div className='flex w-[351.5px] pl-3.5 align-middle gap-2'>
                <div className='my-auto flex gap-2'>
                  <div className='flex gap-2'>
                    <img src={cookies} width={30} alt='itemImage' loading='lazy' />
                    <p className='m-auto font-bold'>Parboiled Rice</p>
                  </div>
                  <button className='bg-lightgreen px-2 py-0.5 rounded-full text-secondary font-bold m-auto text-[10px]'>OK</button>
                </div>
              </div>

              <div className='w-67 pl-3.5 my-auto font-bold font-money'><p>85 kg</p></div>

              <div className='w-60 my-auto text-light font-money'><p>50 kg</p></div>

              <div className='w-90 pl-4 flex align-middle justify-between pr-8'>
                <div className='flex my-auto gap-2 text-light'>
                  <p className='font-money text-[10px]'>85%</p>
                  <progress className='my-auto bg-amber-500' value="70" max="100"></progress>
                </div>
                <div className='m-auto'>
                  <button className='px-1 rounded-sm m-auto text-light border border-border cursor-pointer hover:bg-lightgreen hover:text-secondary hover:border-secondary'>+ Restock</button>
                </div>
              </div>

            </div>

            <div className='flex border-b bg-critical rounded-bl-lg rounded-br-lg border-border align-middle py-3 hover:bg-input justify-items-start gap-2'>

              <div className='flex w-[351.5px] pl-3.5 align-middle gap-2'>
                <div className='my-auto flex gap-2'>
                  <div className='flex gap-2'>
                    <img src={cookies} width={30} alt='itemImage' loading='lazy' />
                    <p className='m-auto font-bold'>Parboiled Rice</p>
                  </div>
                  <button className='bg-lightred text-secondaryred px-2 py-0.5 rounded-full font-bold m-auto text-[10px]'>Critical</button>
                </div>
              </div>

              <div className='w-67 pl-3.5 my-auto font-bold font-money'><p>85 kg</p></div>

              <div className='w-60 my-auto text-light font-money'><p>40 L</p></div>

              <div className='w-90 pl-4 flex align-middle justify-between pr-8'>
                <div className='flex my-auto gap-2 text-light'>
                  <p className='font-money text-[10px]'>85%</p>
                  <progress className='my-auto bg-amber-500' value="70" max="100"></progress>
                </div>
                <div className='m-auto'>
                  <button className='px-1 rounded-sm m-auto text-light border border-border cursor-pointer hover:bg-lightgreen hover:text-secondary hover:border-secondary'>+ Restock</button>
                </div>
              </div>

            </div>

            <div className='flex border-b bg-low rounded-bl-lg rounded-br-lg border-border align-middle py-3 hover:bg-input justify-items-start gap-2'>

              <div className='flex w-[351.5px] pl-3.5 align-middle gap-2'>
                <div className='my-auto flex gap-2'>
                  <div className='flex gap-2'>
                    <img src={cookies} width={30} alt='itemImage' loading='lazy' />
                    <p className='m-auto font-bold'>Parboiled Rice</p>
                  </div>
                  <button className='bg-pendingfade text-pending px-2 font-bold py-0.5 rounded-full m-auto text-[10px]'>Low</button>
                </div>
              </div>

              <div className='w-67 pl-3.5 my-auto font-bold font-money'><p>85 kg</p></div>

              <div className='w-60 my-auto text-light font-money'><p>20 kg</p></div>

              <div className='w-90 pl-4 flex align-middle justify-between pr-8'>
                <div className='flex my-auto gap-2 text-light'>
                  <p className='font-money text-[10px]'>85%</p>
                  <progress className='my-auto bg-amber-500' value="70" max="100"></progress>
                </div>
                <div className='m-auto'>
                  <button className='px-1 rounded-sm m-auto text-light border border-border cursor-pointer hover:bg-lightgreen hover:text-secondary hover:border-secondary'>+ Restock</button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
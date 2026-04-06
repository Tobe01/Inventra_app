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

          <div className='flex align-middle py-1.5 bg-input rounded-tl-lg rounded-tr-lg border border-border gap-2'>
              <div className='w-90 my-auto pl-3.5'>Ingredient</div>
              <div className='w-65 my-auto pl-3.5'>In Stock</div>
              <div className='w-65 my-auto pl-3.5'>Min. Level</div>
              <div className='w-65 my-auto pl-3.5'>Stock Level</div>
              <div className='w-25 my-auto pl-3.5'></div>
          </div>
          
          <div className='rounded-bl-lg rounded-br-lg border-x border-border'>

            <div className='flex border-b rounded-bl-lg rounded-br-lg border-border align-middle p-2 justify-items-start gap-2'>

              <div className='flex w-[351.5px] pl-3.5 align-middle gap-2'>
                <div className='my-auto flex gap-2'>
                  <div className='flex gap-2'>
                    <img src={cookies} width={30} alt='itemImage' loading='lazy' />
                    <p className='m-auto'>Parboiled Rice</p>
                  </div>
                  <button className='bg-secondary text-white p-1 rounded-sm m-auto text-[10px]'>OK</button>
                </div>
              </div>

              <div className='w-67 pl-3.5 my-auto'><p>85 kg</p></div>

              <div className='w-60 my-auto'><p>20 kg</p></div>

              <div className='w-90 pl-4 flex align-middle justify-between pr-8'>
                <div className='flex my-auto gap-2'>
                  <p>85%</p>
                  <progress className='my-auto bg-amber-500' value="70" max="100"></progress>
                </div>
                <div className='bg-blue-600'>
                  <button className='bg-purple-500 p-1 rounded-sm m-auto'>+ Restock</button>
                </div>
              </div>

            </div>

            <div className='flex border-b bg-lightred rounded-bl-lg rounded-br-lg border-border align-middle p-2 justify-items-start gap-2'>

              <div className='flex w-[351.5px] pl-3.5 align-middle gap-2'>
                <div className='my-auto flex gap-2'>
                  <div className='flex gap-2'>
                    <img src={cookies} width={30} alt='itemImage' loading='lazy' />
                    <p className='m-auto'>Parboiled Rice</p>
                  </div>
                  <button className='bg-secondary text-white p-1 rounded-sm m-auto text-[10px]'>Critical</button>
                </div>
              </div>

              <div className='w-67 pl-3.5 my-auto'><p>85 kg</p></div>

              <div className='w-60 my-auto'><p>20 kg</p></div>

              <div className='w-90 pl-4 flex align-middle justify-between pr-8'>
                <div className='flex my-auto gap-2'>
                  <p>85%</p>
                  <progress className='my-auto bg-amber-500' value="70" max="100"></progress>
                </div>
                <div className='bg-blue-600'>
                  <button className='bg-purple-500 p-1 rounded-sm m-auto'>+ Restock</button>
                </div>
              </div>

            </div>

            <div className='flex border-b bg-pendingfade rounded-bl-lg rounded-br-lg border-border align-middle p-2 justify-items-start gap-2'>

              <div className='flex w-[351.5px] pl-3.5 align-middle gap-2'>
                <div className='my-auto flex gap-2'>
                  <div className='flex gap-2'>
                    <img src={cookies} width={30} alt='itemImage' loading='lazy' />
                    <p className='m-auto'>Parboiled Rice</p>
                  </div>
                  <button className='bg-secondary text-white p-1 rounded-sm m-auto text-[10px]'>Low</button>
                </div>
              </div>

              <div className='w-67 pl-3.5 my-auto'><p>85 kg</p></div>

              <div className='w-60 my-auto'><p>20 kg</p></div>

              <div className='w-90 pl-4 flex align-middle justify-between pr-8'>
                <div className='flex my-auto gap-2'>
                  <p>85%</p>
                  <progress className='my-auto bg-amber-500' value="70" max="100"></progress>
                </div>
                <div className='bg-blue-600'>
                  <button className='bg-purple-500 p-1 rounded-sm m-auto'>+ Restock</button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
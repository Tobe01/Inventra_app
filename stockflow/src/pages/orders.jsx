import { useState } from 'react';
import { MainNav } from "../components/layout/main-nav";
import { OrdersNav } from "../components/layout/orders-nav";
import { orders } from "../data/ordersdata";

export function OrdersPage() {
  const [ status, setStatus ] = useState('Completed');

  function updateStatus(){
    if(status === 'Completed'){
      setStatus('Pending Kitchen');
    } else{
      setStatus('Completed');
    }
  }
  return (
    <div>
      <MainNav />
      <OrdersNav />

      <div className="pt-35 pb-5 bg-input h-screen font-body">
        <div className="flex flex-col space-y-5 pl-25 pr-5 pb-5">
          <div className="fixed bg-white p-4 border border-border border-t-0 top-20 left-0 pl-25 right-0">
            <div className="flex space-x-2">
              <button className="px-3.5 cursor-pointer hover:border-black border-solid hover:border bg-black text-white rounded-full font-semibold py-0.5  border border-border">
                All
              </button>
              <button className="px-3.5 hover:text-black cursor-pointer bg-white border-solid hover:border-black hover:border rounded-full font-semibold py-0.5 text-light border border-border">
                Pending
              </button>
              <button className="px-3.5 hover:text-black cursor-pointer bg-white border-solid hover:border-black hover:border rounded-full font-semibold py-0.5 text-light border border-border">
                Completed
              </button>
              <button className="px-3.5 hover:text-black cursor-pointer bg-white border-solid hover:border-black hover:border rounded-full font-semibold py-0.5 text-light border border-border">
                Pending Sync
              </button>
            </div>
          </div>

          <div className="flex flex-col mt-5 space-y-2">
            {orders.map((order) => {
              return (
                <div key={order.id} onClick={updateStatus} className="cursor-pointer border-solid hover:bg-gray-50 hover:shadow-sm hover:-translate-y-1 transition-all duration-200 bg-white p-3 rounded-lg border border-border">
                  <div className="flex align-middle justify-between">
                    <div className="flex gap-4">
                      <span className="my-auto font-light text-light font-money">
                        {order.tag}
                      </span>
                      <div>
                        <p className="p-0 m-0 font-semibold">
                          {order.items}
                        </p>
                        <p className="p-0 m-0 text-light text-sm">{status}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-light font-money text-sm my-auto">
                        {order.time}
                      </span>
                      <div className="flex  my-auto gap-2">
                        <p className="font-money font-semibold text-md">
                          {`₦${(order.amountCents / 100).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        </p>
                        <span className="">#</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

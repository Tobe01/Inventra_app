import { Link } from "react-router-dom";
import inventory from "../assets/home/screencapture-localhost-5173-inventory-2026-04-15-15_39_51.png";

export function Home() {
  return (
    <div className="flex font-body align-middle justify-center m-auto w-full h-screen bg-[radial-gradient(#8C8C8C_1px,#e0ffec_1px)] bg-size-[30px_30px]">
      <div className="pl-14 gap-2 flex flex-col  w-full align-middle justify-center m-auto">
        <div className="">
          <div className="w-[47%] h-70">
            <div className="pt-15.5 space-y-5">
              <div className="font-bold text-[44px] text-secondary p-0 m-0 leading-14">
                <p className="p-0 m-0 ">
                  Overstocked. Understocked. Never again!
                </p>
              </div>
              <div className="text-[15px] pt-5 bg-white">
                <p>
                  StockFlow puts your entire inventory on autopilot precise,
                  real-time, and built for the way your business actually runs.
                </p>
              </div>
              <div className="w-fit space-x-2.5">
                <Link to="/">
                  <button className="bg-secondary hover:bg-darkgreen scale-100 hover:scale-102 transition-transform duration-100 active:scale-95 p-2 px-7 text-white cursor-pointer rounded-sm">
                    Try Demo
                  </button>
                </Link>
                <button className="bg-white scale-100 active:-translate-y-1 border border-border p-2 px-7 text-light cursor-pointer rounded-sm">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-fit rounded-tl-2xl ml-auto flex justify-end border-solid hover:bg-gray-50 hover:shadow-sm hover:-translate-y-1 transition-all duration-200 border border-border">
          <div className="rounded-tl-2xl">
            <img
              className="rounded-tl-2xl"
              width={700}
              src={inventory}
              alt="banner"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

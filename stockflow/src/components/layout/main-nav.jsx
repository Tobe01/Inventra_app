import { useState } from "react";
import { Link } from "react-router-dom";
import cube from "../../assets/icons/proicons--cube.svg";
import grid from "../../assets/icons/proicons--grid.svg";
import logout from "../../assets/icons/logout_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg";
import documents from "../../assets/icons/proicons--document.svg";
import { Logout } from "../modals/logout";
import { Profile } from "../modals/profile";
import inventra from "../../../public/iv-logo.webp";

export function MainNav() {
  const [logOut, setLogout] = useState(false);
  const [useprofile, setUserProfile] = useState(false);

  function renderLogout() {
    setLogout(true);
  }

  function renderUserProfile() {
    setUserProfile(true);
  }

  return (
    <>
      {logOut && <Logout setLogout={setLogout} />}

      {useprofile && <Profile setUserProfile={setUserProfile} />}

      <div className="font-body bg-dark z-105 fixed left-0 top-0 bottom-0 flex flex-col align-middle justify-between py-5 px-4">
        <div className="flex flex-col align-middle justify-center space-y-5">
          <Link to="/pos">
            <div className="rounded-md cursor-pointer">
              <img
                className="rounded-md"
                width={40}
                src={inventra}
                alt="inventra-logo"
                loading="lazy"
              />
            </div>
          </Link>
          <div className="flex flex-col space-y-1">
            <Link to="/pos">
              <button className="hover:bg-neutral-700 focus:bg-gray-700 transition-transform duration-100 active:translate-y-1 relative group rounded-md text-center justify-items-center py-2.5 px-2.5 cursor-pointer">
                <img src={grid} alt="pos-icon" loading="lazy" />
                <span className="absolute -right-22 top-2 w-18 p-1 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm m-auto text-center bg-dark text-white">
                  POS
                </span>
              </button>
            </Link>

            <Link to="/inventory">
              <button className="hover:bg-neutral-700 focus:bg-gray-700 transition-transform duration-100 active:translate-y-1  group relative rounded-md text-center justify-items-center py-2.5 px-2.5 cursor-pointer">
                <img src={cube} alt="inventory-icon" loading="lazy" />
                <span className="absolute -right-22 pointer-events-none bottom-2 bg-dark text-white opacity-0 group-hover:opacity-100 duration-200 text-sm w-18 p-1 m-auto rounded-md text-center">
                  Inventory
                </span>
              </button>
            </Link>

            <Link to="/orders">
              <button className="hover:bg-neutral-700 focus:bg-gray-700 transition-transform duration-100 active:translate-y-1  group relative rounded-md text-center justify-items-center py-2.5 px-2.5 cursor-pointer">
                <img src={documents} alt="orders-icon" loading="lazy" />
                <span className="absolute pointer-events-none -right-26 bottom-2 bg-dark opacity-0 group-hover:opacity-100 duration-200 text-white text-sm w-22 p-1 m-auto text-center rounded-md whitespace-nowrap">
                  Order Feed
                </span>
              </button>
            </Link>
          </div>
          <div className="border-b border-border w-7 m-auto"></div>
        </div>

        <div className="flex flex-col align-middle justify-center space-y-1">
          <button
            onClick={renderLogout}
            className="text-center scale-100 active:scale-110 group relative justify-items-center  hover:bg-neutral-700 rounded-md py-2.5 px-2.5 cursor-pointer"
          >
            <img src={logout} alt="logout-icon" loading="lazy" />
            <span className="absolute pointer-events-none opacity-0 group-hover:opacity-100 duration-200 -right-22 top-2 bg-dark text-white text-sm w-18 p-1 m-auto text-center rounded-md">
              logout
            </span>
          </button>

          <button
            onClick={renderUserProfile}
            className="text-white scale-100 active:scale-110 group relative font-bold bg-neutral-700 rounded-md text-center justify-items-center py-2 px-2.5 cursor-pointer"
          >
            GU{" "}
            <span className="absolute whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 duration-200 left-15 bottom-1 bg-dark text-white text-sm p-1 m-auto text-center rounded-md">
              Guest User
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

import spinner from "../../assets/green-spin.svg";

export function LoggingOut(){
  return(
    <div className="modal-backdrop font-body z-50 flex align-middle justify-center m-auto">
      <div className="rounded-md my-auto">
            <button className="bg-white flex gap-2 px-5 p-2 text-center text-secondary text-[17px] rounded-sm" >
            <img src={spinner} alt="spinner" loading="lazy" /> logging out...
            </button>
      </div>
    </div>
  )
}
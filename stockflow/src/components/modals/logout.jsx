import { Link, useNavigate } from "react-router-dom";

export function Logout({logOut, setLogout, setLoggingout }) {
  
  const navigation = useNavigate();

  function cancelLogout() {
    setLogout(false);
  }

  const renderLoggingout = () => {
    if(logOut === true){
      setLogout(false);
      setLoggingout(true);
    }
    setTimeout(()=>{
      navigation('/home');
    }, 3000)
  };

  return (
    <div className="modal-backdrop font-body z-50 flex align-middle justify-center m-auto">
      <div className="bg-white rounded-md flex flex-col my-auto p-3 w-100 space-y-4">
        <div className="flex flex-1 font-bold text-20">
          <p>Logout From Admin</p>
        </div>
        <div className="flex flex-1 gap-2">
          <button onClick={renderLoggingout} className="bg-secondary hover:bg-darkgreen p-1 text-center scale-100 hover:scale-102 transition-transform duration-100 active:scale-95 cursor-pointer text-white text-[17px] w-[50%] rounded-sm">
            Yes, log out
          </button>
          <button
            onClick={cancelLogout}
            className="bg-white p-1 active:translate-x-1 hover:bg-gray-100 hover:text-black text-light border border-border cursor-pointer text-[17px] rounded-sm w-[50%]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

import { useRef } from "react";
import closeIcon from "../../assets/icons/close_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg";
import personIcon from "../../assets/icons/person_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg";
import cameraIcon from "../../assets/icons/photo_camera_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import mail from "../../assets/icons/mail_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import phone from "../../assets/icons/phone_enabled_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

export function Profile({ setUserProfile }) {
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
    }
  };

  function closeUserProfile() {
    setUserProfile(false);
  }

  return (
    <div className="font-body modal-backdrop z-150">
      <div className="bg-white ml-20 gap-2 mt-50 flex rounded-lg flex-col p-5 h-100 max-w-80 transition-transform duration-300 ease-in-out">
        <div className="font-semibold flex justify-between">
          <div>
            <p>Edit Profile</p>
          </div>

          <span
            onClick={closeUserProfile}
            className="cursor-pointer w-fit"
          >
            <img src={closeIcon} alt="closeIcon" loading="closeIcon" />
          </span>
        </div>

        <div className="m-0 flex flex-col align-middle justify-center">
          <div className="flex flex-col space-y-2 align-middle justify-center m-auto text-center">
            <div className="relative">
              <div className="rounded-full bg-gray-500">
                <img
                  src={personIcon}
                  width={100}
                  alt="personIcon"
                  loading="lazy"
                />
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current.click()}
                className="bg-gray-300 w-fit rounded-full p-1 absolute right-0 bottom-0 cursor-pointer"
              >
                <img
                  src={cameraIcon}
                  width={20}
                  alt="photoCamera"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="">
              <p className="font-bold text-20">Guest User</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-semibold text-20">
            <p>Info</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between bg-gray-300 p-1 rounded-sm">
              <span className="flex gap-2">
                <img width={18} src={mail} alt="emailIcon" loading="lazy" />
                <p>E-mail</p>
              </span>

              <span className="text-gray-500">
                <p>example@gmail.com</p>
              </span>
            </div>

            <div className="flex justify-between bg-gray-300 p-1 rounded-sm">
              <span className="flex gap-2">
                <img width={18} src={phone} alt="phoneIcon" loading="lazy" />
                <p>Phone</p>
              </span>

              <span className="text-gray-500">
                <p>+234 90*****</p>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-secondary hover:bg-darkgreen scale-100 hover:scale-102 transition-transform duration-100 active:scale-95 cursor-pointer text-white rounded-md p-2 text-center font-semibold mt-auto">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

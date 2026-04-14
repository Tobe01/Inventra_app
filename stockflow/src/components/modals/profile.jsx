import closeIcon from '../../assets/icons/close_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg';
import personIcon from '../../assets/icons/image_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg';
import logout from '../../assets/icons/logout_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg';

export function Profile({setUserProfile}){

  function closeUserProfile(){
    setUserProfile(false);
  }

  return(
    <div className="fixed font-body z-150 top-0 left-0 right-0 h-full w-80 transition-transform duration-300 ease-in-out
  ">
      <div className='bg-red-500 ml-19 max-w-80 h-screen'>

        <span onClick={closeUserProfile} className='cursor-pointer' ><img src={closeIcon} alt="closeIcon" loading="closeIcon" /></span>

        <div>
          <img src={personIcon} alt='personIcon' loading='lazy' />
          <p>Ada Obi</p>
        </div>

        <div>
          <p></p>
          <span></span>
        </div>

        <div>
          <p></p>
          <span></span>
        </div>

        <span>
          <img src={logout} alt='logout' loading='lazy' />
        </span>

      </div>
    </div>
  )
}
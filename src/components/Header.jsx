// react hooks
import {useState} from 'react'
// reac router dom
import {Link} from 'react-router-dom'
// animations
import {motion} from 'framer-motion';
//imgs
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
//context
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";
//hooks
import {useLoginGoogleFireBase} from '../Hooks/firebaseHooks/useLoginGoogleFireBase.js';

//icons
import {MdShoppingBasket} from 'react-icons/md';

 const Header = () => {

    const [islog, setislog] = useState(false);

  const {loginPopUpGoogle} = useLoginGoogleFireBase()

  const [{ user }, dispatch] = useStateValue();

  console.log(user)

  const login = async () => {
      
      const dataUser = await loginPopUpGoogle();
      const {refreshToken, providerData} = dataUser;
      
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });

      setislog(true)
      
    } 

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
    {/* desktop & tablet */}
    <div className="hidden md:flex w-full h-full items-center justify-between">
      <Link to={"/"} className="flex items-center gap-2">
        <img src={Logo} className="w-8 object-cover cursor-pointer" alt="logo" />
        <p className="text-headingColor text-xl font-bold"> City</p>
      </Link>

      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-24 "
        >
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </li>
        </ul>

        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                4
              </p>
            </div>
        </div>

        <div className="relative">
          <motion.img 
          whileTap={{scale:0.6}}
          src={islog? user.photoURL : Avatar}
          className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          alt="userprofile"
          onClick={() => login()}
          />
        </div>
      </div>
    </div>

    {/* mobile */}
    <div className="flex items-center justify-between md:hidden w-full h-full ">
      <div className="relative flex items-center justify-center">
        <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
      </div>

      <Link to={"/"} className="flex items-center gap-2">
        <img src={Logo} className="w-8 object-cover" alt="logo" />
        <p className="text-headingColor text-xl font-bold"> City</p>
      </Link>

      <div className="relative">
          <motion.img 
          whileTap={{scale:0.6}}
          src={ islog ? user.photoURL : Avatar }
          className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          alt="userprofile"
          onClick={() => login()}
          />
        </div>
    </div>
  </header>
);
}

export default Header;

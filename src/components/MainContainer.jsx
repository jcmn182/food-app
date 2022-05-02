//components
import {HomeCointainer} from './HomeCointainer'
import {MenuContainer} from "./MenuContainer";
import {CartCointainer} from "./CartCointainer";
// context
import { useStateValue } from "../context/stateProvider";


const MainContainer = () => {

  const [{ cartShow }] = useStateValue();
  

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeCointainer/>
      <MenuContainer />
      {cartShow && <CartCointainer />}
    </div>
  );
};

export default MainContainer;


// react hooks
//import React, { useEffect, useRef, useState } from "react";
//components
import {HomeCointainer} from './HomeCointainer'
import {MenuContainer} from "./MenuContainer";
//import CartContainer from "./CartContainer";
//import RowContainer from "./RowContainer";
//framer motion
import { motion } from "framer-motion";
// icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// context
//import { useStateValue } from "../context/StateProvider";


const MainContainer = () => {
  //const [{ foodItems, cartShow }, dispatch] = useStateValue();
  //const [scrollValue, setScrollValue] = useState(0);

  //useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeCointainer/>

      <MenuContainer />

      {/*cartShow && <CartContainer />*/}
    </div>
  );
};

export default MainContainer;

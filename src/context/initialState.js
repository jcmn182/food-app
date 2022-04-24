import { localStorageUser } from "../utils/localStorage";

const userInfo = localStorageUser();
/*const cartInfo = fetchCart();*/

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  //cartItems: cartInfo,
};

import { localStorageUser, fetchdataFood, fetchCart } from "../utils/localStorage";

const userInfo = localStorageUser();
const dataFood = fetchdataFood();
const cartInfo = fetchCart()

export const initialState = {
  user: userInfo,
  foodItems: dataFood,
  cartShow: false,
  cartItems: cartInfo,
};

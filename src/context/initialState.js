import { localStorageUser, fetchdataFood } from "../utils/localStorage";

const userInfo = localStorageUser();
const dataFood = fetchdataFood();

export const initialState = {
  user: userInfo,
  foodItems: dataFood,
  cartShow: false,
  //cartItems: cartInfo,
};

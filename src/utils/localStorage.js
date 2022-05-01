export const localStorageUser = () => {
    const userInfo =
    sessionStorage.getItem("user") !== "undefined"
        ? JSON.parse(sessionStorage.getItem("user"))
        : sessionStorage.clear();
  
    return userInfo;
  };

export const fetchdataFood = () => {
    const dataFood =
    sessionStorage.getItem("dataFood") !== "undefined"
        ? JSON.parse(sessionStorage.getItem("dataFood"))
        : sessionStorage.clear();
  
    return dataFood
  };
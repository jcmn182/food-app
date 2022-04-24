export const localStorageUser = () => {
    const userInfo =
    sessionStorage.getItem("user") !== "undefined"
        ? JSON.parse(sessionStorage.getItem("user"))
        : sessionStorage.clear();
  
    return userInfo;
  };
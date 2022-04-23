import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

export const useLoginGoogleFireBase =  () =>{

 
    const loginPopUpGoogle =  async () =>{
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
     return {refreshToken, providerData}

    };

  

   
    return {loginPopUpGoogle}
}
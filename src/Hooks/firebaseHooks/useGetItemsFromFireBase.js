import {useState,useEffect} from 'react'

import {
    collection,
    getDocs,
    orderBy,
    query,
  } from "firebase/firestore";
  import { firestore } from "../../firebase/firebase.config";

export const useGetItemsFromFireBase = () => {
      
        const getAllFoodItems = async () => {
            const items = await getDocs(
              query(collection(firestore, "foodItems"), orderBy("id", "desc"))
            );
          
            const dataFood = items.docs.map((doc) => doc.data());

           return {dataFood}

          };

 
    
      return{getAllFoodItems}

}

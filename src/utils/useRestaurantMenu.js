import { useEffect } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu = (id) => {
  useEffect(() => {
    console.log("Hemant");
    fetchData();
  }, []);

  const fetchData = async () => {
  const data=  await fetch(MENU_API+id);
  const json=await data.json();

  console.log("json",json);

  };
};

export default useRestaurantMenu;

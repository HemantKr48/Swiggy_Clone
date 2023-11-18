import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetails = () => {
  const { id } = useParams();
  const menu_items = useRestaurantMenu(id);
  // const params=useParams();//Object
  // console.log(id);
  // console.log(params);
  return (
    <>
      <h1>RestaurantDetails</h1>
      <h2>Restaurant Id:{id}</h2>
    </>
  );
};

export default RestaurantDetails;

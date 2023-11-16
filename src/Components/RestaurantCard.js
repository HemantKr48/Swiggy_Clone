import { Img_Url } from "../utils/constants";

export const RestaurantCard = (props) => {
  //console.log("props", props);
  //Object Destructuring
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props.details;
  return (
    <div className="restaurant-card">
      <img src={`${Img_Url}${cloudinaryImageId}`} />
      <div className="restaurant-details">
        <div>
          <h2>{name}</h2>
          <h3>{cuisines}</h3>
          <button className="Menu">Open Menu</button>
        </div>
        <div>
          <h3>{avgRating}</h3>
          <h3>{costForTwo}</h3>
        </div>
        
      </div>
    </div>
  );
};

import restList from "../utils/mockData";
import restData from "../utils/mockData";
const RestroCard = ({ restData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restData?.info;
  return (
    <div className="restcard">
      <img
        id="dishpicture"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <div className="restdetails">
        <div>
          <strong>{name}</strong>
        </div>
        <div>{avgRating + "⭐" + "." + restData?.info?.sla?.slaString}</div>
        <div>{cuisines.join(", ")}</div>
        <div>{costForTwo}</div>
      </div>
    </div>
  );
};

export default RestroCard;

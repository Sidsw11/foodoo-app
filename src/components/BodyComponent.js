import RestroCard from "./RestroCard.js";
import restList from "../utils/mockData.js";
const BodyComponent = () => {
    return (
      <div className="bodycomp">
        <div>
          <button id="srcbtn">Search</button>
        </div>
        <div className="rest_container">
          {restList.map((info)=> (<RestroCard restData={info}/>))}
          
        </div>
      </div>
    );
  };

  export default BodyComponent;
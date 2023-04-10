import React from "react";
const WhoToFollowListItem = (
    {
      who
    }
) => {
  return(
      <li className="list-group-item" style={{backgroundColor: "#14171A", color: "white"}}>
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" height={48} width={48} src={who.avatarIcon} alt={"img"}/>
          </div>
          <div className="col-6">
            <div className="fw-bold">{who.userName}</div>
            <div>@{who.handle}</div>
          </div>
          <div className="col-4">
            <button className="btn rounded-pill float-end fw-bolder" style={{backgroundColor:"greenyellow", color: "black"}}>More</button>
          </div>
        </div>
      </li>
  );
};
export default WhoToFollowListItem;

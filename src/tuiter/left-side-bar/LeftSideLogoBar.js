const LeftSideLogoBar = () => {
  return(
      <div>
        <div className={"row fs-1"} style={{"color": "green"}}>
          <i className="bi bi-bank"/>
        </div>
        <div className={"row fs-1"} style={{"color": "greenyellow"}}>
          <i className="bi bi-cash-coin"/>
        </div>
        <div className={"row fs-1"} style={{"color": "green"}}>
          <i className="bi bi-currency-dollar"/>
        </div>
        <div className={"row fs-1"} style={{"color": "greenyellow"}}>
          <i className="bi bi-piggy-bank-fill"/>
        </div>
      </div>
  );

}
export default LeftSideLogoBar;
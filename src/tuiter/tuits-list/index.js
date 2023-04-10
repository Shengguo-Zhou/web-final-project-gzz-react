import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitsListItem
  from "./tuits-list-item";
import {findTuitsThunk}
  from "../../services/tuits-thunks";


const TuitsList = () => {
  const {tuits, loading} = useSelector(
      state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])


  return (
      <ul className="list-group" style={{color: "white", backgroundColor: "black", borderColor: "white"}}>
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }

        {tuits.map(tuit =>
            <TuitsListItem
                key={tuit._id}
                tuit={tuit}/>)}
      </ul>
  )
}

export default TuitsList;
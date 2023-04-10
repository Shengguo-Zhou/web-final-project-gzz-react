import React, {useEffect} from "react";
import PostSummaryItem
  from "./post-summary-item";
// import who from '../data/who.json'
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return(
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item" style={{backgroundColor: "#14171A", color: "white"}}>
              Loading...
            </li>
        }
        {
          tuits.map(post =>
              <PostSummaryItem
                  key={post._id} post={post}/> )
        }
      </ul>
  );
};
export default PostSummaryList;


import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();

  const toggleLike = () => {
    // const new_liked = setLiked(!liked);
    dispatch(
        updateTuitThunk({
          ...tuit,
          liked: !tuit.liked,
          likes: !tuit.liked ? tuit.likes + 1 : tuit.likes - 1,
        }),
    );
  };

  return(
      <div className="row">
        <div className="col">
          <i className="bi bi-chat pe-2"/>{tuit.replies}
        </div>
        <div className="col">
          <i className="bi bi-repeat pe-2"/>{tuit.retuits}
        </div>
        <div className="col">
          <i
              onClick={toggleLike}
              className={`bi bi-heart${tuit.liked ? '-fill' : ''} me-2 ${
                  tuit.liked ? 'text-danger' : ''
              }`}
          ></i>
          {tuit.likes}
        </div>
        <div className="col">
          <i className="bi bi-share"/>
        </div>
      </div>
  )
}

export default TuitStats;
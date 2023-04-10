import React from "react";
const PostItem = ({postDetail}) => {
  return(
      <li className="list-group-item border-secondary">
        <div className="row">
          <div className="col-2">
            <img className="float-end rounded-circle" height={50} width={50} src={postDetail.userImg} alt="userImage"/>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-11">
                <span className="fw-bolder">{postDetail.userName} </span>
                <i className="bi bi-patch-check-fill text-primary"/>
                <span className="text-secondary"> @{postDetail.handle} · {postDetail.time}</span>
              </div>
              <div className="col-1 my-10 mx-auto"><i className="bi bi-three-dots text-secondary"/></div>
            </div>

            <div className="mb-1 mt-1">{postDetail.message}</div>

            <div className="border border-secondary rounded">
              <img className="rounded" src={postDetail.img} width="100%"
                   alt="postImage"/>
                {postDetail.title
                  ? <div className="border-secondary p-1">{postDetail.title}</div>
                  : ""}
                {postDetail.content
                  ? <div className="text-secondary p-1">{postDetail.content}</div>
                  : ""}
                {postDetail.source
                  ? <div className="text-secondary p-1"><i className="bi bi-link-45deg"/> {postDetail.source}</div>
                  : ""}
            </div>

            <div className="row text-secondary pt-2">
              <div className="col-3"><i className="bi bi-chat"/> {postDetail.comment}</div>
              <div className="col-3"><i className="bi bi-repeat"/> {postDetail.retweet}</div>
              <div className="col-3"><i className="bi bi-heart"/> {postDetail.like}</div>
              <div className="col-3"><i className="bi bi-share"/></div>
            </div>
          </div>
        </div>
      </li>
  );
};
export default PostItem;
import React from "react";
import postsArray from './posts.json';
import PostItem from "./postItem";
import who from '../data/who.json'

const PostList = () => {
  return(
      <ul className="list-group">
        {postsArray.map(postDetail => <PostItem key={who._id} postDetail={postDetail} />)}
      </ul>
  );
};
export default PostList;

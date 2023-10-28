import React, { useState } from "react";
import { data } from "../posts.data";
const Posts = (props) => {
  //   {namePost, comments, likes, image} = props;
  const [like, setLike] = useState(props.likes);
  return (
    <div className="posts-wrapper">
      <div className="post-content">
        <h1>{props.name}</h1>
        <img src={props.image} />
        <h2>Comments: </h2>
        {props.comments.map((c) => (
          <div>
            {c} {like}
            <button onClick={() => setLike(like + 1)}>Like</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

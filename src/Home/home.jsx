import React from "react";
import Posts from "../Posts/posts";
import { data } from "../posts.data";
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-header">
        {data.map((p) => {
          return (
            <Posts
              name={p.name}
              comments={p.comments}
              likes={p.likes}
              image={p.image}
            ></Posts>
          );
        })}
      </div>
    </div>
  );
};
export default Home;

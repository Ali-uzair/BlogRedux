import React, { useEffect } from "react";
import Items from "./Items";
import "./Posts.css";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { getPosts } from "../api/PostsApi";
import { useSelector } from "react-redux";

const Posts = (props) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.posts.posts);

  useEffect(() => {
    getPosts().then((res) => dispatch(actionCreators.getdata(res.posts)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      {articles?.length === 0 ? (
        <div className="divStyle">No Post Available </div>
      ) : (
        articles?.map((element) => {
          return (
            <div className="row" key={element.id}>
              <Items
                id={element.id}
                title={element.title}
                description={element.description}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Posts;

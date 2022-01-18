import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [lopost, setloPosts] = useState([]);
  useEffect(() => {
    const fetchedPosts = async () => {
      const request = await fetch(
        "https://myinstagram-e73be-default-rtdb.firebaseio.com/posts.json"
      );
      const response = await request.json();
      const loadedposts = [];
      for (const key in response) {
        loadedposts.push({
          id: key,
          name: response[key].name,
          logo: response[key].logo,
          image: response[key].image,
        });
      }
      setloPosts(loadedposts);
    };
    fetchedPosts();
  }, []);
  return (
    <div>
      {lopost.map((user) => (
        <Post
          key={user.id}
          name={user.name}
          logo={user.logo}
          image={user.image}
        />
      ))}
    </div>
  );
};

export default Posts;

import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((e) => console.log(e))
      .finally(setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <div>Loading...</div>}
      {posts.map((post) => (
        <div key={post.id}>
          <strong>{post.id}. </strong>
          {post.title}
        </div>
      ))}
    </div>
  );
}

export default Posts;

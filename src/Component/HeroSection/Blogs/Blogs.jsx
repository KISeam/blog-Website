import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import Categorises from "../Categorises/Categorises";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      <Categorises />
      <div>
        {blogs.map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

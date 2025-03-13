import React from "react";
import { FaGripfire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const Blog = ({ blog }) => {
  const { title, author, publish_date, description, cover_img } = blog;

  // function getRandomColor() {
  //   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   return `#${randomColor.padStart(6, "0")}`;
  // }

  // let borderClolor = getRandomColor();

  return (
    <div>
      <div
        className="mb-10 border-l-4 border-amber-500 rounded-lg shadow-2xl p-6"
        // style={{ borderLeftColor: borderClolor }}
      >
        <div className="text-black">
          <div className="flex flex-col">
            <div className="flex gap-6 items-center border-b-2 border-dotted border-gray-300 pb-6">
              <div className="overflow-hidden rounded-xl w-40 h-30">
                <img
                  className="w-full h-full object-cover"
                  src={cover_img}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    {title}
                  </h1>
                  <div className="flex gap-2.5 items-center">
                    <img
                      className="w-12 rounded-full"
                      src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2024/09/2151100233-150x150.webp"
                      alt=""
                    />
                    <div className="text-gray-600">
                        <h5 className="font-semibold">{author.name}</h5>
                      <p className="text-sm">{publish_date}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500">{description}</p>
              </div>
            </div>
            <div className="flex justify-between pt-4 text-gray-700">
              <div className="flex gap-4">
                <p>
                  <span className="mr-1 text-amber-500">#</span>Lifestyle
                </p>
                <p>
                  <span className="mr-1 text-pink-500">#</span>Trending
                </p>
              </div>
              <div className="flex gap-4">
                <p className="flex items-center gap-1">
                  <FaGripfire /> 233 Views
                </p>
                <p className="flex items-center gap-1">
                  <IoMdTime /> 3 Min Read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

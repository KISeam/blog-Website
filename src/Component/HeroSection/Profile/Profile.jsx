import React from "react";

const Profile = () => {
  return (
    <div className="w-[30%] mx-auto">
      <div className="sticky top-12">
        <div className="bg-white shadow-xl rounded-lg py-6 px-4 border-gray-300 border-1">
          <div className="flex flex-col gap-4 justify-center items-center overflow-hidden">
            <div className="rounded-full overflow-hidden border-4 border-gray-300 w-[120px] h-[120px]">
              <img
                src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2024/09/2151100233-150x150.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-2 text-gray-600">
                <h3
                  className="font-semibold
 text-center text-lg"
                >
                  @RivaxStudio
                </h3>
                <p className="text-base">We become what we think about!</p>
              </div>
              <button className="w-fit btn rounded-3xl border-1 border-gray-300 bg-transparent text-black hover:text-white hover:bg-black">
                Follow Me
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <marquee behavior="" direction="">
                <div className="flex gap-4">
                  <img
                    className="w-[150px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed.webp"
                    alt=""
                  />
                  <img
                    className="w-[150px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed-4.webp"
                    alt=""
                  />
                  <img
                    className="w-[150px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed-13.webp"
                    alt=""
                  />
                  <img
                    className="w-[150px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed-4.webp"
                    alt=""
                  />
                  <img
                    className="w-[150px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed.webp"
                    alt=""
                  />
                </div>
              </marquee>
              <marquee behavior="" direction="right">
                <div className="flex gap-4">
                  <img
                    className="w-[130px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed.webp"
                    alt=""
                  />
                  <img
                    className="w-[130px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed-4.webp"
                    alt=""
                  />
                  <img
                    className="w-[130px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed-13.webp"
                    alt=""
                  />
                  <img
                    className="w-[130px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed-4.webp"
                    alt=""
                  />
                  <img
                    className="w-[130px] rounded-lg object-cover"
                    src="https://demo.rivaxstudio.com/syron/main/wp-content/uploads/2025/01/pikaso_embed.webp"
                    alt=""
                  />
                </div>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

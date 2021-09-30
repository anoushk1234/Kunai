//import required packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
const Hit = () => {
  const prodURL = "https://kunaikit.herokuapp.com";
  // console.log(cookieCutter.get('username'));
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getTitle() {
      const res = await axios.get("https://kunaikit.herokuapp.com/api/getkit/");
      console.log(res.data["items"].length);
      setData(res.data["items"]);
      console.log(data);
      //console.log(title, content, username, userId, userImage);
    }

    getTitle();
  }, []);
  return data.map((item, index) => {
    return (
      <div className="mx-4 w-full sm:w-9/12">
        <div className="p-2 my-6 sm:p-4 bg-white  shadow-2xl border-4 border-black rounded-md">
          <div>
            <h1 className="mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black  title-font">
              {JSON.parse(item)["title"]}
            </h1>
          </div>
          <div
            onClick={() => {
              window.location.href =
                prodURL + "/#/kit/" + JSON.parse(item)["id"];
            }}
          >
            <p className="py-2 text-base leading-relaxed text-gray-700 ">
              {/*{ReactHtmlParser(
                  JSON.parse(item)["markdown_data"].substring(0, 200)
                )}*/}
              <ReactMarkdown>
                {JSON.parse(item)["markdown_data"].substring(0, 210) + "..."}
              </ReactMarkdown>
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flew-row gap-4">
              <div className="relative w-12 h-12">
                <img
                  className="rounded-full border border-gray-100 shadow-sm"
                  src={JSON.parse(item)["profile_image"]}
                  alt="User Avatar"
                  width={320}
                  height={320}
                />
              </div>
              <div>
                <h1 className="text-base font-medium leading-relaxed max-w-prose text-gray-700 ">
                  {JSON.parse(item)["user"]}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
export default Hit;

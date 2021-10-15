//import required packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ShareModal from "./sharemodal";
const Kit = ({ data, setData, prodURL, item, loggeduser }) => {
  //const [upvotesAPI, setUpvotesAPI] = useState("");
  const [upvoted, setUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(0);
  const [hasupvoted, setHasupvoted] = useState(false);
  const upvotesAPI = `${prodURL}/api/votes/${item["id"]}`;
  //console.log(upvotesAPI + "upvotesAPI" + item["id"]);
  const isdashboard = window.location.href.includes("/dashboard");
  const kitRoute = prodURL + "/#/kit/" + item["id"];
  useEffect(() => {
    async function fetchData() {
      const upv = await axios.get(upvotesAPI);
      //console.log(upv.data);
      setUpvotes(upv.data["upvotes"]);
      //console.log(upv.data["users_upvoted"]);
      upv.data["users_upvoted"].includes(loggeduser)
        ? setUpvoted(true)
        : setUpvoted(false);
    }
    fetchData();
  }, [loggeduser, hasupvoted]);

  useEffect(() => {
    axios
      .get(upvotesAPI)
      .then((setupv) => {
        setupv.data["users_upvoted"].includes(loggeduser)
          ? setHasupvoted(true)
          : setHasupvoted(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggeduser, upvotesAPI]);

  return (
    <div className="mx-4 w-full sm:w-9/12">
      <div className="p-2 my-6 sm:p-4 bg-wKite  shadow-2xl border-4 border-black rounded-md">
        <div
          onClick={() => {
            window.location.href = kitRoute;
          }}
        >
          <h1 className="mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black  title-font">
            {item["title"]}
          </h1>
        </div>
        <div
          onClick={() => {
            window.location.href = kitRoute;
          }}
        >
          <p className="py-2 pointer-events-none text-base leading-relaxed text-gray-700 ">
            <ReactMarkdown>
              {item["markdown_data"].substring(0, 210) + "..."}
            </ReactMarkdown>
          </p>
        </div>

        <div className="flex flew-row justify-between ">
          <div className="relative w-12 h-12 flex ">
            <img
              className="rounded-full border  border-gray-100 shadow-sm"
              src={item["profile_image"]}
              alt="User Avatar"
              width={320}
              height={320}
            />
            <h1 className="text-base ml-3 font-medium leading-relaxed max-w-prose text-gray-700 ">
              {item["user"]}
            </h1>
          </div>

          <div
            className="flex flex-row justify-end"
            style={{ alignItems: "center" }}
          >
            <ShareModal
              url={prodURL + "/#/kit/" + item["id"]}
              title={item["title"]}
            />

            {hasupvoted && isdashboard ? (
              <span className="flex mx-4  rounded-lg w-17 p-2 bg-white border-2  border-black flex-row justify-around">
                <button
                  className="flex"
                  onClick={() => {
                    axios.get(prodURL + "/api/getuser/").then((res) => {
                      if (res.status === 200) {
                        axios
                          .get(prodURL + "/api/up/" + item["id"])
                          .then(() => {
                            // setUpvoted(!upvoted);

                            setHasupvoted(!hasupvoted);
                          });
                      } else {
                        window.location.href = prodURL + "/#/signin";
                      }
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 flex"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 11l7-7 7 7M5 19l7-7 7 7"
                    />
                  </svg>
                </button>
                <p className="flex font-semibold text-black text-xl">
                  {upvotes}
                </p>
              </span>
            ) : (
              <span className="flex mx-4 bg-black rounded-lg w-17 p-2 border-2 border-black flex-row justify-around">
                <button
                  className="flex"
                  onClick={() => {
                    axios.get(prodURL + "/api/up/" + item["id"]).then(() => {
                      setUpvoted(!upvoted);
                      setHasupvoted(!hasupvoted);
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 flex"
                    fill="black"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 11l7-7 7 7M5 19l7-7 7 7"
                    />
                  </svg>
                </button>
                <p className="flex font-semibold text-white text-xl">
                  {upvotes}
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kit;

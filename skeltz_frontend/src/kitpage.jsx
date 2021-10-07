import { useParams } from "react-router-dom";
import NavbarPrivate from "./components/NavbarPrivate";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Cookies from "js-cookie";
import Dashboard from "./dashboard";
//import Confetti from "./components/itsconfetti";
// import { remark } from "remark";
// import html from "remark-html";
// export async function markdownToHtml(markdown) {
//   const result = await remark().use(html).process(markdown);
//   console.log(result.toString());
//   return result.toString();
// }
export default function KitPage() {
  const [kit, setKit] = useState({});
  const [passData, setPassData] = useState([]);
  // const [playConfetti, setPlayConfetti] = useState(true);
  //play confetti the first time the user makes a kit
  // useEffect(() => {
  //   setPlayConfetti(true);
  // }, [playConfetti,window.onload]);
  const [upvotes, setUpvotes] = useState(0);
  const [hasupvoted, setHasupvoted] = useState(false);
  const [loggeduser, setLoggeduser] = useState("");
  const [upvoted, setUpvoted] = useState(false);
  const prodURL = "https://kunaikit.herokuapp.com";
  // const [downvotes, setDownvotes] = useState(0);
  const { slug } = useParams();
  const API = `https://kunaikit.herokuapp.com/api/getkit/${slug}`;
  const upvotesAPI = `https://kunaikit.herokuapp.com/api/votes/${slug}`;
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API);
      setKit(JSON.parse(response.data["kit"]));
      const upv = await axios.get(upvotesAPI);
      console.log(upv.data);
      setUpvotes(upv.data["upvotes"]);
      console.log(upv.data);
      upv.data["users_upvoted"].includes(loggeduser)
        ? setHasupvoted(true)
        : setHasupvoted(false);
      //setDownvotes(upvotes.data["downvotes"]);
      console.log(kit);
    }
    fetchData();
  }, [slug, upvoted]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(prodURL + "/auth/userdetails/");
      setLoggeduser(response.data["user_id"]);
    }
    fetchData();
  }, [slug]);

  return (
    <div>
      <header>
        <NavbarPrivate setPassData={setPassData} />
      </header>
      <body>
        {passData.length > 0 ? (
          <Dashboard passData={passData} />
        ) : (
          <div className="my-4 flex justify-center">
            <div className="mx-4 w-full sm:w-9/12">
              <div className="p-2 sm:p-4 bg-white shadow-2xl border-4 border-black rounded-md">
                <div>
                  <h1 className="mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black title-font">
                    {kit["title"] ? kit["title"] : "Loading"}
                  </h1>
                </div>
                <div>
                  <p className="py-2 text-base leading-relaxed text-gray-700">
                    <ReactMarkdown>
                      {kit["markdown_data"] ? kit["markdown_data"] : "Loading"}
                    </ReactMarkdown>
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flew-row gap-4">
                    <div class="relative w-12 h-12">
                      <img
                        className="rounded-full border border-gray-100 shadow-sm"
                        src={kit["profile_image"]}
                        alt="User Avatar"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <h1 className="text-base font-medium leading-relaxed max-w-prose text-gray-700">
                        {kit["user"]}
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-row align-middle">
                    {kit["user_id"] === loggeduser ? (
                      <button
                        type="button"
                        onClick={() => {
                          axios
                            .get(prodURL + "/api/deletekit/" + slug)
                            .then(() => {
                              window.alert("Kit deleted");
                              window.location.href = prodURL + "#/";
                            })
                            .catch((err) => {
                              window.alert(err);
                            });
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 flex"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    ) : (
                      <></>
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 flex"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    {hasupvoted ? (
                      <span className="flex mx-4  rounded-lg w-17 p-2  border-black flex-row justify-around">
                        <button
                          className="flex"
                          onClick={() => {
                            axios
                              .get(prodURL + "/api/up/" + kit["id"])
                              .then(() => {
                                setUpvoted(!upvoted);
                              });
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 flex"
                            fill="black"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
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
                    ) : (
                      <span className="flex mx-4 bg-black rounded-lg w-17 p-2  border-black flex-row justify-around">
                        <button
                          className="flex"
                          onClick={() => {
                            axios
                              .get(prodURL + "/api/up/" + kit["id"])
                              .then(() => {
                                setUpvoted(!upvoted);
                              });
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 flex"
                            fill="white"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
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
          </div>
        )}
      </body>
    </div>
  );
}

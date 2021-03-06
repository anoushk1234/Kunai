import { useParams } from "react-router-dom";
import NavbarPrivate from "./components/NavbarPrivate";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
//import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Dashboard from "./dashboard";
import ShareModal from "./components/sharemodal";
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
      console.log(upv.data["users_upvoted"]);
      upv.data["users_upvoted"].includes(loggeduser)
        ? setUpvoted(true)
        : setUpvoted(false);
      //setDownvotes(upvotes.data["downvotes"]);
      console.log(kit);
    }
    fetchData();
  }, [slug, loggeduser, hasupvoted]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(prodURL + "/auth/userdetails/");
      setLoggeduser(response.data["user_id"]);
    }
    fetchData();
  }, [slug]);

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
    <div>
      <head>
        <style>
          {`
           #markdown-container a {
              text-decoration: underline;
              text-decoration-color: black;
              font-weight: bold;
            }
          `}
        </style>
      </head>
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
                  <p
                    id="markdown-container"
                    className="py-2 text-base leading-relaxed text-gray-700"
                  >
                    <ReactMarkdown
                      children={
                        kit["markdown_data"] ? kit["markdown_data"] : "Loading"
                      }
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                    />
                    <Helmet>
                      <title>{kit["title"] + " - Skeltz"}</title>
                      <link
                        rel="icon"
                        href="https://res.cloudinary.com/dev-connect/image/upload/v1634297640/skeltz-logo-002_wk7msl.png"
                      />
                      <meta
                        id="meta-description"
                        name="description"
                        content="Create and find learning starter kits"
                      />
                      <meta
                        id="meta-og-title"
                        property="og:title"
                        content={kit["title"]}
                      />
                      <meta
                        id="meta-og-description"
                        property="og:description"
                        content={kit["markdown_data"]}
                      />
                       <meta
                        id="twitter"
                        name="twitter:card"
                        content="summary"
                      />
                      <meta
                        id="meta-og-image"
                        property="og:image"
                        content="https://res.cloudinary.com/dev-connect/image/upload/v1634297640/skeltz-logo-002_wk7msl.png"
                      />
                      <meta
                        id="meta-og-url"
                        property="og:url"
                        content={window.location.href}
                      />
                      <meta
                        id="meta-og-type"
                        property="og:type"
                        content="website"
                      />
                      <meta
                        id="meta-og-site-name"
                        property="og:site_name"
                        content="Skeltz.xyz"
                      />
                     
                      <meta
                        id="twitter"
                        name="twitter:image"
                        content="https://res.cloudinary.com/dev-connect/image/upload/v1634297640/skeltz-logo-002_wk7msl.png"
                      />
                      <meta
                        id="twitter"
                        name="twitter:title"
                        content={kit["title"]}
                      />
                      <meta
                        id="twitter"
                        name="twitter:site"
                        content="@useSkeltz"
                      />
                      <meta
                        id="twitter"
                        name="twitter:creator"
                        content={"@"+kit["user"]}
                      />
                      <meta
                        id="twitter"
                        name="twitter:description"
                        content={kit["markdown_data"]}
                      />
                    </Helmet>
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
                  <div className="flex flex-row">
                    {kit["user_id"] === loggeduser ? (
                      <button
                        type="button"
                        onClick={() => {
                          axios
                            .get(prodURL + "/api/deletekit/" + slug)
                            .then(() => {
                              window.alert("Kit deleted");
                              window.location.href = prodURL + "#/dashboard";
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
                    <ShareModal
                      url={window.location.href}
                      title={kit["title"]}
                    />
                    {hasupvoted ? (
                      <span className="flex mx-4  rounded-lg w-17 p-2 bg-white border-2  border-black flex-row justify-around">
                        <button
                          className="flex"
                          onClick={() => {
                            axios
                              .get(prodURL + "/api/up/" + kit["id"])
                              .then(() => {
                                //setUpvoted(!upvoted);
                                setHasupvoted(!hasupvoted);
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
                            axios
                              .get(prodURL + "/api/up/" + kit["id"])
                              .then(() => {
                                //setUpvoted(!upvoted);
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
          </div>
        )}
      </body>
    </div>
  );
}

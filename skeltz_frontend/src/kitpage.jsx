import { useParams } from "react-router-dom";
import NavbarPrivate from "./components/NavbarPrivate";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
// import { remark } from "remark";
// import html from "remark-html";
// export async function markdownToHtml(markdown) {
//   const result = await remark().use(html).process(markdown);
//   console.log(result.toString());
//   return result.toString();
// }
export default function KitPage() {
  const [kit, setKit] = useState({});
  const [upvotes, setUpvotes] = useState(0);
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
      //setDownvotes(upvotes.data["downvotes"]);
      console.log(kit);
    }
    fetchData();
  }, [slug]);

  return (
    <div>
      <header>
        <NavbarPrivate />
      </header>
      <body>
        <div className="my-4 flex justify-center">
          <div className="mx-4 w-full sm:w-9/12">
            <div className="p-2 sm:p-4 bg-white shadow-2xl border-2 border-gray-500">
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
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
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
                  </div>
                  <p className="font-semibold text-black text-xl">
                    {upvotes}
                  </p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

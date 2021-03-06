import { useState } from "react";
import axios from "axios";
import NavbarPrivate from "./components/NavbarPrivate";
import { MarkdownEditor } from "rendition/dist/extra/MarkdownEditor";
import { Markdown } from "rendition/dist/extra/Markdown";
import { Provider } from "rendition";
import Cookies from "js-cookie";
import Dashboard from "./dashboard";
//import cookies from "next-cookies";
function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState(`
  ## Create your kit here in markdown
  `);
  const [passData, setPassData] = useState([]);
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const [previewtoggle, setPreviewtoggle] = useState(false);
  const API = "https://kunaikit.herokuapp.com/api/addkit/";
  const prodURL = "https://kunaikit.herokuapp.com/";
  const userAPI = "https://kunaikit.herokuapp.com/auth/userdetails/";
  // const allCookies = cookies();
  // console.log(allCookies);
  // axios
  //   .get(userAPI)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const addKit = () => {
    if (category === "" || category === "Select a category") {
      alert("Select a category!");
    } else {
      const postData = {
        title: title,
        markdown_data: body,
        categories: category,
      };

      axios
        .post(API, postData, {
          headers: {
            "X-CSRFToken": Cookies.get("csrftoken"),
          },
        })
        .then((res1) => {
          console.log(res1);
          console.log(JSON.parse(res1["data"]["kit"])["id"]);
          console.log(res1.data["kit"]["id"]);
          const id_num = JSON.parse(res1.data["kit"])["id"];
          window.location.href = `${prodURL}#/kit/${id_num}`;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;
  return (
    <div>
      <NavbarPrivate setPassData={setPassData} />
      {passData.length > 0 ? (
        <Dashboard passData={passData} />
      ) : (
        <div className="flex flex-row justify-center">
          <div className="my-4 mx-4 max-w-4xl min-h-screen flex flex-1 flex-col p-10 border-solid border-black border-4 rounded-md">
            <input
              type="text"
              className="my-2 border-solid border-black border-4 rounded-md"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            {previewtoggle ? (
              <Provider>
                <Markdown children={body} />
              </Provider>
            ) : (
              <Provider>
                <MarkdownEditor
                  className="my-2 border-solid border-black border-4 rounded-md"
                  placeholder="Make your kit"
                  value={body}
                  onChange={setBody}
                />
              </Provider>
            )}
            <span className="flex-row justify-between">
              <select
                name="categories"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                className="my-2 max-w-xs border-solid border-black border-4 rounded-md"
              >
                <option>Select a category</option>
                <option value="Web Dev">Web Dev</option>
                <option value="Data Science">Data Science</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Writing">Writing</option>
                <option value="Web 3">Web 3</option>
                <option value="Bootstrapping">Bootstrapping</option>
                <option value="Startups">Startups</option>
              </select>
              <button onClick={() => setPreviewtoggle(!previewtoggle)}>
                Preview
              </button>
              <button
                className="my-2 mx-2 p-2 max-w-md bg-black rounded-lg text-white"
                onClick={addKit}
              >
                Submit
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Create;

// Schema
// {"title":"testing addkit","markdown_data":"### Testing *addkit*","categories":"Web dev","cat_id":"1"}

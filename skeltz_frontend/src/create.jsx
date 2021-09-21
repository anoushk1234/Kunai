import { useState } from "react";
import axios from "axios";
import NavbarPrivate from "./components/NavbarPrivate";
//import cookies from "next-cookies";
function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const API = "https://kunaikit.herokuapp.com/api/addkit/";
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
        cat_id: "1",
      };

      axios
        .post(API, postData, {
          headers: {
            "X-CSRFTOKEN": "iq5Meqm2tVbJKlHlbkLn3hRX6PgKgEQuSWlQbmGcpXhoNPREuuGdtoAb041NExUi",
          },
        })
        .then((res1) => console.log(res1));
    }
  };

  return (
    <div>
      <NavbarPrivate />
      <div className="my-4 flex justify-center flex-col">
        <input
          type="text"
          className="my-2"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          className="my-2"
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <select
          name="categories"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select a category</option>
          <option value="Web Dev">Web Dev</option>
          <option value="DIY">DIY</option>
        </select>
        <button onClick={addKit}>Submit</button>
      </div>
    </div>
  );
}

export default Create;

// Schema
// {"title":"testing addkit","markdown_data":"### Testing *addkit*","categories":"Web dev","cat_id":"1"}

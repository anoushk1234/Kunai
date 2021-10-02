import React from "react";
import NavbarPrivate from "./components/NavbarPrivate";
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./dashboard";

export default function Account() {
  const [twitterprofile, setTwitterprofile] = useState({});
  const [passData, setPassData] = useState([]);
  const userAPI = "https://kunaikit.herokuapp.com/api/getuser/";
  function remove_normal(url) {
    return url.replace("_normal", "");
  }
  useEffect(() => {
    axios.get(userAPI).then((res) => {
      setTwitterprofile(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <NavbarPrivate setPassData={setPassData} />
      </div>
      {passData.length > 0 ? (
        <Dashboard passData={passData} />
      ) : (
        <div class="flex items-center h-screen w-full text-center justify-center">
          <div class="w-5/12">
            <div className="p-2 sm:p-4 bg-white dark:bg-black shadow-2xl border-2 border-gray-500">
              <div class="photo-wrapper flex justify-center p-2 text-center">
                <img
                  className="rounded-full border border-gray-100 shadow-sm"
                  src={() => {
                    const HDpic = remove_normal(
                      twitterprofile["profile_image_url_https"]
                        ? twitterprofile["profile_image_url_https"]
                        : "https://img.icons8.com/windows/32/000000/guest-male--v1.png"
                    );
                    return HDpic;
                  }}
                  alt="User Avatar"
                  width={128}
                  height={128}
                />
              </div>
              <div class="p-2 text-center">
                <h3 className="mb-2 text-xl text-center sm:text-2xl font-semibold leading-none tracking-tighter text-black dark:text-white title-font">
                  {twitterprofile["name"]}
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>{twitterprofile["description"]}</p>
                </div>
                <table class=" flex justify-center py-2 text-base leading-relaxed text-gray-700 dark:text-gray-400 my-3">
                  <tbody>
                    <tr>
                      {/* <td class="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td> */}
                      <td class="px-2 py-2">
                        {"@" + twitterprofile["screen_name"]}
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2">
                        <a href={twitterprofile["url"]}>link</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* <div class="text-center my-3">
                <a
                  class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import NavbarPrivate from "./components/NavbarPrivate";

export default function Account() {

  
  return (
    <div>
      <div>
        <NavbarPrivate />
      </div>
      <div class="flex items-center h-screen w-full text-center justify-center">
        <div class="w-5/12">
        <div className="p-2 sm:p-4 bg-white dark:bg-black shadow-2xl border-2 border-gray-500">
            <div class="photo-wrapper p-2 text-center">
              <div
                className="rounded-full border border-gray-100 shadow-sm"
                src="/images/thispersondoesnotexist.jpg"
                alt="User Avatar"
                width={128}
                height={128}
              />
            </div>
            <div class="p-2 text-center">
            <h3 className="mb-2 text-xl text-center sm:text-2xl font-semibold leading-none tracking-tighter text-black dark:text-white title-font">
                John Doe
              </h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
              </div>
              <table class=" flex justify-center py-2 text-base leading-relaxed text-gray-700 dark:text-gray-400 my-3">
                <tbody>
                  <tr>
                    {/* <td class="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td> */}
                    <td class="px-2 py-2">@johndoe</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2">john@example.com</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2"> I like Naruto</td>
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
    </div>
  );
}

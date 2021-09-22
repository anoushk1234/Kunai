import { useParams } from "react-router-dom";
import NavbarPrivate from "./components/NavbarPrivate"
export default function KitPage() {
  const { kitId } = useParams();
  console.log(kitId);
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
                  Title
                </h1>
              </div>
              <div>
                <p className="py-2 text-base leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere fringilla lacinia. Praesent placerat semper
                  tempus. Nam non felis mi. Nunc est sapien, malesuada ut sem a,
                  dignissim ultrices purus. Maecenas id vestibulum felis, a
                  pellentesque ante. Morbi vel venenatis sem. Sed elit diam,
                  pharetra nec massa posuere, egestas ultrices augue. Etiam
                  rhoncus aliquet tellus in viverra. Phasellus gravida sed nibh
                  et vehicula. Integer dignissim nibh vel sapien posuere
                  vulputate. Nulla non scelerisque lorem. Cras elementum elit
                  sed lobortis viverra. Quisque volutpat purus arcu, ut
                  convallis ex lobortis eu. Donec hendrerit ex sollicitudin eros
                  tincidunt faucibus. Cras erat odio, auctor quis aliquet id,
                  pulvinar vel magna.
                  <br></br>
                  Donec gravida rhoncus odio quis mollis. Maecenas non eleifend
                  eros. Integer vel cursus eros. Sed rutrum sem justo, nec
                  venenatis massa rutrum nec. Integer in aliquet metus, at
                  semper diam. Quisque facilisis porta purus id volutpat. Nulla
                  iaculis dapibus semper.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex flew-row gap-4">
                  <div class="relative w-12 h-12">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm"
                      src="/imgs/thispersondoesnotexist.jpg"
                      alt="User Avatar"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-medium leading-relaxed max-w-prose text-gray-700">
                      Profile Name
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row">
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

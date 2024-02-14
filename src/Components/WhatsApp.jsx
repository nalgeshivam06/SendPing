// "use client";
// import { useState } from "react";
// import Main from './Main';
// import Team from "./Team";
// import Privacy from "./Privacy";
// import Pricing from "./Pricing";
// import Navbar from "./Navbar";

// const nav = [
//     {
//         id: 1,
//         title: "Home",
//     },
//     {
//         id: 2,
//         title: "Team",
//     },
//     {
//         id: 3,
//         title: "Privacy",
//     },
//     {
//         id: 4,
//         title: "Buy Premium",
//     },
// ];

// export default function WhatsApp() {
//     const [showNav, setShowNav] = useState(0);

//     return (
//         <div className="flex ">
//         <div className="w-1/5 h-screen">
//           <Navbar/>
//         </div>
//         <div className="w-4/5 flex  p-5 border   min-h-[728px]">
//         <div className="h-screen overflow-y-auto">
//             <div className="w-full mx-auto text-white font-medium px-4">
//                 <div className="flex">
//                     {nav.map((navi, i) => {
//                         return (
//                             <button
//                                 key={i}
//                                 className={`w-72 text-center py-3 bg-[#138c81] ${
//                                     showNav === i ? "bg-[#065f55]" : ""
//                                 }`}
//                                 onClick={() => setShowNav(i)}
//                             >
//                                 {navi.title}
//                             </button>
//                         );
//                     })}
//                 </div>
//                 {showNav === 0 && (
//                     <div className="bg-white">
//                         <Main />
//                     </div>
//                 )}
//                 {showNav === 1 && (
//                     <div className="bg-white">
//                         <Team />
//                     </div>
//                 )}
//                 {showNav === 2 && (
//                     <div className="bg-white">
//                         <Privacy />
//                     </div>
//                 )}
//                 {showNav === 3 && (
//                     <div className="bg-white">
//                         <Pricing />
//                     </div>
//                 )}
//             </div>
//         </div>
//         </div>
//     </div>
//     );
// }
"use client";
import { useState } from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import {
    AiOutlineFileExcel,
    AiOutlineDownload,
    AiFillStar,
} from "react-icons/ai";


function WhatsApp({lists}) {
  const [showNav, setShowNav] = useState(0);
  const messageSettings = [
    { id: 1, title: "Send Attachments" },
    { id: 2, title: "Add Option to Unsubscribe" },
    { id: 3, title: "Send Unpersonalized Message" },
    { id: 4, title: "Time Gap" },
];


  return (
    <div className="flex ">
      <div className="w-1/5 h-screen">
        <Navbar />
      </div>
      <div className="w-4/5 flex flex-col  p-5 border-l min-h-[730px]">
        <div className="flex flex-col m-10 w-4/5">
          <header className="flex justify-between items-center pb-4 text-white  ">
            <div className=" font-bold text-black">
              <h1 className="text-4xl font-sans">WhatsApp</h1>
            </div>
          </header>
          <div>
            <div className=" flex gap-2 ml-10 mt-4">
              <span className="font-medium text-base">WhatsApp List</span>
              <span></span>
            </div>
            <div className="ml-10 mt-4 mb-6 w-full">
              <select className="w-[51%] border h-8 ring-gray-50 rounded focus:ring-gray-50 h-12">
                <option className="font-light pb-2 pt-4 pl-4" value="option1">
                  Select a WhatsApp list
                </option>
                {lists.map((list, index) => (
                  <option key={index}>{list.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            {/* <Main /> */}
            <div className="mx-5 flex justify-between text-sm text-black mb-4">
                <h2 className="font-semibold">Message Settings</h2>
                <h2>
                    Facing issues? check our{" "}
                    <a
                        href="/"
                        className="underline text-blue-600 font-normal"
                    >
                        Tutorial
                    </a>
                </h2>
            </div>
            <div className="mx-5 mb-3 ">
                {messageSettings.map((setting, i) => {
                    return (
                        // <div key={i} className="flex gap-5  text-black">
                        <div key={i} className="flex  text-black">
                            <div>
                            <input 
                                className=""
                                type="checkbox"
                                name="settings"
                                id={"settings" + i}
                            />
                            </div>
                            <label htmlFor="settings"  className=" ml-20 text-center">{setting.title}</label>
                        </div>
                    );
                })}
            </div>
            <hr className="mx-5 bg-gray-400" />
            <div className="mx-5 my-3">
                <h2 className="font-semibold text-black text-sm">
                    Type Your Message here
                </h2>
            </div>
            <div className="ml-4 w-full">
                <textarea
                    name="message"
                    id="message"
                    cols="100"
                    rows="5"
                    placeholder="Quora Answer"
                    className="bg-[#dcf8c7] border-2 border-[#217460] rounded px-2 py-2"
                ></textarea>
            </div>
            <div className="items-right justify-end w-full ml-88">
                <button className="flex gap-2 bg-[#026b50] py-2 px-2 rounded text-sm font-medium">
                    <AiFillStar className="mt-1" />
                    Add Template
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
    lists: state.whatsappList.lists,
  });
  export default connect(mapStateToProps)(WhatsApp);
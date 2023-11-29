import { FaGreaterThan } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { MdPeopleOutline } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiCompassLight } from "react-icons/pi";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { IoCallSharp } from "react-icons/io5";
import { useState } from "react";
import WhatsApp from "./WhatsApp";
import EmailEditor from "./EmailEditor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const Email = () => {
  const [showCampaign, setShowCampaign] = useState("email");
  const [showEmailCampaign, setShowEmailCampaign] = useState(true);
  const [showEmailEditor, setShowEmailEditor] = useState(false);
  const [showCam, setShowCam] = useState(false);

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col ml-10 pr-5 -mt-6 border-r-2 mr-4 gap-5 w-[10%] h-full">
        <div className="flex cursor-pointer mt-20">
          <SlScreenDesktop className="mt-1 mr-1 text-green-600 text-2xl" />
          <span className="ml-1 text-lg ">Home</span>
        </div>
        <div className="flex cursor-pointer">
          <MdPeopleOutline className="mt-1 mr-1 text-green-600 text-2xl" />
          <span className="ml-1 text-lg">Contact</span>
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => setShowCam(!showCam)}
        >
          <BsPersonWorkspace className="mt-1 mr-1 text-green-600 text-2xl" />
          <span className="ml-1 text-lg">Campaign</span>
        </div>
        {showCam && (
          <div className="pl-3 text-sm">
            <h2
              className="mb-2 cursor-pointer "
              onClick={() => setShowCampaign("email")}
            >
              Email
            </h2>
            <h2
              className="mb-2 cursor-pointer"
              onClick={() => setShowCampaign("WhatsApp")}
            >
              WhatsApp
            </h2>
            <h2
              className="mb-2 cursor-pointer"
              onClick={() => setShowCampaign("webpush")}
            >
              Web push
            </h2>
          </div>
        )}
        <div className="flex cursor-pointer">
          <TbBrandGoogleAnalytics className="mt-1 mr-1 text-green-600 text-2xl" />
          <span className="ml-1 text-lg">Analytic</span>
        </div>
        <div className="flex cursor-pointer">
          <PiCompassLight className="mt-1 mr-1 text-green-600 text-2xl" />
          <span className="ml-1 text-lg">Automation</span>
        </div>
        <div className="flex cursor-pointer">
          <PiProjectorScreenChartLight className="mt-1 mr-1 text-green-600 text-2xl" />
          <span className="ml-1 text-lg">Meeting</span>
        </div>
        <div className="flex cursor-pointer">
          <IoCallSharp className="mt-1 mr-1 text-green-600 text-2xl" />
          <span className="ml-1 text-lg">Calls</span>
        </div>
      </div>
      {showCampaign === "email" && (
        <div className="w-full">
          <div className="mt-12 mx-auto ml-10 flex gap-10">
            <div className="">
              <button
                className="font-normal p-2 rounded text-white bg-[#065f55] text-xl"
                onClick={() => setShowEmailCampaign(true)}
              >
                Information About Campaign
              </button>
            </div>

            <div>
              <button
                className={`font-normal p-2 rounded text-white bg-[#065f55] text-xl ${
                  showEmailCampaign ? "" : "bg-"
                }`}
                onClick={() => setShowEmailCampaign(false)}
              >
                Edit Campaign
              </button>
            </div>
          </div>

          {showEmailCampaign && (
            <div>
              <div className="mt-12 ml-10 ">
                <button className="text-lg font-medium">
                  Name Email Campaign
                </button>
              </div>
              <div className=" flex gap-2 ml-10 mt-4">
                <span className="font-medium text-xs">Mailing List</span>
                <span></span>
              </div>
              <div className="ml-10 mt-2 w-full">
                <select className="w-[51%] border h-8 ring-gray-50 rounded focus:ring-gray-50">
                  <option className="font-light pb-2 pt-4 pl-4" value="option1">
                    select a mailing list
                  </option>
                </select>
              </div>
              <div className="ml-10 mt-2 ">
                <input
                  className="mr-2 mt-1 border ring-gray-50 checked:ring-gray-500 "
                  type="checkbox"
                  name="settings"
                />
                <label className="-mt-4 text-base font-light text-gray-400">
                  Use segmentation
                </label>
              </div>
              <div className="ml-10 w-full mt-5 flex flex-row">
                <div className="w-[50%] mr-2">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                    absolute"
                  >
                    Sender email address:
                  </p>
                  <select
                    className="w-[50%] border h-11 ring-gray-50 rounded pr-4 pb-1 pl-4 mr-0 mb-0 ml-0 focus:ring-gray-50"
                    placeholder="xyz@gmail.com"
                  >
                    <option className="font-light" value="option1">
                      xyzgmail.com
                    </option>
                  </select>
                </div>
                <div className="w-[50%] -ml-80">
                  <p
                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                    absolute"
                  >
                    Sender's name:
                  </p>
                  <input
                    className="w-[51%]  pt-5 pr-4 pb-6 pl-4 mr-4 mb-0 ml-0 border h-8 ring-gray-50 rounded focus:ring-gray-50"
                    type="text"
                    placeholder="xyz@gmail.com"
                  />
                </div>
              </div>
              <div className="w-full ml-10 mt-10 ">
                <p
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                    absolute"
                >
                  Subject Line:
                </p>
                <input className="w-[51%] pt-5 pr-4 pb-6 pl-4 mr-0 mb-0 ml-0 border h-8 ring-gray-50 rounded focus:ring-gray-50  " />
              </div>

              <div className="w-[50%] ml-10  mt-20 text-right items-right justify-end">
                <div className="flex text-right items-right justify-end gap-1">
                  <button className="border border-gary-50 p-2 items-right">
                    Save as Draft
                  </button>
                  <div className="flex flex-col">
                    <button className="border flex text-white pt-2 pb-2 pl-6 pr-6 rounded-md bg-[#065f55] items-right">
                      Next
                      <FaGreaterThan className="mt-1 ml-2 pt-1 font-light text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="mt-4 h-screen">
            {!showEmailCampaign && (
              <>
                <DndProvider backend={HTML5Backend}>
                  <EmailEditor />
                </DndProvider>
              </>
            )}
          </div>
        </div>
      )}

      {showCampaign === "WhatsApp" && <WhatsApp />}
    </div>
  );
};
export default Email;


import React, { useState } from "react";
import { connect } from "react-redux";
import { FaGreaterThan } from "react-icons/fa";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "./Navbar";
import EmailEditor from "./EmailEditor";
import WhatsApp from "./WhatsApp";
import * as XLSX from 'xlsx';

function Email2({lists}) {
    const [showCampaign, setShowCampaign] = useState("email");
    const [showEmailCampaign, setShowEmailCampaign] = useState(true);
    const [contactOptions, setContactOptions] = useState([]);


    return (
        <div className="flex ">
            <div className="w-1/5 h-screen">
                <Navbar />
            </div>
            <div className="w-4/5 flex flex-col  p-5 border-l min-h-[730px]">
                <div className="flex flex-col m-10 w-full">
                    <header className="flex justify-between items-center pb-4 text-white  ">
                        <div className=" font-bold text-black">
                            <h1 className="text-4xl font-sans">Campaign</h1>
                        </div>
                    </header>
                    <div>
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
                                            <select className="w-[51%] border h-8 ring-gray-50 rounded focus:ring-gray-50 h-12">
                                                <option
                                                    className="font-light pb-2 pt-4 pl-4"
                                                    value="option1"
                                                >
                                                    Select a mailing list
                                                </option>
                                                {lists.map((list, index) => (
                                                    <option key={index} >{list.name}</option>
                                                ))}
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
                                                {/* <EmailEditor /> */}
                                                <EmailEditor />
                                            </DndProvider>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                        {showCampaign === "WhatsApp" && <WhatsApp />}
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default Email2;
const mapStateToProps = (state) => ({
    lists: state.contactList.lists,
  });
  export default connect(mapStateToProps)(Email2);




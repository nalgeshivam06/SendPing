
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Automation() {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex ">
      <div className="w-1/5 h-screen">
        <Navbar />
      </div>
      <div className="w-4/5 flex  p-5 border min-h-[728px]">
        <div className="flex flex-col m-10 w-full">
          <header className="flex justify-between items-center pb-4 text-white ">
            <div className=" font-bold text-black">
              <h1 className="text-4xl text-black-300 font-sans">Automation</h1>
            </div>
            <div>
              <button className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md">
                <Link to="/automation/create-automation">
                  Create an Automation
                </Link>
              </button>
            </div>
          </header>

          <div className="mt-4">
            <ul className="flex w-full">
              {["All", "Active", "Pause", "Inactive"].map((option) => (
                <li
                  key={option}
                  className={`box-border border-b-2 ${
                    selectedOption === option ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <a href="#" className="">
                    <span className="block px-4 py-2">{option}</span>
                  </a>
                </li>
              ))}
            </ul>
            <hr />
            <div className="box-border">
              <div className="flex mt-6 w-full">
                <div className="inline w-1/3">
                  <input type="text" placeholder="Search for Automation" />
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <div className="w-1/3">
                  <div>
                    <img src="../Images/meeting.png" alt="meeting" />
                  </div>
                  <div className="text-center mt-8">
                    <h1 className="text-xl font-bold">
                      Your {selectedOption.toLowerCase()} automations will appear here.
                    </h1>
                  </div>
                  <div className="flex mt-6 justify-around items-center">
                    <a href="#" className="underline hover:text-blue-500">
                      Learn to Automate
                    </a>
                    <button className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md">
                      Create an Automation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automation;

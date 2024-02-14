import React from "react";
import Navbar from "./Navbar";

function Webpush() {
  return (
    <div className="flex ">
      <div className="w-1/5  h-screen">
        <Navbar />
      </div>
      <div className="w-4/5 flex  p-5 border min-h-[730px]">
        <div className="w-full">
          <div className="bg-[#faf5e3] mt-12">
            <div className="text-center my-4 pt-2">
              <h2 className="mt-2">Welcome to Web Push</h2>
            </div>
            <div className="my-6 m-auto text-center w-[613px]">
              <h2 className="text-4xl font-bold">Reach more people with Web Push notifications</h2>
            </div>
            <div className="text-center mt-6">
              <h2>Send notifications to your customers on desktop and mobile.</h2>
            </div>
            <div className=" text-center">
            <button className="bg-[#065f55]  my-6 m-auto  border border-black  text-white py-2 px-4 rounded-md">
              Send notifications    
                </button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="my-12">
            <img src="../Images/meeting.png" alt="meering" width={500} height={250} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Webpush;

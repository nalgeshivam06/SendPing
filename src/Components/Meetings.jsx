import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Meetings() {
  return (
    <div className="flex ">
      <div className="w-1/5  h-screen">
          <Navbar/>
        </div>
      <div className="w-4/5 flex  p-5 border min-h-[730px]">
        <div className="w-full">
          <div className="flex p-8 bg-[#faf5e3] justify-center">
            <div className="px-4 w-1/2">
              <h1 className="text-center text-4xl font-semibold">
                Let people book meetings with you when you're available.
              </h1>
              <p className="text-base text-center my-4">
                In just a few clicks, customers can schedule 15, 30, or
                60-minute meetings at times that work best for you. You can even
                add an option to pay for the meeting before confirmation.
              </p>
              <div className="flex justify-center ">
                <button className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md">
                  <Link to="/meetings/meeting-details">
                    Get started with Brevo Meetings
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full  mt-2">
            <div className="flex justify-around  pt-12 px-4 ">
              <div className="text-center  max-w-[350px]">
                <img src="../Images/meet1.png" alt="meet" className="m-auto" />
                <h1 className="text-center text-3xl font-semibold my-2">
                  Schedule and meet customers with ease
                </h1>
              </div>
              <div className="text-center  max-w-[350px]">
                <img src="../Images/meet2.png" alt="meet" className="m-auto" />
                <h1 className="text-center text-3xl font-semibold my-2">
                  Meet anywhere: Brevo, Google Meet, Zoom, and more
                </h1>
              </div>
              <div className="text-center  max-w-[350px]">
                <img src="../Images/meet3.png" alt="meet" className="m-auto" />
                <h1 className="text-center text-3xl font-semibold my-2">
                  Share your book-a-meeting link everywhere
                </h1>
              </div>
            </div>

            <div className="flex justify-center pt-12 my-2 px-4 ">
              <img src="../Images/meeting.png" alt="meeting" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetings;

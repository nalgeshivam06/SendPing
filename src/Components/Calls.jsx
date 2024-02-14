import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Calls() {
  const tableData = [
    // { contact: 'John Doe', phoneLine: '555-1234', user: 'User1', duration: '30 minutes', time: '10:00 AM' },
    // { contact: 'Jane Smith', phoneLine: '555-5678', user: 'User2', duration: '45 minutes', time: '11:30 AM' },
    // { contact: 'Bob Johnson', phoneLine: '555-9876', user: 'User3', duration: '20 minutes', time: '02:15 PM' },
    // { contact: 'Susan Davis', phoneLine: '555-4321', user: 'User4', duration: '15 minutes', time: '04:45 PM' },
    // { contact: 'Michael Brown', phoneLine: '555-8765', user: 'User5', duration: '60 minutes', time: '08:00 PM' },   
  ];
  return (
    <div className="flex ">
      <div className="w-1/5 h-screen">
          <Navbar/>
        </div>
      <div className="w-4/5 flex  p-5 border  min-h-[730px]">
         <div className="bbox-border flex p-8 w-full"> {/* order   border-red-300 */}
          <div className="w-full">
            <header className="flex justify-between items-center pb-4 text-white ">
              <div className=" font-bold text-black">
                <h1 className="text-4xl font-sans">Phone Dashboard</h1>
              </div>
              <div>
                <button className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md">
                  <Link to="/contact/import-contacts">Open Your Phone</Link>
                </button>
              </div>
            </header>
            <div className="flex mt-8">
              <div className="flex border w-3/4 rounded-2xl ">
                <div className="flex border-r w-1/3 p-8">
                  <div className="flex flex-col  justify-between">
                    <div>
                      <p className="text-base">
                        All calls over the last 30 days
                      </p>
                      <h1 className="font-bold text-4xl">0</h1>
                    </div>
                    <div>
                      <button className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md">
                        Open Your Phone
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex border-r  flex-col w-1/3 ">
                  <div className="flex border-b p-4 w-full">
                    <div className="mt-2">
                      <img
                        src="../Images/left-down.png"
                        alt="arrow"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-base">Incoming calls</p>
                      <h2 className="font-bold text-2xl">0</h2>
                      <p className="text-sm">-% of all calls</p>
                    </div>
                  </div>
                  <div className="flex  p-4 w-full">
                    <div className="mt-2">
                      <img
                        src="../Images/top-right.png"
                        alt="arrow"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-base">Outgoing calls</p>
                      <h2 className="font-bold text-2xl">0</h2>
                      <p className="text-sm">-% of all calls</p>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col w-1/3 ">
                  <div className="flex border-b p-4 w-full">
                    <div className="mt-2">
                      <img
                        src="../Images/left-down.png"
                        alt="arrow"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-[#e05c5c]">Missed calls</p>
                      <h2 className="font-bold text-2xl">0</h2>
                      <p className="text-sm">-% of all calls</p>
                    </div>
                  </div>
                  <div className="flex  p-4 w-full">
                    <div className="mt-2">
                      <img
                        src="../Images/call.png"
                        alt="arrow"
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-base">Average Call Duration</p>
                      <h2 className="font-bold text-2xl">-</h2>
                      <p className="text-sm">-% of all calls</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex border 1/4 p-8 flex-col justify-between rounded-2xl ml-4">
                <div>
                  <p className="text-base">Credit Left</p>
                  <h1 className="font-bold text-4xl">150</h1>
                </div>
                <div className="text-xs">
                  <p>Your free trial expires in 29 days.</p>
                </div>
                <div>
                  <button className="bg-[#f07a8e] border hover:border-black text-white  py-2 px-4 rounded-full">
                    {" "}
                    Upgrade{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="  mt-8  ">
              <div className=" font-bold text-black">
                <h1 className="text-xl font-sans">Recent Calls</h1>
              </div>
            </div>

            <div className="mt-4">
      {tableData.length === 0 ? (
        <>
        <table className="w-full border border">
        <thead  className="text-xl">
          <tr className="border p-4">
              <th className="w-3/5 p-4">Contact</th>
              <th className="p-4">Phone line</th>
              <th className="p-4">User</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Time</th>
          </tr>
        </thead>
     </table>
     <div className="flex justify-center items-center h-44 border ">No Data to Show</div>

     </>
      ) : (
        <table className="w-full border rounded-lg">
          <thead className="text-xl">
            <tr className="border p-4">
              <th className="w-3/5 p-4 ">Contact</th>
              <th className="p-4">Phone line</th>
              <th className="p-4">User</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Time</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tableData.map((row, index) => (
              <tr key={index} className="p-2">
                <td className="p-2">{row.contact}</td>
                <td className="p-2">{row.phoneLine}</td>
                <td className="p-2">{row.user}</td>
                <td className="p-2">{row.duration}</td>
                <td className="p-2">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calls;

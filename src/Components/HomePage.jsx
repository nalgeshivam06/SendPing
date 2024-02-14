import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import Email2 from "./Email2";

function HomePage({lists1 ,lists2}) {
  return (
    <>
      <div className="flex ">
        <div className="w-1/5 h-screen">
          <Navbar />
        </div>
        <div className="w-4/5 flex  p-5 border min-h-[728px] bg-gray-200">
          <div className="w-full p-4 box-border">
            {/* <div className=" border red p-12 mx-8 border border-red-300 w-full"> */}
            <div className="  px-12 py-8 mx-8 bg-white w-full">
            <header className="flex justify-between items-center pb-4 text-white">
              <div className="font-bold text-black">
                <h1 className="text-4xl font-sans">Home</h1>
              </div>
            </header>
            <div className="flex flex-col">
              <div className="flex flex-col w-full">
                <div className="flex p-4">
                <span><h2 className="font-bold">Quick actions</h2></span>
                  <img src="../Images/info.png" alt="info" height={20}  width={20} className="mx-4"/>
                  </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className=" border border-gray-300  hover:border-blue-300 rounded-full p-4">
                    <a href="#">
                      <div className="flex">
                        <img src="../Images/add-user.png" alt="user"height={20}  width={20} className="mx-3" />
                        <span>Add a Subscriber</span>
                      </div>
                    </a>
                  </div>
                  <div className=" border border-gray-300  hover:border-blue-300 rounded-full p-4">
                    <a href="#">
                      <div className="flex">
                        <img src="../Images/add-user.png" alt="user"height={20}  width={20} className="mx-3" />
                        <span>Import Contacts</span>
                      </div>
                    </a>
                  </div>
                  <div className=" border border-gray-300  hover:border-blue-300 rounded-full p-4">
                    <a href="#">
                      <div className="flex">
                        <img src="../Images/integration.png" alt="user"height={20}  width={20} className="mx-3" />
                        <span>Connect and Integration</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex border border-gray-200  p-4">
                    <span><img src="../Images/files.png" alt="list"height={20}  width={20} className="mx-3 mt-1" /></span>
                    <div className="px-2">
                    <div className="text-2xl font-bold">Total Mailing List</div>
                    <div className="text-xl"><h2>{lists1.length}</h2></div>
                    </div>
                  </div>
                  <div className="flex border border-gray-200  p-4">
                    <span><img src="../Images/files.png" alt="list"height={20}  width={20} className="mx-3 mt-1" /></span>
                    <div className="px-2">
                    <div className="text-2xl font-bold">Total Whatsapp List</div>
                    <div className="text-xl"><h2>{lists2.length}</h2></div>
                    </div>
                  </div>
                  <div className="flex border border-gray-200  p-4">
                    <span><img src="../Images/telephone.png" alt="list"height={20}  width={20} className="mx-3 mt-1" /></span>
                    <div className="px-2">
                    <div className="text-2xl font-bold">Total Contacts</div>
                    <div className="text-xl"><h2>- </h2></div>
                    </div>
                  </div>
                  
                  </div>
              </div>

              <div className="flex flex-col w-full mt-8">
                <div className="flex p-4">
                <span><h2 className="font-bold">Email performance</h2></span>
                  <img src="../Images/info.png" alt="info" height={20}  width={20} className="mx-4"/>
                  </div>

                  <div className="flex flex-col border">
                     <div className="ml-4 p-4"><p>Once you send an email, data will show up here.</p></div>
                  <div className="flex mx-4 mt-6">
                      <div className="flex-1 p-4">
                        <div className="mx-2 mb-2 text-sm"><h2>Start Rate</h2></div>
                        <div className="mx-2 mb-2"><h2 className="font-bold text-3xl">0.00%</h2></div>
                        <div className="mx-2 mb-2"><h2> --</h2></div>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="mx-2 mb-2 text-sm"><h2>Open Rate</h2></div>
                        <div className="mx-2 mb-2"><h2 className="font-bold text-3xl">0.00%</h2></div>
                        <div className="mx-2 mb-2"><h2> --</h2></div>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="mx-2 mb-2 text-sm"><h2>Clicks per unique opens</h2></div>
                        <div className="mx-2 mb-2"><h2 className="font-bold text-3xl">0.00%</h2></div>
                        <div className="mx-2 mb-2"><h2> --</h2></div>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="mx-2 mb-2 text-sm"><h2>Unsubscribed</h2></div>
                        <div className="mx-2 mb-2"><h2 className="font-bold text-3xl">0.00%</h2></div>
                        <div className="mx-2 mb-2"><h2> --</h2></div>
                      </div>
                      
                  </div>
                  </div>



                </div>




              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  lists1: state.contactList.lists,
  lists2: state.whatsappList.lists,
});

export default connect(mapStateToProps)(HomePage);


// export default HomePage;

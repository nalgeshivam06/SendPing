import React, { useState } from "react";
import { connect } from "react-redux";
import { addContactToWhatsappList } from "../Actions/ContactActions";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";


function ImportWhatsappContact({ addContactToWhatsappList, lists }) {
    const { id } = useParams();
  // console.log("list id is ", id);

  const [file, setFile] = useState(null);
  const [copiedData, setCopiedData] = useState("");
  const [selectedOption, setSelectedOption] = useState("Upload File");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log("File uploaded:", e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log("Inside handleUpload function");
    if (!file) {
      alert("Please select a file");
      return;
    }
    const reader = new FileReader();
    reader.onloadstart = (e) => {
      console.log("File reading started...");
    };

    reader.onprogress = (e) => {
      console.log(`File reading progress: ${e.loaded} / ${e.total} bytes`);
    };

    reader.onload = (e) => {
      console.log("File content read successfully");
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming the first sheet contains the data
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      console.log("the json data is ", jsonData);

      // Assuming each row represents a contact
      for (let row of jsonData) {
        // Assuming the row has columns: name, lastName, e phone
        const { name, lastName, phone } = row;
        console.log("Row data:", row);
        // Dispatch action to add contact to the list
        addContactToWhatsappList(id, { name, lastName, phone });
      }

      // Reset file state after uploading
      setFile(null);
      alert("File uploaded successfully");

    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleCopyPaste = () => {
    const lines = copiedData.split("\n");

    // Parse each line and extract contact information
    const contacts = lines.map((line) => {
      const [name, lastName, phone] = line.split("\t");
      return { name, lastName, phone };
    });


    contacts.forEach((contact) => {
      // Validate contact data before adding
      if (contact.name && contact.phone) {
        // Dispatch addContactToWhatsappList action
        addContactToWhatsappList(id, contact);
      }
    });
 
    alert("Data Copied Successfully");

    setCopiedData("");
 
  };

  // Assuming you have access to the list of contacts for the specific list
  const list = lists.find((list) => list.id === id);
  const currentContacts = list ? list.contacts : [];
  // const [showingCopyPaste, setShowingCopyPaste] = useState(false); // State for showing/hiding textarea

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
  });

 
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.lastName ||
      !formData.phone
    ) {
      alert("Please fill out all fields");
      return;
    }

    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number (10 digits)");
      return;
    }

    // Dispatch addContactToWhatsappList action with form data and listId
    addContactToWhatsappList(id, formData);

    // Reset form data and hide the form
    setFormData({
      name: "",
      lastName: "",
      phone: "",
    });
  
  };


    
    return (
        <div className="flex ">
        <div className="w-1/5  h-screen">
          <Navbar />
        </div>
        <div className="w-4/5 flex  p-5 border min-h-[730px]">
          <div className="flex flex-col border-blue-700 m-10 w-full">
            <header className="flex items-center pb-4 text-white ">
              <div className=" font-bold text-black">
                <h1 className="text-2xl text-black-300 font-sans">
                  Import Whatsapp Contacts :
                </h1>
              </div>
              <div className=" font-bold  ml-3">
                <h1 className="text-2xl text-blue-400 font-sans">{list.name}</h1>
              </div>
              <div className=" font-bold text-black ml-3">
                <h1 className="text-2xl text-black-300 font-sans">
                  ({list.contacts.length} Contacts)
                </h1>
              </div>
            </header>
            <hr />
  
            <span className="text-lg font-sans text-black-200 mt-8 mb-4">
              Add contacts in bulk by uploading a file or manually copying/pasting
              them from a file. All plans include unlimited contacts for free.
              <a href="#" className="underline hover:text-blue-500">
                Learn more on how to import your contacts to Brevo
              </a>
            </span>
  
            <ul className="flex w-full my-4">
              {["Upload File", "Copy & Paste", "Individual Entry"].map(
                (option) => (
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
                )
              )}
            </ul>
            <div className="">
              {selectedOption === "Upload File" && (
                <div className="w-[790px]  border border-gray-800 p-4">
                  <div className="w-[69%] p-2 bg-[#e2cece] ml-auto mb-8">
                    <h2>Supported file formats: CSV, XLS, XLSX</h2>
                  </div>
                  <div className="p-2  mb-4 flex items-center">
                    <label htmlFor="" className=" font-bold w-2/5 text-end px-2">
                      File to Upload:
                    </label>
                    <div className="w-full px-2">
                      <input
                        className="border-none"
                        type="file"
                        id="myFile"
                        name="filename"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div className="p-2  flex items-center">
                    <label htmlFor="" className=" font-bold w-2/5 text-end px-2">
                      Assign Tag (s) :
                    </label>
                    <div className="w-full px-4">
                      <input type="text" id="myFile" name="filename" />
                    </div>
                  </div>
                  <div className="p-2 flex items-center mb-4 w-2/3 ml-auto ">
                    <button
                      onClick={handleUpload}
                      className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md"
                    >
                      Upload
                    </button>
                  </div>
                  <div className="p-2  flex ">
                    <label htmlFor="" className=" font-bold w-2/5 text-end px-2">
                      Email verification:
                    </label>
                    <div className="w-full px-2">
                      <input type="checkbox" name="filename" className="w-6" />{" "}
                      Verify uploaded addresses.
                      <p className="ml-7 text-sm">
                        Verify your mailing list to find any invalid email in it.{" "}
                        <a href="#" className="text-blue-300">
                          {" "}
                          Learn more about verification
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {selectedOption === "Copy & Paste" && (
                <div className="w-[790px]  border border-gray-800 p-4">
                  <div className="w-[69%] p-2 bg-[#e2cece] ml-auto mb-8">
                    <h2>You can enter not more than 10000 contacts.</h2>
                    <h2>Each contact should be on a separate line.</h2>
                  </div>
                  <div className="p-2  flex ">
                    <label htmlFor="" className=" font-bold w-2/5 text-end px-2">
                      Whatsapp Contact List :
                    </label>
                    <div className="w-full px-4">
                      <textarea
                        className="w-full h-52 border border-gray-300 rounded-md px-4 py-2"
                        value={copiedData}
                        onChange={(e) => setCopiedData(e.target.value)}
                        placeholder="Paste copied data here..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 flex items-center mb-4 w-2/3 ml-auto ">
                    <button
                      onClick={handleCopyPaste}
                      className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md"
                    >
                      Copy Paste
                    </button>
                  </div>
                  <div className="p-2  flex ">
                    <label htmlFor="" className=" font-bold w-2/5 text-end px-2">
                      Email verification:
                    </label>
                    <div className="w-full px-2">
                      <input type="checkbox" name="filename" className="w-6" />{" "}
                      Verify uploaded addresses.
                      <p className="ml-7 text-sm">
                        Verify your mailing list to find any invalid email in it.{" "}
                        <a href="#" className="text-blue-300">
                          {" "}
                          Learn more about verification
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {selectedOption === "Individual Entry" && (
                <div className="w-[790px]  border border-gray-800 p-4">
                  <form onSubmit={handleFormSubmit}>
                    <div className="p-2  flex items-center">
                      <label
                        htmlFor=""
                        className=" font-bold w-2/5 text-end px-2"
                      >
                        Name :
                      </label>
                      <div className="w-full px-4">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="py-2 px-3 border border-gray-300 rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="p-2  flex items-center">
                      <label
                        htmlFor=""
                        className=" font-bold w-2/5 text-end px-2"
                      >
                        Last Name :
                      </label>
                      <div className="w-full px-4">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="py-2 px-3 border border-gray-300 rounded-md w-full"
                        />
                      </div>
                    </div>
                    {/* <div className="p-2  flex items-center">
                      <label
                        htmlFor=""
                        className=" font-bold w-2/5 text-end px-2"
                      >
                        Email :
                      </label>
                      <div className="w-full px-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="py-2 px-3 border border-gray-300 rounded-md w-full"
                        />
                      </div>
                    </div> */}
                    <div className="p-2  flex items-center">
                      <label
                        htmlFor=""
                        className=" font-bold w-2/5 text-end px-2"
                      >
                        Phone :
                      </label>
                      <div className="w-full px-4">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="py-2 px-3 border border-gray-300 rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="p-2 flex items-center mb-4 w-2/3 ml-auto ">
                      <button
                        type="submit"
                        className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
  
            <table className="w-full border border-collapse font-sans mt-4">
              <thead>
                <tr>
                  <th className="p-2 border font-sans">Contact Name</th>
                  {/* <th className="p-2 border">Email</th> */}
                  <th className="p-2 border">Mobile Number</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {currentContacts.map((contact, index) => (
                  <tr key={index}>
                    <td className="p-2 border">
                      {contact.name} {contact.lastName}
                    </td>
                    {/* <td className="p-2 border">{contact.email}</td> */}
                    <td className="p-2 border">{contact.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
    lists: state.whatsappList.lists,
  });
  
  export default connect(mapStateToProps, { addContactToWhatsappList })(ImportWhatsappContact);
  

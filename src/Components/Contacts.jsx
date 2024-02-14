import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Contacts({ contacts }) {
  // State for search term, rows per page, and current page
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState("2");
  const [currentPage, setCurrentPage] = useState(1);

  // Handler for search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handler for rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page when rows per page changes
  };

  // Calculate total number of pages based on the number of contacts and rows per page
  const totalPages = Math.ceil(contacts.length / rowsPerPage);

  // Calculate the start and end index of contacts to display on the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Filter contacts based on search term and slice them based on pagination
  const currentContacts = contacts
    .filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(startIndex, endIndex);

  // Handler for page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/5 h-screen">
          <Navbar />
        </div>
        <div className="w-4/5 flex  p-5 border min-h-[728px]">
          <div className="flex flex-col border-blue-700 m-10 w-full">
            <header className="flex justify-between items-center pb-4 text-white">
              <div className="font-bold text-black">
                <h1 className="text-4xl font-sans">Contact</h1>
              </div>
              <div>
                <button className="bg-black hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md">
                  <Link to="/contact/mailing-list">Mailing Lists</Link>
                </button>
              </div>
              <div>
                <button className="bg-black hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md">
                  <Link to="/contact/import-contacts">Import Contact</Link>
                </button>
              </div>
            </header>
            <span className="text-lg font-sans text-black-200">
              This is your contact database. From here, you can view, organize
              and manage your contacts, individually or as a group.
            </span>

            {/* Search input */}
            <div className="border p-4 mt-12">
              <div className="flex justify-between mb-4">
                <div className="p-2">
                  <img
                    src="./Images/group.png"
                    alt="group"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-bold p-2">All Contacts</span>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="p-2 border border-gray-300 rounded mr-2 w-1/2 ml-auto"
                />
              </div>

              {/* Table */}
              <table className="w-full border border-collapse font-sans">
                <thead>
                  <tr>
                    <th className="p-2 border font-sans">Contact Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Mobile Number</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentContacts.map((contact, index) => (
                    <tr key={index}>
                      <td className="p-2 border">
                        {contact.name} {contact.lastName}
                      </td>
                      <td className="p-2 border">{contact.email}</td>
                      <td className="p-2 border">{contact.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Rows per page dropdown and pagination */}
              <div className="mt-4 flex justify-between">
                <select
                  value={rowsPerPage}
                  onChange={handleRowsPerPageChange}
                  className="p-2 border border-gray-300 rounded ml-auto"
                >
                  <option value={2}>2 Rows</option>
                  <option value={5}>5 Rows</option>
                  <option value={10}>10 Rows</option>
                </select>
                <span className="ml-4 p-2">
                  Page {currentPage} of {totalPages}
                </span>
                <div className="ml-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 text-black rounded cursor-pointer"
                  >
                    &lt;
                  </button>
                  <span className="p-2 text-black rounded cursor-pointer">
                    {currentPage}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 text-black rounded cursor-pointer"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Map state to props
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts, // Assuming 'contact' is the key for the contacts slice of state and 'contacts' is the array inside it
});

export default connect(mapStateToProps)(Contacts);

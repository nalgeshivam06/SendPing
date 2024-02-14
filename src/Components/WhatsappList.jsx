import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from './Navbar';
import { addWhatsappList } from '../Actions/ContactActions';
import { useNavigate } from "react-router-dom";

function WhatsappList({ lists, addWhatsappList }) {
    const [showCreateForm, setShowCreateForm] = useState(false);
  const [newListName, setNewListName] = useState("");

  function generateUniqueId() {
    const randomPart = Math.random().toString(36).substr(2, 9);
    const timestampPart = new Date().getTime().toString(36);
    const uniqueId = randomPart + timestampPart;
    return uniqueId;
  }
  let navigate = useNavigate();
  const handleCreateList = () => {
    if (newListName.trim() === "") {
      alert("Please enter the new  whatsapp list name.");
      return;
    }
    const newList = {
        id: generateUniqueId(),
        date: new Date().toDateString(),
        name: newListName,
        contacts: [], // Assuming no contacts initially
      };
      addWhatsappList(newList);

      setShowCreateForm(false);

      navigate(`/contact/whatsapp-list/import-contacts/${newList.id}`);
    };

  return (
    <div className="flex">
      <div className="w-1/5 h-screen">
        <Navbar />
      </div>
      <div className="w-4/5 flex p-5 border min-h-[730px]">
        <div className="flex flex-col border-blue-700 m-10 w-full">
          <header className="flex justify-between items-center pb-4 text-white ">
            <div className=" font-bold text-black">
              <h1 className="text-2xl text-black-300 font-sans">
                Whatsapp List
              </h1>
            </div>

            <button
              type="button"
              className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md"
              onClick={() => setShowCreateForm(!showCreateForm)}
            >
              Create Whatsapp List
            </button>
          </header>
          {showCreateForm && (
            <div className="mt-4 p-4 border border-gray-300 rounded-md">
              <h2 className="text-lg font-semibold mb-4">
                Create a New Whatsapp Contact List
              </h2>
              <input
                type="text"
                placeholder="Enter list name"
                className="py-2 px-3 border border-gray-300 rounded-md w-full mb-4"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
              />
              <button
                className="bg-[#065f55] hover:bg-white border hover:border-black hover:text-black text-white py-2 px-4 rounded-md"
                onClick={handleCreateList}
              >
                Create  List
              </button>
            </div>
          )}
          <hr />
          <div className="flex flex-col mt-4">
            {/* Render existing mailing lists */}
            {lists.map((list, index) => (
              <div
                key={index}
                className="border border-blue-300 bg-gray-100 p-4 mt-3"
              >
                <h2>{list.date}</h2>

                <Link
                  to={`/contact/mailing-list/import-contacts/${list.id}`}
                  className="text-xl underline"
                >
                  {list.name}
                </Link>
                <h2>Contacts: {list.contacts.length} </h2>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}
const mapStateToProps = (state) => ({
    lists: state.whatsappList.lists,
  });
  const mapDispatchToProps = (dispatch) => ({
    addWhatsappList: (list) => dispatch(addWhatsappList(list)),
  });
export default connect(mapStateToProps,mapDispatchToProps) (WhatsappList);
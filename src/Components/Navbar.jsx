import { FaGreaterThan } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { MdPeopleOutline } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiCompassLight } from "react-icons/pi";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { IoCallSharp } from "react-icons/io5";
import { useState , useEffect} from "react";
import WhatsApp from "./WhatsApp";
import EmailEditor from "./EmailEditor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link ,useLocation } from "react-router-dom";
const Navbar = () => {
  const [showCam, setShowCam] = useState(false);
  const [showContact, setshowContact] = useState(false)
  const location = useLocation();
  useEffect(() => {

    if (location.pathname === '/email') {
        setShowCam(true);
    } 
    else if (location.pathname === '/whatsapp') {
        setShowCam(true);
    } 
    else if (location.pathname === '/webpush') {
        setShowCam(true);
    } else {
        setShowCam(false);
    }
}, [location.pathname]); 

// useEffect(() => {

//   if (location.pathname === '/contact/mailing-list') {
//     setshowContact(true);
//   } 
//   else if (location.pathname === '/contact/whatsapp-list') {
//     setshowContact(true);
//   }  else {
//     setshowContact(false);
//   }
// }, [location.pathname]); 
useEffect(() => {
  if (location.pathname.includes('/contact/')) {
    setshowContact(true);
  } else {
    setshowContact(false);
  }
}, [location.pathname]);

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col  border-r-2 border-gray-600  w-full h-full">
        <div>
        <img
                src="../../../Images/brevologo.png"
                width={190}
                height={48}
                alt="upload"
                className="mx-auto mt-4 mb-4"
              />
        </div>
        <Link 
        to="/homepage"
        className={`flex cursor-pointer p-3 text-lg hover:bg-gray-200  ${
          location.pathname === '/homepage' ? 'bg-gray-200' : ''
        }`}>
          <SlScreenDesktop className="ml-8 text-green-600 text-2xl" />
          <span className="ml-6 text-xl ">Home</span>
        </Link>
        <div
        className="flex cursor-pointer  p-3 text-lg hover:bg-gray-200"
          onClick={() => setshowContact(!showContact)}
        >
          <MdPeopleOutline className="ml-8 text-green-600 text-2xl" />
          <span className="ml-6 text-xl">Contact</span>
          </div>
          {showContact && (
          <div className="pl-3 text-sm text-center  w-full">
            {/* <Link
              to="/contact/mailing-list"
              className={`flex cursor-pointer  p-3 text-lg hover:bg-gray-200  ${
                location.pathname === '/contact/mailing-list' ? 'bg-gray-200' : ''
              }`}> */}
            <Link
              to="/contact/mailing-list"
              className={`flex cursor-pointer  p-3 text-lg hover:bg-gray-200  ${
                location.pathname.includes('/contact/mailing-list') ? 'bg-gray-200' : ''
              }`}>
              <span className="mx-auto">Mailing Lists</span>
            </Link>
            <Link 
              to="/contact/whatsapp-list"
              className={`flex cursor-pointer   p-3 text-lg hover:bg-gray-200  ${
                location.pathname.includes('/contact/whatsapp-list') ? 'bg-gray-200' : ''
              }`}>
              
              <span className="mx-auto">WhatsApp Lists</span>
            </Link>
            
          </div>
        )}
        <div
        className="flex cursor-pointer  p-3 text-lg hover:bg-gray-200"
          onClick={() => setShowCam(!showCam)}
        >
          
          <BsPersonWorkspace className="ml-8 text-green-600 text-2xl" />
          <span className="ml-6 text-xl">Campaign</span>
        </div>
        {showCam && (
          <div className="pl-3 text-sm text-center  w-full">
            <Link
              to="/email"
              className={`flex cursor-pointer  p-3 text-lg hover:bg-gray-200  ${
                location.pathname === '/email' ? 'bg-gray-200' : ''
              }`}>
              <span className="mx-auto">Email</span>
            </Link>
            <Link 
              to="/whatsapp"
              className={`flex cursor-pointer   p-3 text-lg hover:bg-gray-200  ${
                location.pathname === '/whatsapp' ? 'bg-gray-200' : ''
              }`}>
              
              <span className="mx-auto">WhatsApp</span>
            </Link>
            <Link 
              to="/webpush"
              className={`flex cursor-pointer  p-3 text-lg hover:bg-gray-200  ${
                location.pathname === '/webpush' ? 'bg-gray-200' : ''
              }`}>
              
              <span className="mx-auto">Web push</span>
            </Link>
          </div>
        )}
        {/* <Link to='/analytic' className={`flex cursor-pointer  p-3 text-lg hover:bg-gray-200  ${
          location.pathname === '/analytic' ? 'bg-gray-200' : ''
        }`}>
          <TbBrandGoogleAnalytics className="ml-8 text-green-600 text-2xl" />
          <span className="ml-6 text-xl">Analytic</span>
        </Link> */}
        <Link
        to="/automation"
         className={`flex cursor-pointer  p-3 text-lg hover:bg-gray-200  ${
          location.pathname === '/automation' ? 'bg-gray-200' : ''
        }`}>
          <PiCompassLight className="ml-8 text-green-600 text-2xl" />
          <span className="ml-6 text-xl">Automation</span>
        </Link>
        <Link
          to="/meetings"
          className={`flex cursor-pointer  p-3 text-lg hover:bg-gray-200  ${
            location.pathname === '/meetings' ? 'bg-gray-200' : ''
          }`}>
          <PiProjectorScreenChartLight className="ml-8 text-green-600 text-2xl" />
          <span className="ml-6 text-xl">Meeting</span>
        </Link>
        <Link
          to="/calls"
          className={`flex cursor-pointer  p-3 text-lg hover:bg-gray-200  ${
            location.pathname === '/calls' ? 'bg-gray-200' : ''
          }`}>
          <IoCallSharp className="ml-8 text-green-600 text-2xl" />
          <span className="ml-6 text-xl">Calls</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

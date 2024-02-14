// import React from 'react';
// import ReactDOM from 'react-dom'; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css';
// import { createRoot } from 'react-dom/client';
// import PreviewScreen from './Components/PreviewScreen.jsx';
// import Main from './Components/Main.jsx';
// import Email from './Components/Email.jsx';
// import Contacts from './Components/Contacts.jsx';
// import ImportContact from './Components/ImportContact.jsx';
// import Calls from './Components/Calls.jsx';
// import Meetings from './Components/Meetings.jsx';
// import Navbar from './Components/Navbar.jsx';
// import Email2 from './Components/Email2.jsx';
// import WhatsApp from './Components/WhatsApp.jsx';
// import HomePage from './Components/HomePage.jsx';
// import Automation from './Components/Automation.jsx';
// import Webpush from './Components/Webpush.jsx';
// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />}>
//           {/* <Route index element={<Email />} /> */}
//           {/* <Route index element={<HomePage/>} /> */}
//           <Route path='/homepage' element={<HomePage />} />
//           <Route path="/preview" element={<PreviewScreen />} />
//           <Route path="/email" element={<Email2 />} />
//           <Route path="/whatsapp" element={<WhatsApp />} />
//           <Route path="/webpush" element={<Webpush/>} />
//           <Route path="/contact" element={<Contacts/>} /> 
//           <Route path="/contact/import-contacts" element={<ImportContact/>} /> 
//           <Route path="/automation" element={<Automation/>} /> 
//           <Route path="/calls" element={<Calls/>} /> 
//           <Route path="/meetings" element={<Meetings/>} /> 
//         </Route>

//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from '../src/Store';
import App from './App';
import PreviewScreen from './Components/PreviewScreen';
import Main from './Components/Main';
import Email from './Components/Email';
import Contacts from './Components/Contacts';
import ImportContact from './Components/ImportContact';
import Calls from './Components/Calls';
import Meetings from './Components/Meetings';
import Navbar from './Components/Navbar';
import Email2 from './Components/Email2';
import WhatsApp from './Components/WhatsApp';
import HomePage from './Components/HomePage';
import Automation from './Components/Automation';
import Webpush from './Components/Webpush';
import './index.css';
import MailingList from './Components/MailingList';
import WhatsappList from './Components/WhatsappList';
import ImportWhatsappContact from './Components/ImportWhatsappContact';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}/>
            <Route path='/homepage' element={<HomePage />} />
            <Route path="/preview" element={<PreviewScreen />} />
            <Route path="/email" element={<Email2 />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
            <Route path="/webpush" element={<Webpush/>} />
            <Route path="/contact" element={<Contacts/>} /> 
            {/* <Route path="/contact/import-contacts" element={<ImportContact/>} />  */}
            <Route path="/contact/mailing-list" element={<MailingList/>} /> 
            <Route path="/contact/whatsapp-list" element={<WhatsappList/>} /> 
            <Route path="/contact/mailing-list/import-contacts/:id" element={<ImportContact id/>} /> 
            <Route path="/contact/whatsapp-list/import-contacts/:id" element={<ImportWhatsappContact id/>} /> 
            <Route path="/automation" element={<Automation/>} /> 
            <Route path="/calls" element={<Calls/>} /> 
            <Route path="/meetings" element={<Meetings/>} /> 
          {/* </Route> */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

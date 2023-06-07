import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Rooms from "./scenes/Rooms";
import Contacts from "./scenes/Contacts";
import Facilities from "./scenes/Facilities";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Modal from "./components/Modal";

function App() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
      setModal(!modal);
      document.body.classList.add("active-modal");   
  };

  return (
    <Router>
      <div>
        <ScrollToTop />
        <BackToTop />
        
        <Routes>
          <Route
            path="/"
            element={
              <Home
                toggleModal={toggleModal} 
              />
            }
          />
          <Route
            path="/Rooms"
            element={
              <Rooms
                toggleModal={toggleModal}
              />
            }
          />
          <Route
            path="/Facilities"
            element={
              <Facilities
                toggleModal={toggleModal} 
              />
            }
          />
          <Route
            path="/Contacts"
            element={
              <Contacts
                toggleModal={toggleModal}
              />
            }
          />
        </Routes>

        {modal && <Modal modal={modal} setModal={setModal} />}
        

      </div>
    </Router>
  );
}

export default App;

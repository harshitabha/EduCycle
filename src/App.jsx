import { Routes, Route, useNavigate } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import NewListing from './pages/NewListing';
import Navbar from './components/Navbar';


import './App.css';
import { useState } from 'react';

function App() {
  const navigator = useNavigate();

  const [listing, setListing] = useState([]);
  const [newListing, setNewListing] = useState({
    bookName: '',
    isbn: '',
    subject: '',
    condition: '',
    course: '',
    price: '',
    imgSrc: '',
    description: '',
  });
  console.log(listing);

  const handleFormChange = (e) => {
    console.log("Hello", e.target);
    // update the current listing
    setNewListing((currLisiting) => ({
      ...currLisiting,
      [e.target.name]: [e.target.value]
    }));
  }

  const handleSubmit = () => {
    // update the list of all listings
    setListing((prevListings) => ([
      ...prevListings,
      newListing
    ]))

    // reset the new listing
    console.log(newListing);
    setNewListing((curr) => ({
      ...curr,
      bookName: '',
      isbn: '',
      subject: '',
      condition: '',
      course: '',
      price: '',
      imgSrc: '',
      description: '',
    }));

    // go to home
    navigator("/home");
  }

  return (
    <>
      {/* Add the page components here as created */}
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home cards={listing}/>} />
          <Route path="/home" element={<Home cards={listing}/> } />
          {/* Temp Routes*/}
          <Route path="/newListing" element={<NewListing 
                                              handleChange={handleFormChange}
                                              handleSubmit={handleSubmit}/>} />
        </Routes>
    </>
  );
}

export default App

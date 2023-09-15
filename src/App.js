// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from './context/notes/NoteState';
import Alert from "./components/Alert";

function App() {
  return (
    <>
        <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="this is react course"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
          </NoteState>
     
    </>
  );
}

export default App;

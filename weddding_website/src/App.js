import './App.css';
import Home from './Components/Home.js';
import EventDetails from './Components/Event_Details.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/event-details" element={<EventDetails />}></Route>
        <Route exact path="/things-to-do" element={<Home />}></Route>
        <Route exact path="/puzzles-fun" element={<Home />}></Route>
        <Route exact path="/comments" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

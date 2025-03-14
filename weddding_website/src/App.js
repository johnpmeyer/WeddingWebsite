import './App.css';
import Home from './Components/Home.js';
import EventDetails from './Components/Event_Details.js';
import Where_to_Stay from './Components/Where_to_Stay.js';
import Puzzles_Fun from './Components/Puzzles_Fun.js';
import Registry from './Components/Registry.js';
import Comments from './Components/Comments.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/event-details" element={<EventDetails />}></Route>
        <Route exact path="/where-to-stay" element={<Where_to_Stay />}></Route>
        <Route exact path="/puzzles-fun" element={<Puzzles_Fun />}></Route>
        <Route exact path="/registry" element={<Registry />}></Route>
        <Route exact path="/comments" element={<Comments />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

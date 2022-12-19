import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Check from "./pages/Check";
import Login from "./pages/Login";

function App() {
  return (
    // className="App"
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/check" element={<Check />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

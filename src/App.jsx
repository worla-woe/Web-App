import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

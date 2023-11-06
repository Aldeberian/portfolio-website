import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <Router>
          <div className="bg-csbg w-screen h-screen max-h-screen max-w-screen flex flex-col">
              <Navbar />

              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/Projects" element={<ProjectsPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;

import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Beneficiaries from "./pages/Beneficiaries";
import Fx from "./pages/Fx";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Beneficiaries />} />
          <Route path="/fx" element={<Fx />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "../utils/PrivateRoute";
import Admin from "../pages/admin/Admin";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
import "./App.css";
import DashboardIcon from "./Icons/DashboardIcon";
import Sidebar from "./components/sidebar/Sidebar";
import AdminLayout from "./layouts/admin/index";
import AuthLayout from "./layouts/auth/index";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="admin/*" element={<AdminLayout />} />
          <Route path="auth/*" element={<AuthLayout />} />
          <Route path="/" element={<Navigate to="/admin" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

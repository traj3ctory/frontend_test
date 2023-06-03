import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Dashboard from "@/pages/Client/Dashboard";
import Profile from "@/pages/Client/Profile";
import NotFound from "@/pages/NotFound";

import { getValue, ClientToken } from "@/helpers";
import "@/styles/main.scss";

// Define a custom private route component for authenticated routes
interface PrivateRouteProps {
  path: string;
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, children }) => {
  // Replace this with your authentication logic
  const isAuthenticated = getValue(ClientToken) || false; // Example: Assume the user is authenticated

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        
        
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Authenticated route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          }
        />
          <Route
          path="/profile"
          element={
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

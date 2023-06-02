// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// // Import your components for login, register, and dashboard
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import Dashboard from "./pages/Dashboard";

// // Define a custom private route component for authenticated routes
// interface PrivateRouteProps {
//   element: JSX.Element;
//   path: string;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({
//   element: Component,
//   ...rest
// }) => {
//   // Replace this with your authentication logic
//   const isAuthenticated = true; // Example: Assume the user is authenticated

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? Component : <Navigate to="/login" replace />}
//     />
//   );
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Authenticated route */}
//         <PrivateRoute path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import your components for login, register, and dashboard
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard';

// Define a custom private route component for authenticated routes
interface PrivateRouteProps {
  path: string;
  element: JSX.Element;
}

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element: Component }) => {
//   // Replace this with your authentication logic
//   const isAuthenticated = true; // Example: Assume the user is authenticated

//   return isAuthenticated ? (
//     <Route path={path} element={Component} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
        {/* Redirect '/' to '/login' */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Authenticated route */}
        {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

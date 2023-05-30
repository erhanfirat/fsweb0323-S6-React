import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  
  return localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to={"/login"} replace />
  );
};

export default ProtectedPage;

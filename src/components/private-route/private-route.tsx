import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const PrivateRoute = () => {
  const { isLogin } = useAuthContext();
  return (
    <div className="">{isLogin ? <Outlet /> : <Navigate to="/login" />}</div>
  );
};

export default PrivateRoute;

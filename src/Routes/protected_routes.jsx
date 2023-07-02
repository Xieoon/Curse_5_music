import { Navigate,Outlet} from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { isLogin } from "../redux/reducers/user_slice";



export const ProtectedRoute = ({redirectPath = "/"}) => {
const isAllowed = useSelector(isLogin)
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet/>;
};
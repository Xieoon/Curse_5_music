import { Navigate,Outlet} from "react-router-dom";
import Cookies from "js-cookie";



export const ProtectedRoute = ({redirectPath = "/"}) => {
  const isAllowed = Cookies.get('token');
    console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet/>;
};
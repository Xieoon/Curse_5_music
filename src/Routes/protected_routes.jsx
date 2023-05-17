import { Navigate} from "react-router-dom";

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }


export const ProtectedRoute = ({children,redirectPath = "/"}) => {
    const isAllowed = Boolean(getCookie('token'))
    console.log(isAllowed);
    console.log(children);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};
import { Route,Routes } from "react-router-dom";
import Wrapper from "./Wrapper";
import Login from "./components/login-reg/login";
import SignUp from "./components/login-reg/sign-up";

function AppRoutes(){
return(
    <Routes>
        <Route path="/main" element={<Wrapper/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/reg" element={<SignUp/>}/>
    </Routes>
)
}

export default AppRoutes
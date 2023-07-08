import { Route, Routes } from "react-router-dom";
import Login from "../components/login-reg/login";
import SignUp from "../components/login-reg/sign-up";
import Wrapper from "../components/Wrapper";
import NotFound from "../components/additional_things/not_found_err";
import Playlist from "../components/playlist/playlist";
import { ProtectedRoute } from "./protected_routes";
import Compilation from "../components/playlist/compilations";

function AppRoutes() {
  return (
    <Routes>
     <Route path="/" element={<Login/>} />
      <Route element={<ProtectedRoute />}>
        <Route path="/main" element={<Wrapper />} /> 
        <Route path="/my_tracks" element={<Playlist/>}/>
        <Route path="/compilations/:comp_id" element={<Compilation/>}/>
      </Route>
      <Route path="/reg" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

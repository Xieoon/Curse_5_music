import { Route, Routes } from "react-router-dom";
import Login from "../components/login-reg/login";
import SignUp from "../components/login-reg/sign-up";
import Wrapper from "../components/Wrapper";
import NotFound from "../components/additional_things/not_found_err";
import Playlist from "../components/playlist/playlist";
import { ProtectedRoute } from "./protected_routes";

function AppRoutes() {
  return (
    <Routes>
     <Route path="/" element={<Login/>} />
      <Route element={<ProtectedRoute />}>
        <Route path="/main" element={<Wrapper />} /> 
        <Route path="/playlists/:content" element={<Playlist/>}/>
      </Route>
      <Route path="/reg" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

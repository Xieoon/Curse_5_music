import * as S from "./login_style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginLogoImg from "../../assets/img/loginLogo.svg";
import {
  useGetLoginMutation,
  useGetTokenMutation,
} from "../../redux/api/userApi";
import { setUser } from "../../redux/reducers/user_slice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [getLogin, {error,isError}] = useGetLoginMutation();
  const [getToken, {}] = useGetTokenMutation();

if(isError){
  alert(error)
}

  const handleAuthorization = async () => {

    await getToken(form)
      .unwrap()
      .then((token) => {
        localStorage.setItem("refreshToken", token.refresh);
       
        getLogin(form).then((user) => {
          localStorage.setItem("userId", user.data.id);

          dispatch(
            setUser({
              email: user.data.email,
              id: user.data.id,
              token: token.access,
            })
          )
          navigate('/main')
        });
      })
      .catch((err)=>{
        alert(err.data.detail)
      })
  };
  return (
    <S.background>
      <S.login>
        <S.logo src={loginLogoImg} />
        <S.input
          type="text"
          placeholder="Почта"
          name="email"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <S.input
          type="password"
          placeholder="Пароль"
          name="password"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <S.buttonIn onClick={() => handleAuthorization()}>Войти</S.buttonIn>
        <Link to="/reg">
          <S.buttonReg>Зарегистрироваться</S.buttonReg>
        </Link>
      </S.login>
    </S.background>
  );
}

export default Login;

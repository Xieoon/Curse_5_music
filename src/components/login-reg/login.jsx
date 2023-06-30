import * as S from "./login_style";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import loginLogoImg from '../../assets/img/loginLogo.svg'
import { setLogIn } from "../../redux/reducers/loged_slice";
import { getToken } from "../../redux/reducers/token_slice";

function Login() {
  const dispatch = useDispatch()
  const logStatus = useSelector((state)=>state.logStatus.status)
  const [form, setForm] = useState({});
  const [logComplete, setLogComplete] = useState(false);
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
        <S.buttonIn
          onClick={() => {
            console.log(form);
            axios
              .post("https://painassasin.online/user/login/", form)
              .then((result) => {
                if (result.status === 200) {
                  dispatch(getToken(form))
                  dispatch(setLogIn());
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {(logStatus === true) && <Navigate to={'/main'} />}
          Войти
        </S.buttonIn>
        <Link to="/reg">
          <S.buttonReg>Зарегистрироваться</S.buttonReg>
        </Link>
      </S.login>
    </S.background>
  );
}

export default Login;

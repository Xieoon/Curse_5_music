import * as S from "./login_style";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import loginLogoImg from '../../assets/img/loginLogo.svg'

function Login() {
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
                console.log(result);
                if (result.status === 200) {
                  document.cookie = `token=${result.data.id}`
                  setLogComplete(true);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {logComplete && <Navigate to={'/main'} />}
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

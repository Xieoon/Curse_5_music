import * as S from "./sign-up_style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRegMutation } from "../../redux/api/userApi";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [getReg, {}] = useGetRegMutation();

  const handleReg = async () => {
    await getReg(form)
      .unwrap()
      .then(() => navigate("/"));
  };

  return (
    <S.background>
      <S.reg>
        <S.logo src="./img/loginLogo.svg" />
        <S.input
          type="text"
          name="username"
          placeholder="Логин"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <S.input
          type="text"
          name="email"
          placeholder="e-mail"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <S.input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <S.input
          type="password"
          name="password_repeat"
          placeholder="Повторите пароль"
        />
        <S.buttonReg
          onClick={() => handleReg()}
        >
          Зарегистрироваться
        </S.buttonReg>
      </S.reg>
    </S.background>
  );
}

export default SignUp;

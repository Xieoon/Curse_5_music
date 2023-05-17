import * as S from "./sign-up_style";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({});
  const [regComplete,setRegComplete] = useState(false)


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
          onClick={() => {
              axios.post("https://painassasin.online/user/signup/",form)
              .then((result) => {
    
                  if(result.status === 201){
                    setRegComplete(true)
                  }
                  
              }).catch(err => {
                console.log(err);
        })
            
          }}
        >
          Зарегистрироваться
          {regComplete && <Navigate to={'/'}/>}
        </S.buttonReg>
      </S.reg>
    </S.background>
  );
}

export default SignUp;

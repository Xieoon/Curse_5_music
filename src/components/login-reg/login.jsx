import * as S from './login_style'
import { Link } from 'react-router-dom'

function Login(){
    return(
        <S.background >
        <S.login>
            <S.logo src='./img/loginLogo.svg'/>
            <S.input type='text' placeholder='Логин'/>
            <S.input type='password' placeholder='Пароль'/>
            <S.buttonIn>Войти</S.buttonIn>
            <Link to='/reg'><S.buttonReg>Зарегистрироваться</S.buttonReg></Link>
        </S.login>
        </S.background>
    )
}

export default Login
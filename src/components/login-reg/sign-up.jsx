import * as S from './sign-up_style'

function SignUp(){
    return(
        <S.background>
        <S.reg>
            <S.logo src='./img/loginLogo.svg'/>
            <S.input type='text' placeholder='Логин'/>
            <S.input type='password' placeholder='Пароль'/>
            <S.input type='password' placeholder='Повторите пароль'/>
            <S.buttonReg>Зарегистрироваться</S.buttonReg>
        </S.reg>
        </S.background>
    )
}

export default SignUp
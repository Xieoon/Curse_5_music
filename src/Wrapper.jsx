import * as S from "./Wrapper_style";
import Main from "./components/main/main";
import Header from "./components/header/header";

function Wrapper() {
  return (
    <S.body>
      <Header />      
      <Main />
    </S.body>
  );
}

export default Wrapper;

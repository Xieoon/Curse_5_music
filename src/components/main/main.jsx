import * as S from './main_style'
import React from 'react';

function Main() {
    return (
<React.Fragment>
      <S.filters>
       <p>Искать по</p>
       <button>исполнителю</button>
       <button>году выпуска</button>
       <button>жанру</button>
      </S.filters>
      <S.main_content>
        
      </S.main_content>
      </React.Fragment>
    );
  }
  
  export default Main;
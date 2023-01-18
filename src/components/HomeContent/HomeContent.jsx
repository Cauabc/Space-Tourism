import * as S from './styles'
import { NavLink } from 'react-router-dom';

export const HomeContent = () => {
    return (
        <S.Main>
            <S.leftSide>
                <p>SO, YOU WANT TO TRAVEL TO</p>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </S.leftSide>
            <S.rightSide>
                <NavLink to="/destination" activeClassName="active"><button>EXPLORE</button></NavLink>
            </S.rightSide>
        </S.Main>
    )
}
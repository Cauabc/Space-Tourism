import Header from '../../components/header/Header'
import { HomeContent } from '../../components/HomeContent/HomeContent'
import * as S from './styles'
export const Home = () => {
    return (
        <S.body>
            <Header />
            <HomeContent />
        </S.body>
    )
}
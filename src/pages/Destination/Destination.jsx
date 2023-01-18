import { DestinationContent } from '../../components/DestinationContent/DestinationContent'
import Header from '../../components/header/Header'
import * as S from './styles'


export const Destination = () => {
    return (
        <S.body>
            <Header />
            <DestinationContent />
        </S.body>
    )
}
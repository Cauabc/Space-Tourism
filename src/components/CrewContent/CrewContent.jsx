import * as S from './styles'
import crew from '../../data/Crew'
import { useState } from 'react'

export const CrewContent = () => {

    const [x, setX] = useState(0)
    const [first, setFirst] = useState('active')
    const [second, setSecond] = useState()
    const [third, setThird] = useState()
    const [fourth, setFourth] = useState()


    const handleFirst = () => {
        setX(0)
        setFirst('active')
        setSecond()
        setThird()
        setFourth()
    }
    const handleSecond = () => {
        setX(1)
        setFirst()
        setSecond('active')
        setThird()
        setFourth()
    }
    const handleThird = () => {
        setX(2)
        setFirst()
        setSecond()
        setThird('active')
        setFourth()
    }
    const handleFourth = () => {
        setX(3)
        setFirst()
        setSecond()
        setThird()
        setFourth('active')
    }

    return (
        <S.Main>
            <S.leftSide>
                <p className='title'><span>02</span> MEET YOUR CREW</p>
                <S.About>
                    <span>{crew[x].role}</span>
                    <h1>{crew[x].name}</h1>
                    <p>{crew[x].bio}</p>
                </S.About>
                <S.next>
                    <span className={first} onClick={handleFirst}></span>
                    <span className={second} onClick={handleSecond}></span>
                    <span className={third} onClick={handleThird}></span>
                    <span className={fourth} onClick={handleFourth}></span>
                </S.next>
            </S.leftSide>
            <S.rightSide>
                <img src={crew[x].images.png} alt="Crew Image" />
            </S.rightSide>
        </S.Main>
    )
}
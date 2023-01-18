import * as S from './styles'
import data from '../../data/Planets'
import { useState } from 'react'

export const DestinationContent = () => {
    const [x, setX] = useState(0)
    const [moon, setMoon] = useState('active')
    const [europa, setEuropa] = useState()
    const [mars, setMars] = useState()
    const [titan, setTitan] = useState()

    const handleMoon = () => {
        setX(0)
        setMoon('active')
        setMars()
        setEuropa()
        setTitan()
    }
    const handleMars = () => {
        setX(1)
        setMoon()
        setMars('active')
        setEuropa()
        setTitan()
    }
    const handleEuropa = () => {
        setX(2)
        setMoon()
        setMars()
        setEuropa('active')
        setTitan()
    }
    const handleTitan = () => {
        setX(3)
        setMoon()
        setMars()
        setEuropa()
        setTitan('active')
    }

    return (
        <S.Main>
            <S.leftSide>
                <p><span>01</span> PICK YOUR DESTINATION</p>
                <img src={data[x].images.png} alt="web" />
            </S.leftSide>
            <S.rightSide>
                <S.rightSideNavbar>
                    <ul>
                        <li onClick={handleMoon} className={moon}>MOON</li>
                        <li onClick={handleMars} className={mars}>MARS</li>
                        <li onClick={handleEuropa} className={europa}>EUROPA</li>
                        <li onClick={handleTitan} className={titan}>TITAN</li>
                    </ul>
                </S.rightSideNavbar>
                <h1>{data[x].name}</h1>
                <p>{data[x].description}</p>
                <S.plusContent>
                    <div className="distance">
                        <p>AVG. DISTANCE</p>
                        <h3>{data[x].distance}</h3>
                    </div>
                    <div className="travel">
                        <p>EST. TRAVEL TIME</p>
                        <h3>{data[x].travel}</h3>
                    </div>
                </S.plusContent>
            </S.rightSide>
        </S.Main>
    )
}
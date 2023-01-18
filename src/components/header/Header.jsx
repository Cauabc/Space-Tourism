import * as S from './styles'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const routerHeader = () => {

    const [IsOpen, setIsOpen] = useState('')
    const [isClosed, setIsClosed] = useState('')
    const [x, setX] = useState(0)

    const handleOpenMenu = (e) => {
        setIsOpen('open')
        setIsClosed('hamburguerClosed')
        setX(1)
        if (x === 1) {
            setIsOpen('')
            setIsClosed('')
            setX(0)
        }


    }

    return (
        <S.Header>
            <S.Logo>
                <img src="./logo.svg" alt="Logo" />
            </S.Logo>
            <S.Nav>
                <ul>
                    <NavLink to="/" activeClassName="active"><li><span>00</span>HOME</li></NavLink>
                    <NavLink to="/destination" activeClassName="active"><li><span>01</span>DESTINATION</li></NavLink>
                    <NavLink to="/crew" activeClassName="active"><li><span>02</span>CREW</li></NavLink>
                    <NavLink to="/technology" activeClassName="active"><li><span>03</span>TECHNOLOGY</li></NavLink>
                </ul>
            </S.Nav>
            <S.hamburguerHeader>
                <div className='hamburguer' onClick={handleOpenMenu} id={isClosed}  >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </S.hamburguerHeader>
            <S.NavMobile >
                <div className="navbarmobile" id={IsOpen}>
                    <ul className='teste' id='open' >
                        <NavLink to="/" activeClassName="active"><li><span>00</span>HOME</li></NavLink>
                        <NavLink to="/destination" activeClassName="active"><li><span>01</span>DESTINATION</li></NavLink>
                        <NavLink to="/crew" activeClassName="active"><li><span>02</span>CREW</li></NavLink>
                        <NavLink to="/technology" activeClassName="active"><li><span>03</span>TECHNOLOGY</li></NavLink>
                    </ul>
                </div>

            </S.NavMobile>
        </S.Header >
    )
}

export default routerHeader
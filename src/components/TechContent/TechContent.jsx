import * as S from './styles'
import tech from '../../data/Tech'
import { useState } from 'react'

export const TechContent = () => {

    const [activeClass1, setActiveclass1] = useState('active')
    const [activeClass2, setActiveclass2] = useState()
    const [activeClass3, setActiveclass3] = useState()
    const [x, setX] = useState(0)

    const handleClassToggle1 = () => {
        setActiveclass1('active')
        setActiveclass2()
        setActiveclass3()
        setX(0)
    }
    const handleClassToggle2 = () => {
        setActiveclass1()
        setActiveclass2('active')
        setActiveclass3()
        setX(1)

    }
    const handleClassToggle3 = () => {
        setActiveclass1()
        setActiveclass2()
        setActiveclass3('active')
        setX(2)

    }

    return (
        <S.Main>
            <S.leftSide>
                <p className='title'><span>03</span> SPACE LAUNCH 101</p>
                <S.leftContent>
                    <S.options>
                        <button onClick={handleClassToggle1} className={activeClass1}>1</button>
                        <button onClick={handleClassToggle2} className={activeClass2}>2</button>
                        <button onClick={handleClassToggle3} className={activeClass3}>3</button>
                    </S.options>
                    <S.data>
                        <span>THE TERMINOLOGY...</span>
                        <h1>{tech[x].name}</h1>
                        <span className='description'>{tech[x].description}</span>
                    </S.data>
                </S.leftContent>
            </S.leftSide>
            <S.rightSide>
                <picture>
                    <source media='(max-width: 826px)' srcSet={tech[x].images.landscape} />
                    <img src={tech[x].images.portrait} alt={tech[x].name} />
                </picture>
            </S.rightSide>
        </S.Main>
    )
}
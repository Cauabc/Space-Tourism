import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    height: 20vh;
`

export const Logo = styled.div`
    margin-left: 3rem;

`

export const Nav = styled.nav`
    background-color: rgba(110, 110 ,110, .3);
    border-radius: 3px;
    height: 100px;
    width: 45vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 430px){
        display: none;
    }

    &::before{
        content: '';
        display: block;
        position: absolute;
        width: 40vw;
        left: -39vw;
        border-bottom: 1px solid rgba(110, 110 ,110, .7);
    }

    ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem;
        
    }
    li{
        letter-spacing: 2px;
        position: relative;
        cursor: pointer;
        font-family: 'Barlow Condensed', serif;
        color: rgb(240,240,240);
        font-size: 1.2vw;
        @media screen and (max-width: 834px){
            font-size: .7rem;

        }

        &::after{
            content: '';
            display: block;
            position: absolute;
            bottom: -38px;
            width: 0%;
            border-bottom: 3px solid #999;
            transition: width .2s;
            @media screen and (max-width: 834px){
                bottom: -42px;

            }

        }
        &:hover::after{
            width: 100%;
            border-bottom: 3px solid #999;

        }

    }
    
    span{
        color: #fff;
        margin-right: 9px;
        font-weight: bold;
        @media screen and (max-width: 834px){
            display: none;
        }
    }

    .active li::after{
        width: 100%;
        border-bottom: 3px solid #fff;

    }

    a{
        text-decoration: none;
    }

`

export const hamburguerHeader = styled.div`
    display: none;

    @media screen and (max-width: 430px){
        display: block;
    }
    .hamburguer{
        position: relative;
        
        cursor: pointer;    
        display: block;
        z-index: 101;
    }

    .hamburguer span{
        border-radius: 3px;
        display: block;
        margin: 3px 50px;
        width: 26px;
        height: 5px;
        background-color: #fff;
    }

    #hamburguerClosed{
        position: fixed;
        right: 5px;
        top: 75px;

    }
    #hamburguerClosed span:nth-child(2){
        display: none;
    }
    #hamburguerClosed span:nth-child(1){
        transform: rotate(45deg) translateX(5px);
    }
    #hamburguerClosed span:nth-child(3){
        transform: rotate(-45deg) translateX(6px);

    }

`

export const NavMobile = styled.div`

    position: fixed;
    right: -100%;
    z-index: 100;
    .navbarmobile{
        position: fixed;
        right: -100%;
        bottom: 0;
        height: 100vh;
        width: 60vw;
        background-color: #0B0D17;
        display: flex;
        justify-content: center;
    }
    ul{
        margin-top: 14rem;
        list-style: none;
    }
    li{
        margin-bottom: 20px;
        text-decoration: none;
        color: rgb(240,240,240);
        font-family: 'Bellefair';
        text-decoration: none;

    }
    a{
        text-decoration: none;
    }
    span{
        margin-right: 16px;
        color: #fff;
        font-weight: bold;
    }
    #open{
        right: 0;
    }

`
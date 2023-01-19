import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 834px){
        flex-direction: column;
    }


`
export const leftSide = styled.div`
    padding-top: 2vh;
    padding-left: 10vw;
    width: 50vw;
    height: 80vh;
    @media screen and (max-width: 834px){
        width: 100vw;
        height: 52vh;
        text-align: center;
        padding-top: 2vh;
        padding-left: 0;
    }
    @media screen and (max-width: 430px){
        height: 40vh;
        padding-top: 0;
    }
    p{
        font-size: 1.4rem;
        letter-spacing: 2px;
        font-family: 'Barlow Condensed', serif;
        color: #fff;
        margin-bottom: 10vh;
    }
    span{
        margin-right: 10px;
        color: #616476;
        font-weight: bold;

    }
    img{
        margin-left: 2rem;
        width: 70%;
        animation: spin 15s infinite linear;
        @media screen and (width: 2560px){
            width: 22vw;
        }
        @media screen and (max-width: 834px){
            width: 40%;
        }
        @media screen and (max-width: 430px){
            width: 70%;
            margin-left: 0;
        }

    }

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

`
export const rightSide = styled.div`
    width: 50vw;
    height: 80vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 6rem;
    @media screen and (max-width: 834px){
        width: 100vw;
        height: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        margin-bottom: 10rem;
    }

    @media screen and (max-width: 430px){
        height: 80vh;
        position: relative;
        top: 0;
        margin-bottom: 0;
    }
    
    h1{
        color: #fff;
        font-family: 'Bellefair', serif;
        margin-top: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 6rem;
        @media screen and (max-width: 834px){
            text-align: center;
        }
        @media screen and (max-width: 430px){
            font-size: 5rem;
        }
    }

    p{
        color: #D0D6F9;
        font-family: 'Barlow Condensed', serif;
        letter-spacing: 1px;
        width: 70%;
        border-bottom: 1px solid rgba(208, 214, 249, .3);
        padding-bottom: 60px;
    }

`

export const rightSideNavbar = styled.nav`
    ul{
        display: flex;
        gap: 2rem;
        list-style: none;
    }
    li{
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        font-family: 'Barlow Condensed', serif;
        color: #999;
        cursor: pointer;

        &::after{
            content: '';
            display: block;
            position: absolute;
            top: 25px;
            width: 0%;
            border-bottom: 3px solid #999;
            transition: width .2s;
        }

        &:hover::after{
            width: 100%;
            
        }
    }

    .active::after{
            content: '';
            display: block;
            position: absolute;
            top: 25px;
            width: 100%;
            border-bottom: 3px solid #fff;
            transition: width .2s;
        }
    .active{
        color: #fff;
    }
`

export const plusContent = styled.div`
    display: flex;
    p{
        margin-top: 1rem;
        color: rgba(208, 214, 249, .8);
        letter-spacing: 1px;
        width: 100%;
        padding: 0;
        border: none;
    }
    h3{
        margin-top: .6rem;
        color: #fff;
        font-weight: 400;
        font-size: 1.5rem;
        font-family: 'Bellefair', serif;


    }
    .distance{
        margin-right: 5rem;
    }


`
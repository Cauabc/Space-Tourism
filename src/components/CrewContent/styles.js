import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 826px){
        flex-direction: column;
    }
    @media screen and (max-width: 430px){
        flex-direction: column-reverse;
    }



`
export const leftSide = styled.div`
    padding-left: 11vw;
    padding-top: 4vh;
    width: 50vw;
    height: 80vh;
    position: relative;
    @media screen and (max-width: 826px){
        padding-top: 7vh;
        width: 100vw;
        height:80vh;
        padding-left: 0;
        text-align: center;
    }
    @media screen and (max-width: 430px){
        padding: 0;
        margin-top: 21rem;
        
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
    .title{
        position: absolute;
        top: -300px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
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
    position: relative;
    @media screen and (max-width: 826px){
        height: 100%;
        width: 100vw;
        align-items: center;
        padding-left: 0;
    }
    img{
        position: absolute;
        bottom: 0;
        height: 38vw;
        @media screen and (max-width: 826px){
            height: 56vw;
        }
        @media screen and (max-width: 430px){
            bottom: -320px;
        }
    }


`
export const About = styled.div`
    margin-top: 10vh;
    p{
        color: #D0D6F9;
        font-weight: 400;
        font-size: 1.3rem;
        width: 35vw;
        @media screen and (max-width: 826px){
            text-align: center;
            width: 100vw;
            padding: 0 5rem;
        }
        @media screen and (max-width: 430px){
            font-size: 1.2rem;
            padding: 0 3rem;
        }
    }
    h1{
        margin: .8rem 0;
        font-family: 'Bellefair', serif;
        color: #fff;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 3rem;
        width: 100vw;
        @media screen and (max-width: 430px){
            font-size: 2.2rem;
            padding: 0;
        }
    }
    span{
        text-transform: uppercase;
        font-size: 1.6rem;
        font-family: 'Bellefair', serif;
        font-weight: 400;
        color: rgb(135, 135, 135);
        
    }
`

export const next = styled.div`
    display: flex;
    position: absolute;
    top: 450px;
    @media screen and (max-width: 826px){
        left: 50%;
        top: 435px;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 430px){
        top: 10px;
    }
    span{
        cursor: pointer;
        border-radius: 50%;
        background-color: #333;
        width: 15px;
        height: 15px;
        @media screen and (max-width: 826px){
            background-color: #111;
        }   

        &:hover{
            background-color: #888;
            
        }
    }
    .active{
        background-color: #fff;

        &:hover{
            background-color: #fff;
            
        }
    }
`
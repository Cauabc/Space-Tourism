import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    @media screen and (max-width: 834px){
        flex-direction: column;
    }
    justify-content: space-between;
`

export const leftSide = styled.div`
    width: 60vw;
    padding-top: 6vw;
    padding-left: 9vw;
    height: 80vh;
    
    @media screen and (max-width: 834px){
        width: 100vw;
        padding-top: 5vw;
        padding-left: 0;
        height: 30vh;
    }

    p{
        font-family: 'Barlow Condensed', serif;
        color: #D0D6F9;
        font-size: 1.3rem;
        letter-spacing: 2px;

        @media screen and (max-width: 834px){
            text-align: center;
            font-size: 1rem;
            margin: 0 10rem;

        }
        @media screen and (max-width: 430px){
            font-size: 1rem;
            margin: 0 2rem;
        }
    }
    h1{
        margin: 2rem 0;
        font-size: 7rem;
        font-family: 'Bellefair', serif;
        width: 100%;
        color: #fff;
        font-weight: 400;

        @media screen and (max-width: 834px){
            text-align: center;
            font-size: 9rem;
            margin: 0;
        }
        @media screen and (max-width: 430px){
            font-size: 6rem;
            margin: 1rem 0;
        }
    }

`
export const rightSide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    @media screen and (max-width: 430px){
        height: 33rem;
    }
    @media screen and (max-width: 834px){
        height: 30rem;
    }

    button{
        cursor: pointer;
        width: 255px;
        height: 255px;
        border: none;
        border-radius: 50%;
        background-color: #fff;
        font-family: 'Barlow Condensed', serif;
        font-size: 3rem;
        transition: .4s;
        &:hover{
            width: 300px;
            height: 300px;
            
        }
        @media screen and (max-width: 430px){
            width: 180px;
            height: 180px;
            font-size: 2rem;
            &:hover{
                width: 250px;
                height: 250px;
            }
        }

       
        
        
    }
    
`
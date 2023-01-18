import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 826px){
        flex-direction: column-reverse;
    }


`
export const leftSide = styled.div`
    padding-left: 11vw;
    padding-top: 6vh;
    width: 50vw;
    height: 80vh;
    @media screen and (max-width: 826px){
        padding-left: 0;
        height: 100%;
        margin-bottom: 10rem;
        width: 100vw;
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
        font-family: 'Barlow Condensed', serif;
        letter-spacing: 3px;
    }
    img{
        margin-left: 2rem;
        width: 70%;
    }

    .title{
        @media screen and (max-width: 826px){
            position: absolute;
            top: 24vh;
            left: 50%;
            transform: translateX(-50%);
        }
        @media screen and (max-width: 430px) {
            font-size: 1.1rem;
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
    @media screen and (max-width: 826px){
        padding-left: 0;
        width: 100vw;
        padding-top: 5rem;
        padding-left: 0;
    }
    
    h1{
        color: #fff;
        font-family: 'Bellefair', serif;
        margin-top: 1rem;
        font-weight: 400;
        font-size: 6rem;
    }

    p{
        color: #D0D6F9;
        font-family: 'Barlow Condensed', serif;
        letter-spacing: 1px;
        width: 70%;
        border-bottom: 1px solid rgba(208, 214, 249, .3);
        padding-bottom: 60px;
        
    }

    img{
        width: 100%;
        height: 70vh;
        @media screen and (max-width: 826px){
            width: 100vw;
            height: 50vh;
        }
    }

`

export const leftContent = styled.div`
    display: flex;
    gap: 3rem;
    @media screen and (max-width: 826px){
        flex-direction: column;
        align-items: center;
        padding: 0 3rem;
    }
`

export const options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
    @media screen and (max-width: 826px){
        flex-direction: row;
    }

    button{
        cursor: pointer;
        width: 10vh;
        height: 10vh;
        border-radius: 50%;
        font-family: 'Bellefair', serif;
        font-size: 5vh;
        background-color: transparent;
        border: 1px solid #444;
        color: #fff;

        &:hover{
            border: 1px solid #fff;
        }
    }

    .active{
        background-color: #fff;
        border: 1px solid #fff;
        color: #0B0D17;

        &:hover{
            background-color: #fff; 
        }
    }
`

export const data = styled.div`
    @media screen and (max-width: 826px){
        text-align: center;
        
    }
    h1{
        color: #fff;
        font-family: 'Bellefair', serif;
        font-weight: 400;
        text-transform: uppercase;
        margin: 1rem 0;
        font-size: 2.8rem;
    }
    span{
        color: #D0D6F9;
        font-size: .9rem;
        opacity: .8;
        font-weight: 400;
        
    }

`
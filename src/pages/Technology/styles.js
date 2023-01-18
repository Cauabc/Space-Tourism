import styled from "styled-components";

export const body = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-image: url("./background-technology-desktop.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color:#0B0D17;
    @media screen and (max-width: 826px){
        background-image: url("./background-technology-tablet.jpg");
    }
    @media screen and (max-width: 430px){
        background-image: url("./background-technology-mobile.jpg");
    }
`
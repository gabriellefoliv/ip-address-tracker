import styled from "styled-components";


export const IpTracker = styled.main`
    background-size: cover;
    height: 310px;
    padding-top: 4rem;
    position: relative;

    @media (min-width: 960px) {
        padding-top: 2rem;
        height: 45vh;
    }
`;

export const BackgroundImgStyled = styled.img`
    width: 100%;
`;

export const IpTrackerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;

    max-width: 85%;
    margin: 0 auto;
    

    @media (min-width: 960px) {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }
`;

export const IpTrackerTitle = styled.h1`
    margin-bottom: 4rem;
    color: #fff;

    @media (min-width: 960px) {
        margin-bottom: 2rem;
    }
`;

export const IpTrackerForm = styled.form`
    display: grid;
    grid-template-columns: 5fr 1fr;
    width: 100%;

    @media (min-width: 960px) {
        width: 70%;
        grid-template-columns: 9fr 1fr;
    }
`;


export const IpTrackerButton = styled.button`
    background: rgba(10,10,10,1);
    border: none;
    border-radius: 0 0.9375rem 0.9375rem 0;
    -webkit-border-radius: 0 0.9375rem 0.9375rem 0;
    -moz-border-radius: 0 0.9375rem 0.9375rem 0;
    -ms-border-radius: 0 0.9375rem 0.9375rem 0;
    -o-border-radius: 0 0.9375rem 0.9375rem 0;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background: hsl(0, 0%, 17%);;
        cursor: pointer;
        transition: 0.2s;
        -webkit-transition: 0.2s;
        -moz-transition: 0.2s;
        -ms-transition: 0.2s;
        -o-transition: 0.2s;
    }
`;

export const SubmitArrow = styled.img`
    justify-self: center;
`;
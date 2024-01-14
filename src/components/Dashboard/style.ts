import styled from "styled-components";

export const DashboardSection = styled.section`
    background: #fff;
    width: 85%;
    border-radius: 0.9375rem;
    -webkit-border-radius: 0.9375rem;
    -moz-border-radius: 0.9375rem;
    -ms-border-radius: 0.9375rem;
    -o-border-radius: 0.9375rem;
    padding: 4rem;
    position: absolute;
    top: 190px;
    z-index: 10000;

    @media (min-width: 960px) {
        display: flex;
        justify-content: space-between;
        padding: 1.5rem;
        text-align: left;
        top: 222px;
    }

`;

export const DashboardInfo = styled.div`
    margin-bottom: 1.5rem;
`;

export const DashTitle = styled.span`
    display: inline-block;
    text-transform: uppercase;
    font-weight: 500;
    color: hsl(0, 0%, 59%); //dark gray
    font-size: 0.75rem;
    letter-spacing: 0.6px;
    margin-bottom: 1rem;

    @media (min-width: 960px) {
        margin-bottom: 1rem;
    }
`;

export const DashContent = styled.h3`
  
`;
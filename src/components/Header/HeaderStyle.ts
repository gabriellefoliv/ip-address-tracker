import styled from "styled-components";

export const HeaderSection = styled.section`
  
`;

export const HeaderArticle = styled.article`
  
`;

export const HeaderTitle = styled.h1`
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding-top: 50px;
    margin-bottom: 32px;

`;

export const HeaderForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const HeaderInput = styled.input`
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 8px 0 0 8px;
    width: 500px;
    border: none;
    outline: none;
`;

export const SubmitButton = styled.button`
    background-color: black;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;
    border: none;
    &:hover{
        opacity: 0.5;
    }
    border-radius: 0 8px 8px 0;

`;

export const SubmitImg = styled.img`
  
`;

export const BackgroundContainer = styled.div`
    position: absolute;
    z-index: -10;
`;

export const BackgroundImg = styled.img`
    width: 100%;
    height: 320px;
    object-fit: cover;
`;
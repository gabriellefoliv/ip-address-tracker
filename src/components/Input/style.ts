import styled from "styled-components";

export const InputBlock = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
`;

export const InputLabel = styled.label`
  
`;

export const InputStyled = styled.input`
    width: 100%;
    padding: 2rem 4rem;
    color: hsl(0, 0%, 17%);
    border: none;
    border-radius: 0.9375rem 0 0 0.9375rem;
    -webkit-border-radius: 0.9375rem 0 0 0.9375rem;
    -moz-border-radius: 0.9375rem 0 0 0.9375rem;
    -ms-border-radius: 0.9375rem 0 0 0.9375rem;
    -o-border-radius: 0.9375rem 0 0 0.9375rem;

    &:focus {
        outline: 1px solid hsl(0, 0%, 59%);
        -moz-outline-radius: 0.9375rem 0 0 0.9375rem;
    }

    @media (min-width: 960px) {
        padding: 1.5rem 2rem;
    }
`;


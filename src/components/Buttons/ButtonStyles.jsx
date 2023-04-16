import styled from "styled-components";

export const FooterWrap = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-around;
    span {
        color: white;
        font-weight: 600;
        height: 40px;
    }
    button {
        height: 40px;
        width: 170px;
        font-size:16px;
        border-radius: 10px;
        border: none;
        background-color: #6441a5;
        color: white;
        cursor: pointer;
    }
    button:hover {
        transform: scale(110%);
        background-color: #5c23c7;

    }

`
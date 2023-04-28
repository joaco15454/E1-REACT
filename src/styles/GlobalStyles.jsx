import styled , { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

    body {
        background-color: #6441a5;
        
        
        .containerTask {
            display: flex;
            align-items: center;
        }
    }
   
`
export default GlobalStyles;
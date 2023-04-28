import styled from "styled-components";


export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
    gap: 10px;
    margin-top: 40px;
    background-color:#483d8b;
    
    height: 700px; 
    `
export const PokeCont = styled.form`
   display: flex;
   justify-content: center;
   align-items: start;
    gap: 10px;
    margin-top: 40px;
    background-color:#483d8b;
    
    
    .btn_search {
        margin-top: 35px;
       background-color: #e6ddf0;
        border-color: #9bbe5a;
        height: 23px;
        width: 100px;
        cursor: pointer;
    }
    
`
export const Search = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
    
    gap: 10px;
    
    input {
        width: 200px;
        height: 30px;
       background-color: #e6ddf0;
        border-color: #9bbe5a;
       
    }
    label {
        font-size: 20px;
    }
`

export const CardPoke = styled.div`
    background-color: #cca90f;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    height: 500px;
    width: 300px;
    border-radius: 15px;
   
    h1 {
        font-weight: 600;
        text-align: center;
        letter-spacing: 1px;
        color: #000000;
        border: 1px solid gray;
        width: 100%;
    }
    span {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 25px;
        color: #7e2d0879;
    }
    img {
        height: 50%;
    }
    p {
        font-size: 20px;
    }
`
import styled from "styled-components";



export const FooterDiv = styled.div`
    border: 0px solid black;
    height: 100vh;
    width: 20%;
`;
export const Logodiv = styled.div`
    
    height:10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid gray;
    `;
export const Username = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
export const User = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    `;
export const Userimage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid gray;
    overflow: hidden;
    `
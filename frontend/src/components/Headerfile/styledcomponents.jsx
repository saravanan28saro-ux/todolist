import styled from "styled-components";

export const Headerdiv = styled.div`
  
  height: 100vh;
  width: 15%;
  margin: 0;
  padding-top: 20px;
  

`;

export const Logodiv = styled.div`
    
    height:10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid gray;
    `;

    export const Dashbord = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;
    height:60%;
    `
export const Button = styled.button`
  border: 0;
  padding: 7px;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "blue" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
  display: flex;
  justify-content: flex-start;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: blue;
  }
`;
import styled from "styled-components";

export const Headerdiv = styled.div`
  
  height: 100vh;
  width: 15%;
  margin: 0;
  padding-top: 20px;
    box-shadow: 4px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius:30px;

`;

export const Logodiv = styled.div`
    
    height:10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
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

  background-color: ${(props) =>
    props.active ? "blue" : "transparent"};

  color: ${(props) =>
    props.active ? "white" : "black"};

  display: flex;
  justify-content: flex-start;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: blue;
  }
`;

export const ADDbutton=styled.button`
margin:10px;
border: 0;
  padding: 7px;
  width: 80%;
  border-radius: 5px;

  background-color:blue;

  color:white;

  display: flex;
  justify-content: flex-start;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    
  }
`;
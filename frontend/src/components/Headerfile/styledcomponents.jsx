import styled from "styled-components";

export const Headerdiv = styled.div`
  height: 100vh;
  width: 15%;
  margin: 0;
  padding-top: 20px;
  box-shadow: 4px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  box-sizing: border-box;
  background-color: white;

  @media (max-width: 1200px) {
    width: 18%;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.open ? "0" : "-280px")};
    width: 250px;
    height: 100vh;
    padding-top: 20px;
    z-index: 1000;
    border-radius: 0 20px 20px 0;
    transition: left 0.3s ease;
  }
`;

export const Logodiv = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: 12%;
  }
`;

export const Dashbord = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  height: 60%;
`;

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

export const ADDbutton = styled.button`
  margin: 10px;
  border: 0;
  padding: 7px;
  width: 80%;
  border-radius: 5px;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;

    position: fixed;
    top: 15px;
    right: 15px;   /* changed from left to right */

    width: 45px;
    height: 45px;

    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 8px;

    background-color: blue;
    color: white;

    font-size: 28px;
    cursor: pointer;

    z-index: 2000;

    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
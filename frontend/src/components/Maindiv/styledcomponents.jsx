import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
export const MainDiv = styled.div`

    border: 1px solid black;
    border-top: none;
    height: 100vh;
    width: 70%;
`;

export const Tittlediv = styled.div`

padding:20px;
display:flex;
justify-content:space-between;
align-items:center;
`;
export const SearchBox = styled.div`
  position: relative;
  width: 300px;
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: gray;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Carddiv = styled.div`
  display: flex;
  justify-content:space-around;
    flex-wrap: wrap;

    `;

export const Cardbox=styled.div`
padding:10px;
border-radius:10px;
color:white;
width:20%;

transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
export const MainDiv = styled.div`

    
    border-top: none;
    height: 100vh;
    width: 100%;
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

export const Tasklist = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding :20px;
`;

export const List = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 18px 20px;
  

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    border-color: #2563eb;
  }
`;

export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    color: #1f2937;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: #6b7280;
  }
`;

export const TaskDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Priority = styled.span`
  padding: 5px 10px;
  border-radius: 20px;

  font-size: 12px;
  font-weight: 600;

  background: #fff7ed;
  color: #ea580c;
`;

export const Status = styled.span`
  padding: 5px 10px;
  border-radius: 20px;

  font-size: 12px;
  font-weight: 600;

  background: #ecfdf5;
  color: #059669;
`;

export const ActionButton = styled.button`
  border: none;
  background: transparent;

  padding: 7px;
  border-radius: 6px;

  cursor: pointer;
  font-size: 18px;

  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    transform: scale(1.1);
  }
`;
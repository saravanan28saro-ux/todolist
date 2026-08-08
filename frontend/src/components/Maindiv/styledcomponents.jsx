import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const MainDiv = styled.div`
  border-top: none;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Tittlediv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    padding-top: 70px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
    padding-top: 70px;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
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
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: blue;
    box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.08);
  }
`;

export const Carddiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    padding: 0 10px;
  }
`;

export const Cardbox = styled.div`
  padding: 10px;
  border-radius: 10px;
  color: white;
  width: 20%;
  box-sizing: border-box;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    width: 22%;
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Tasklist = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const List = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 18px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  transition: all 0.25s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    border-color: #2563eb;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
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

  @media (max-width: 480px) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
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
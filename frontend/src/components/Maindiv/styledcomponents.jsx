import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const MainDiv = styled.div`
  min-height: 100vh;
  width: 100%;

  background: #f8fafc;

  box-sizing: border-box;

  overflow-x: hidden;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const Tittlediv = styled.div`
  padding: 25px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  background: #ffffff;

  border-bottom: 1px solid #e5e7eb;

  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 28px;
  }

  p {
    margin: 6px 0 0;
    color: #6b7280;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 20px;

    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SearchBox = styled.div`
  position: relative;

  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;

  left: 14px;
  top: 50%;

  transform: translateY(-50%);

  color: #9ca3af;

  font-size: 18px;

  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;

  padding: 12px 15px 12px 42px;

  border: 1px solid #e5e7eb;

  border-radius: 10px;

  outline: none;

  background: #f9fafb;

  color: #111827;

  font-size: 14px;

  box-sizing: border-box;

  transition: all 0.25s ease;

  &:focus {
    background: white;

    border-color: #2563eb;

    box-shadow:
      0 0 0 3px
      rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Carddiv = styled.div`
  display: grid;
  

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 20px;

  padding: 25px 30px;

  box-sizing: border-box;

  @media (max-width: 1100px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    padding: 15px;
  }
`;

export const Cardbox = styled.div`
  min-height: 145px;

  padding: 20px;

  border-radius: 16px;

  color: white;

  box-sizing: border-box;

  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  cursor: default;

  &:hover {
    transform: translateY(-5px);

    box-shadow:
      0 12px 25px rgba(0, 0, 0, 0.14);
  }

  h1 {
    margin: 0;

    font-size: 16px !important;

    font-weight: 600;
  }

  h2 {
    margin: 15px 0 5px;

    font-size: 32px;

    font-weight: 700;
  }

  p {
    margin: 0;

    font-size: 13px;

    opacity: 0.9;
  }
`;
export const Tasklist = styled.div`
  margin-top: 5px;

  display: flex;

  flex-direction: column;

  gap: 12px;

  width: 100%;

  padding: 0 30px 30px;

  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 15px 20px;
  }
`;
export const List = styled.div`
  width: 100%;

  min-height: 75px;

  padding: 16px 20px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  background: white;

  border: 1px solid #e5e7eb;

  border-radius: 12px;

  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.04);

  box-sizing: border-box;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    border-color: #bfdbfe;

    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 650px) {
    flex-direction: column;

    align-items: flex-start;

    gap: 15px;
  }
`;
export const TaskInfo = styled.div`
  display: flex;

  flex-direction: column;

  gap: 6px;

  min-width: 0;

  h3 {
    margin: 0;

    color: #111827;

    font-size: 16px;

    font-weight: 600;

    word-break: break-word;
  }

  p {
    margin: 0;

    color: #6b7280;

    font-size: 13px;
  }
`;

export const TaskDetails = styled.div`
  display: flex;

  align-items: center;

  gap: 10px;

  flex-shrink: 0;

  @media (max-width: 650px) {
    width: 100%;

    justify-content: flex-end;
  }
`;
export const Priority = styled.span`
  padding: 5px 10px;

  border-radius: 20px;

  font-size: 11px;

  font-weight: 600;

  background: #fff7ed;

  color: #ea580c;

  white-space: nowrap;
`;

export const Status = styled.span`
  padding: 5px 10px;

  border-radius: 20px;

  font-size: 11px;

  font-weight: 600;

  background: #ecfdf5;

  color: #059669;

  white-space: nowrap;
`;
export const ActionButton = styled.button`
  width: 34px;

  height: 34px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: none;

  background: #f3f4f6;

  color: #4b5563;

  border-radius: 8px;

  cursor: pointer;

  font-size: 15px;

  transition: all 0.2s ease;

  &:hover {
    background: #dbeafe;

    color: #2563eb;

    transform: translateY(-2px);
  }
`;
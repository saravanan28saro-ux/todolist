import styled from "styled-components";

export const AddTaskContainer = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;

  /* Mobile */
  @media (max-width: 480px) {
    padding: 10px;
    align-items: center;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 20px;
  }
`;

export const AddTaskForm = styled.form`
  width: 500px;
  max-width: 90%;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 18px;

  /* Large screens */
  @media (min-width: 1200px) {
    width: 550px;
    padding: 35px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    padding: 25px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 20px;
    border-radius: 12px;
    gap: 14px;
  }
`;

export const FormTitle = styled.h1`
  margin: 0 0 10px;
  font-size: 28px;
  font-weight: 700;
  color: blue;

  /* Tablet */
  @media (max-width: 768px) {
    font-size: 24px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 5px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #374151;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: blue;
    box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.08);
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: blue;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;

  /* Mobile */
  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 5px;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 11px 18px;
  background: blue;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 13px;
  }
`;

export const CancelButton = styled.button`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 11px 18px;
  background: white;
  color: #374151;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 13px;
  }
`;
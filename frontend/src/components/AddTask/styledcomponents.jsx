import styled from "styled-components";

export const AddTaskContainer = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
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
`;

export const FormTitle = styled.h1`
  margin: 0 0 10px;

  font-size: 28px;
  font-weight: 700;

  color: blue;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
`;

export const Input = styled.input`
  width: 100%;

  padding: 12px 14px;

  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;

  outline: none;

  &:focus {
    border-color: blue;
    box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.08);
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

  &:focus {
    border-color: blue;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 12px;

  margin-top: 10px;
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
`;
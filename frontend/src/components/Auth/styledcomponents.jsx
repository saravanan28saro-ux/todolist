import styled from "styled-components";


export const AuthContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  box-sizing: border-box;

  background:
    radial-gradient(
      circle at top left,
      rgba(37, 99, 235, 0.15),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #eff6ff,
      #ffffff,
      #eef2ff
    );
`;


export const AuthCard = styled.div`
  width: 430px;
  max-width: 100%;

  padding: 40px;

  background: rgba(255, 255, 255, 0.95);

  border: 1px solid #e5e7eb;

  border-radius: 24px;

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.12);

  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 25px 20px;

    border-radius: 18px;
  }
`;


export const Logo = styled.div`
  width: 65px;
  height: 65px;

  margin: 0 auto 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 18px;

  background: blue;

  color: white;

  font-size: 30px;

  box-shadow:
    0 10px 25px rgba(0, 0, 255, 0.25);
`;


export const Title = styled.h1`
  margin: 0;

  text-align: center;

  color: #111827;

  font-size: 28px;
  font-weight: 700;
`;


export const Subtitle = styled.p`
  margin: 8px 0 25px;

  text-align: center;

  color: #6b7280;

  font-size: 14px;
`;


export const Form = styled.form`
  display: flex;

  flex-direction: column;

  gap: 17px;
`;


export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;

  gap: 7px;
`;


export const Label = styled.label`
  color: #374151;

  font-size: 14px;

  font-weight: 600;
`;


export const Input = styled.input`
  width: 100%;

  padding: 13px 14px;

  box-sizing: border-box;

  border: 1px solid #d1d5db;

  border-radius: 10px;

  outline: none;

  background: white;

  color: #111827;

  font-size: 14px;

  transition: all 0.2s ease;

  &:focus {
    border-color: blue;

    box-shadow:
      0 0 0 3px
      rgba(0, 0, 255, 0.08);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;


export const SubmitButton = styled.button`
  width: 100%;

  margin-top: 5px;

  padding: 13px;

  border: none;

  border-radius: 10px;

  background: blue;

  color: white;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
      rgba(0, 0, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;


export const ErrorMessage = styled.div`
  margin-bottom: 15px;

  padding: 11px 13px;

  display: flex;

  align-items: center;

  gap: 8px;

  border-radius: 9px;

  background: #fef2f2;

  color: #dc2626;

  font-size: 13px;
`;


export const SuccessMessage = styled.div`
  margin-bottom: 15px;

  padding: 11px 13px;

  display: flex;

  align-items: center;

  gap: 8px;

  border-radius: 9px;

  background: #ecfdf5;

  color: #059669;

  font-size: 13px;
`;


export const BottomText = styled.p`
  margin: 22px 0 0;

  text-align: center;

  color: #6b7280;

  font-size: 14px;
`;


export const LinkButton = styled.button`
  margin-left: 5px;

  padding: 0;

  border: none;

  background: transparent;

  color: blue;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
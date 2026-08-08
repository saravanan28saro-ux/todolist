import styled from "styled-components";


// ========================================
// SIDEBAR
// ========================================

export const Headerdiv = styled.div`
  width: 260px;
  height: 100vh;

  margin: 0;
  padding: 20px 12px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  background: #ffffff;

  border-right: 1px solid #e5e7eb;

  box-shadow:
    4px 0 20px rgba(0, 0, 0, 0.04);

  position: relative;

  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    width: 220px;
  }

  @media (max-width: 768px) {
    position: fixed;

    top: 0;

    left: ${(props) =>
      props.open ? "0" : "-280px"};

    width: 250px;

    height: 100vh;

    padding: 20px 12px;

    z-index: 1000;

    border-right: none;

    border-radius: 0 18px 18px 0;

    box-shadow:
      8px 0 30px rgba(0, 0, 0, 0.12);

    transition: left 0.3s ease;
  }
`;


// ========================================
// LOGO
// ========================================

export const Logodiv = styled.div`
  min-height: 70px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 12px;

  padding: 10px;

  margin-bottom: 20px;

  border-bottom: 1px solid #f1f5f9;

  box-sizing: border-box;

  div {
    min-width: 0;
  }

  h3 {
    margin: 0;

    color: #111827;

    font-size: 20px;

    font-weight: 700;
  }

  p {
    margin: 3px 0 0;

    color: #9ca3af;

    font-size: 11px;
  }

  @media (max-width: 768px) {
    min-height: 75px;
  }
`;


// ========================================
// DASHBOARD MENU
// ========================================

export const Dashbord = styled.div`
  display: flex;

  flex-direction: column;

  gap: 7px;

  padding: 5px;

  flex: 1;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d5db;

    border-radius: 10px;
  }
`;


// ========================================
// MENU BUTTON
// ========================================

export const Button = styled.button`
  width: 100%;

  min-height: 44px;

  padding: 10px 13px;

  border: none;

  border-radius: 9px;

  display: flex;

  align-items: center;

  justify-content: flex-start;

  gap: 12px;

  background: ${(props) =>
    props.active
      ? "#2563eb"
      : "transparent"};

  color: ${(props) =>
    props.active
      ? "#ffffff"
      : "#4b5563"};

  font-size: 14px;

  font-weight: 500;

  cursor: pointer;

  text-align: left;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  i {
    width: 20px;

    font-size: 17px;

    text-align: center;
  }

  &:hover {
    background: ${(props) =>
      props.active
        ? "#2563eb"
        : "#eff6ff"};

    color: ${(props) =>
      props.active
        ? "#ffffff"
        : "#2563eb"};

    transform: translateX(3px);
  }
`;


// ========================================
// ADD TASK BUTTON
// ========================================

export const ADDbutton = styled.button`
  width: calc(100% - 20px);

  min-height: 44px;

  margin: 10px;

  padding: 10px 14px;

  border: none;

  border-radius: 9px;

  display: flex;

  align-items: center;

  justify-content: flex-start;

  gap: 12px;

  background: #2563eb;

  color: #ffffff;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 5px 12px
    rgba(37, 99, 235, 0.2);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: #1d4ed8;

    transform: translateY(-2px);

    box-shadow:
      0 8px 18px
      rgba(37, 99, 235, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;


// ========================================
// MOBILE MENU BUTTON
// ========================================

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;

    position: fixed;

    top: 15px;

    right: 15px;

    width: 45px;

    height: 45px;

    align-items: center;

    justify-content: center;

    border: none;

    border-radius: 10px;

    background: #2563eb;

    color: white;

    font-size: 26px;

    cursor: pointer;

    z-index: 2000;

    box-shadow:
      0 5px 15px
      rgba(0, 0, 0, 0.15);

    transition:
      transform 0.2s ease,
      background 0.2s ease;

    &:hover {
      background: #1d4ed8;

      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;


// ========================================
// LOGOUT BUTTON
// ========================================

export const LogoutButton = styled.button`
  width: calc(100% - 20px);

  min-height: 44px;

  margin: 10px;

  padding: 10px 14px;

  border: 1px solid #fee2e2;

  border-radius: 9px;

  display: flex;

  align-items: center;

  justify-content: flex-start;

  gap: 12px;

  background: #fff7f7;

  color: #dc2626;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  i {
    font-size: 17px;
  }

  &:hover {
    background: #fee2e2;

    color: #b91c1c;

    transform: translateX(3px);
  }

  &:active {
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;
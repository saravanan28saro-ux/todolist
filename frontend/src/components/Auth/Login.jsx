
import React, { useState } from "react";

import {
  AuthContainer,
  AuthCard,
  Logo,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
  BottomText,
  LinkButton,
} from "./styledcomponents";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { loginUser } from "../Data/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [success, setSuccess] = useState(
    location.state?.message || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim() || !password.trim()) {
      setError(
        "Please enter email and password."
      );
      return;
    }

    const result = loginUser({
      email: email.trim(),
      password,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/dashboard", {
  replace: true,
});
  };

  return (
    <AuthContainer>
      <AuthCard>

        <Logo>
          <i className="bi bi-check2-square"></i>
        </Logo>

        <Title>
          Welcome Back
        </Title>

        <Subtitle>
          Login to manage your tasks
        </Subtitle>

        {success && (
          <SuccessMessage>
            <i className="bi bi-check-circle"></i>
            {success}
          </SuccessMessage>
        )}

        {error && (
          <ErrorMessage>
            <i className="bi bi-exclamation-circle"></i>
            {error}
          </ErrorMessage>
        )}

        <Form onSubmit={handleSubmit}>

          <FormGroup>
            <Label>Email ID</Label>

            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>

            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </FormGroup>

          <SubmitButton type="submit">
            <i className="bi bi-box-arrow-in-right"></i>
            Login
          </SubmitButton>

        </Form>

        <BottomText>
          Don't have an account?

          <LinkButton
            type="button"
            onClick={() =>
              navigate("/signup")
            }
          >
            Sign Up
          </LinkButton>
        </BottomText>

      </AuthCard>
    </AuthContainer>
  );
};

export default Login;


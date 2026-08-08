
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
  BottomText,
  LinkButton,
} from "./styledcomponents";

import { useNavigate } from "react-router-dom";

import { signupUser } from "../Data/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (
      !name.trim() ||
      !email.trim() ||
      !mobile.trim() ||
      !password.trim()
    ) {
      setError("Please fill all the fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setError(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    const result = signupUser({
      name: name.trim(),
      email: email.trim(),
      mobile,
      password,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/login", {
      replace: true,
      state: {
        message:
          "Account created successfully. Please login.",
      },
    });
  };

  return (
    <AuthContainer>
      <AuthCard>

        <Logo>
          <i className="bi bi-person-plus-fill"></i>
        </Logo>

        <Title>
          Create Account
        </Title>

        <Subtitle>
          Start managing your tasks today
        </Subtitle>

        {error && (
          <ErrorMessage>
            <i className="bi bi-exclamation-circle"></i>
            {error}
          </ErrorMessage>
        )}

        <Form onSubmit={handleSubmit}>

          <FormGroup>
            <Label>Name</Label>

            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>

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
            <Label>Mobile Number</Label>

            <Input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={mobile}
              maxLength={10}
              onChange={(e) =>
                setMobile(
                  e.target.value.replace(
                    /\D/g,
                    ""
                  )
                )
              }
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>

            <Input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </FormGroup>

          <SubmitButton type="submit">
            <i className="bi bi-person-plus"></i>
            Create Account
          </SubmitButton>

        </Form>

        <BottomText>
          Already have an account?

          <LinkButton
            type="button"
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </LinkButton>
        </BottomText>

      </AuthCard>
    </AuthContainer>
  );
};

export default Signup;


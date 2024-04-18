import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Register from "@components/register";

describe("Register component", () => {
  test("renders all input fields", () => {
    const { getByPlaceholderText } = render(<Register />);

    const nameInput = getByPlaceholderText("Nombre");
    const lastnameInput = getByPlaceholderText("Apellido");
    const emailInput = getByPlaceholderText("Correo electrónico");
    const passwordInput = getByPlaceholderText("Contraseña");

    expect(nameInput).toBeTruthy();
    expect(lastnameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });
});

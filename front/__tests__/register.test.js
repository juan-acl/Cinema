import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import Login from "@components/login";
import { store } from "@redux/configureStore";
import { act } from "react-test-renderer";

describe("Login component", () => {
  let getByPlaceholderText, getByTestId;

  beforeEach(() => {
    const rendered = render(
      <Provider store={store}>
        <NavigationContainer>
          <Login />
        </NavigationContainer>
      </Provider>,
    );
    getByPlaceholderText = rendered.getByPlaceholderText;
    getByTestId = rendered.getByTestId;
  });

  test("renders correctly", () => {
    const emailInput = getByPlaceholderText("Correo electrónico");
    expect(emailInput).toBeTruthy();
  });

  test("submits login form", async () => {
    await waitFor(() => {
      expect(getByTestId("submit-login")).toBeTruthy();
    });

    const loginButton = getByTestId("submit-login");
    await act(async () => {
      fireEvent.press(loginButton);
    });
  });
});

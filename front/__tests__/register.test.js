import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux"; // Importa Provider desde react-redux
import Login from "@components/login";
import { store } from "@redux/configureStore"; // Importa tu tienda de Redux

describe("Login component", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <Login />
        </NavigationContainer>
      </Provider>,
    );
  });
});

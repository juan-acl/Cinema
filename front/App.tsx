import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigation"
import { Provider } from "react-redux";
import { store } from "@redux/configureStore"

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}


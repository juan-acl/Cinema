import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@components/home";
import Login from "@components/login"
import Register from "@components/register";
import { Icon } from "react-native-elements";

const TabNavigation = createBottomTabNavigator();

const Tab_Navigation = () => {
    return (
        <TabNavigation.Navigator initialRouteName="Home_Screen" >
            <TabNavigation.Screen
                name="Login_Screen"
                component={Login}
                options={{
                    title: "Iniciar sesión",
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "#272727" },
                    tabBarIcon: () => <Icon name="sign-in" type="font-awesome" color="white" />
                }}
            />
            <TabNavigation.Screen
                name="Home_Screen"
                component={Home}
                options={{
                    title: "Inicio",
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "#272727" },
                    tabBarIcon: () => <Icon name="home" type="font-awesome" color="white" />,
                }}
            />
            <TabNavigation.Screen
                name="Register_Screen"
                component={Register}
                options={{
                    title: "Crear cuenta",
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "#272727" },
                    tabBarIcon: () => <Icon name="add-circle" type="material" color="white" />
                }}
            />
        </TabNavigation.Navigator>
    )
}

export default Tab_Navigation;
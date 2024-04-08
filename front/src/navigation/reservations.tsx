import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Invoice from "@components/invoice";
import MyReservations from "@components/myReservations";
import Cinema from "@components/cinema";

const StackNavigation = createStackNavigator();

const Stack_Navigation: React.FC = () => {
    return (
        <StackNavigation.Navigator
            initialRouteName="Cinema_Screen"
            screenOptions={{
                headerTintColor: "white",
            }}
        >
            <StackNavigation.Screen
                name="Invoice_Reservation_Screen"
                component={Invoice}
                options={{
                    title: "",
                    headerShown: true,
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
            <StackNavigation.Screen
                name="Cinema_Screen"
                component={Cinema}
                options={{
                    title: "",
                    headerShown: true,
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            />
        </StackNavigation.Navigator>
    )
}

export default Stack_Navigation;
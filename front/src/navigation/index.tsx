import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@components/home";

const TabNavigation = createBottomTabNavigator();

const Tab_Navigation = () => {
    return (
        <TabNavigation.Navigator>
            <TabNavigation.Screen
                name="Home_Screen"
                component={Home}
                options={{
                    title: "Home",
                    headerShown: false
                }} />
        </TabNavigation.Navigator>
    )
}

export default Tab_Navigation;
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@components/home";
import Login from "@components/login"
import Register from "@components/register";
import { Icon } from "react-native-elements";
import Profile from "@components/profile";
import Cinema from "@components/cinema";
import MyReservations from "@components/myReservations";
import { useSelector } from "react-redux";
import { RootState } from "@redux/configureStore";
import { TouchableOpacity } from "react-native";

const TabNavigation = createBottomTabNavigator();

const Tab_Navigation: React.FC = () => {
    const isLogin = useSelector((state: RootState) => state.user.login)
    const isLoading = useSelector((state: RootState) => state.pageLoader.loading)


    return (
        <TabNavigation.Navigator
            initialRouteName={!isLogin ? 'Home_Screen' : 'Cinema_Screen'}
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarLabelStyle: { fontSize: 11, fontWeight: "normal" },
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    backgroundColor: "#272727"

                }
            }}
        >
            {
                !isLogin ?
                    <>
                        <TabNavigation.Screen
                            name="Login_Screen"
                            component={Login}
                            options={{
                                title: "Iniciar sesión",
                                headerShown: false,
                                tabBarStyle: { backgroundColor: "#272727" },
                                tabBarIcon: () => <Icon name="sign-in" type="font-awesome" color="white" />,
                                tabBarButton: (props) => {
                                    if (!isLoading) {
                                        return (
                                            <TouchableOpacity {...props} />
                                        )
                                    }
                                }
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
                                tabBarButton: (props) => {
                                    if (!isLoading) {
                                        return (
                                            <TouchableOpacity {...props} />
                                        )
                                    }
                                }
                            }}
                        />
                        <TabNavigation.Screen
                            name="Register_Screen"
                            component={Register}
                            options={{
                                title: "Crear cuenta",
                                headerShown: false,
                                tabBarStyle: { backgroundColor: "#272727" },
                                tabBarIcon: () => <Icon name="add-circle" type="material" color="white" />,
                                tabBarButton: (props) => {
                                    if (!isLoading) {
                                        return (
                                            <TouchableOpacity {...props} />
                                        )
                                    }
                                }
                            }}
                        />
                    </>
                    :
                    <>
                        <TabNavigation.Screen
                            name={"Profile_Screen"}
                            component={Profile}
                            options={{
                                title: "Perfil",
                                headerShown: false,
                                tabBarStyle: { backgroundColor: "#272727" },
                                tabBarIcon: () => <Icon name="user" type="font-awesome" color="white" />,
                                tabBarButton: (props) => {
                                    if (!isLoading) {
                                        return (
                                            <TouchableOpacity {...props} />
                                        )
                                    }
                                }
                            }}
                        />
                        <TabNavigation.Screen
                            name="Cinema_Screen"
                            component={Cinema}
                            options={{
                                title: "Cine",
                                headerShown: false,
                                tabBarStyle: { backgroundColor: "#272727" },
                                tabBarIcon: () => <Icon name="film" type="font-awesome" color="white" />,
                                tabBarButton: (props) => {
                                    if (!isLoading) {
                                        return (
                                            <TouchableOpacity {...props} />
                                        )
                                    }
                                }

                            }}
                        />
                        <TabNavigation.Screen
                            name="MyReservations_Screen"
                            component={MyReservations}
                            options={{
                                title: "Mis reservaciones",
                                headerShown: false,
                                tabBarStyle: { backgroundColor: "#272727" },
                                tabBarIcon: () => <Icon name="ticket" type="font-awesome" color="white" />,
                                tabBarButton: (props) => {
                                    if (!isLoading) {
                                        return (
                                            <TouchableOpacity {...props} />
                                        )
                                    }
                                }
                            }}
                        />
                    </>
            }
        </TabNavigation.Navigator>
    )
}

export default Tab_Navigation;
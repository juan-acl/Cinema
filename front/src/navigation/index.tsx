import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@components/home";
import Login from "@components/login"
import Register from "@components/register";
import { Icon } from "react-native-elements";
import Profile from "@components/profile";
import Cinema from "@components/cinema";
import MyReservations from "@components/myReservations";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@redux/configureStore";

const TabNavigation = createBottomTabNavigator();

const Tab_Navigation: React.FC = () => {
    const isLogin = useSelector((state: RootState) => state.user.login)

    return (
        <TabNavigation.Navigator initialRouteName="Home_Screen" >
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
                    </> :
                    <>
                        <TabNavigation.Screen
                            name={"Profile_Screen"}
                            component={Profile}
                            options={{
                                title: "Perfil",
                                headerShown: false,
                                tabBarStyle: { backgroundColor: "#272727" },
                                tabBarIcon: () => <Icon name="user" type="font-awesome" color="white" />
                            }}
                        />
                        <TabNavigation.Screen
                            name="Cinema_Screen"
                            component={Cinema}
                            options={{
                                title: "Cine",
                                headerShown: false,
                                tabBarStyle: { backgroundColor: "#272727" },
                                tabBarIcon: () => <Icon name="film" type="font-awesome" color="white" />
                            }}
                        />
                        <TabNavigation.Screen
                            name="MyReservations_Screen"
                            component={MyReservations}
                            options={{
                                title: "Mis reservas",
                                headerShown: false,
                                tabBarStyle: { backgroundColor: "#272727" },
                                tabBarIcon: () => <Icon name="ticket" type="font-awesome" color="white" />
                            }}
                        />
                    </>
            }
        </TabNavigation.Navigator>
    )
}

export default Tab_Navigation;
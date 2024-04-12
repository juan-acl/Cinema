import { AppDispatch, RootState } from "@redux/configureStore";
import { Avatar, NativeBaseProvider } from "native-base";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Button } from "react-native-elements";
import { setUserLogOut } from "@redux/slices/user.slice";
import { setShowLoader } from "@redux/slices/loader.slice";
import { useDispatch } from "react-redux";
import PageLoader from "@components/loader"
import { useState } from "react";
import ModalEdit from "@components/modal";

interface User {
    _id: string,
    name: string,
    lastname: string
    email: string
    password: string
    __v: number
}

const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const user: User = useSelector((state: RootState) => state.user.profile)
    const isLoading = useSelector((state: RootState) => state.pageLoader.loading)
    const dispatch: AppDispatch = useDispatch();

    const logOut = () => {
        try {
            dispatch(setShowLoader(true))
            setTimeout(() => {
                dispatch(setUserLogOut(null))
            }, 300)
        } catch (error) {
            console.log('Error logout: ' + error)
        } finally {
            setTimeout(() => {
                dispatch(setShowLoader(false))
            }, 300)
        }
    }

    return (
        <SafeAreaView className="bg-customGray flex-1 justify-center">
            {
                isLoading
                    ?
                    <PageLoader />
                    :
                    <>
                        <View className="items-center justify-center " >
                            <Text className="text-white text-3xl mt-5">Bienvenido de nuevo {user.name}</Text>
                        </View>
                        <View className="items-center mt-5 justify-center flex mb-0 ">
                            <NativeBaseProvider >
                                <Avatar bg="amber.500" source={{
                                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }} size="2xl">
                                    NB
                                    <Avatar.Badge bg="green.500" />
                                </Avatar>
                            </NativeBaseProvider>
                            <View className=" flex flex-row items-center justify-center row-1 mt-40 ">
                                <View>
                                    <Text className="text-white text-2xl">Nombre: </Text>
                                    <Text className="text-white text-2xl">{user.name}</Text>
                                    <Text className="text-white text-2xl">Apellido: </Text>
                                    <Text className="text-white text-2xl">{user.lastname}</Text>
                                    <Text className="text-white text-2xl">Correco electr&oacute;nico: </Text>
                                    <Text className="text-white text-2xl">{user.email}</Text>
                                </View>
                            </View>
                            <View className="flex items-center justify-center flex-row mt-5" >
                                <Button
                                    title="Cerrar sesi&oacute;n"
                                    buttonStyle={{
                                        backgroundColor: 'black',
                                        borderColor: 'white',
                                        borderRadius: 30,
                                    }}
                                    containerStyle={{
                                        width: 150,
                                        marginLeft: 11,
                                    }}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    onPress={logOut}
                                />
                                <Button
                                    title="Actualizar perfil"
                                    buttonStyle={{
                                        backgroundColor: 'black',
                                        borderColor: 'white',
                                        borderRadius: 30,
                                    }}
                                    containerStyle={{
                                        width: 150,
                                        marginLeft: 11,
                                    }}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    onPress={() => setShowModal(true)}
                                />
                            </View>
                        </View>
                    </>
            }
            {showModal && <ModalEdit showModal={showModal} setShowModal={setShowModal} />}
        </SafeAreaView>
    )
}

export default Profile; 
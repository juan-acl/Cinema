import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements";

const Login = () => {
    return (
        <SafeAreaView className="flex-1 justify-center bg-customGray" >
            <View className="items-center" >
                <Text className="text-white text-3xl" >Iniciar sesi&oacute;n </Text>
            </View>
            <View>
                <Input
                    placeholder="Correo electrónico"
                    className="border-white w-full text-white"
                    errorMessage="Este campo es requerido"
                />
                <Input
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    className="border-white w-full text-white"
                    errorMessage="Este campo es requerido"
                />
            </View>
            <View className="items-center flex-row justify-center" >
                <Button title="Iniciar sesi&oacute;n"
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderColor: 'white',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 150,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                />
                <Button title="Cancelar"
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderColor: 'white',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 150,
                        marginLeft: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Login;
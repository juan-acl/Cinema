import { Button, NativeBaseProvider } from "native-base";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    return (
        <SafeAreaView className="flex-1 items-center bg-customGray" >
            <View >
                <NativeBaseProvider >
                    <Button colorScheme="dark" color='white' > Crear Cuenta </Button>
                    <Button colorScheme="dark" color='white' >Cancelar</Button>
                </NativeBaseProvider>
            </View>
        </SafeAreaView>
    )
}

export default Login;
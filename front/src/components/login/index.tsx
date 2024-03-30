import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    return (
        <SafeAreaView className="flex-1 items-center bg-customGray" >
            <View >
                <Text className="text-white" >
                    Login component
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Login;
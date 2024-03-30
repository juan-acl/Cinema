import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-customGray">
            <View>
                <Text className="text-white" >
                    Register component
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Register;
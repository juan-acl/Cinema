import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

const Invoice = () => {
    return (
        <SafeAreaView className="flex-1 justify-center bg-customGray" >
            <View>
                <Text>Invoice</Text>
            </View>
        </SafeAreaView>
    )
}

export default Invoice
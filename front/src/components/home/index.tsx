import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className="flex-1 bg-customGray" >
            <View >
                <Text className="text-white" >Home components</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;
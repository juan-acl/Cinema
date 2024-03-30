import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chair from "@components/chair";

const Cinema = () => {
    return (
        <SafeAreaView className="bg-customGray flex-1" >
            <View>
                <Chair color_reservation="red" />
                <Text>Chair</Text>
            </View>
        </SafeAreaView>
    )
}

export default Cinema;
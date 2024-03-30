import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chair from "@components/chair";

const Cinema = () => {
    let array = [
        {
            reserve: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 5, 6, 5, 4, 23, 2, 3, 2, 32, 3]
        },
        {
            reserve: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 5, 6, 5, 4, 23, 2, 3, 2, 32, 3]
        },
    ];
    return (
        <SafeAreaView className="flex-1 bg-customGray"  >
            <View className="items-center justify-center" >
                <Text className="text-white text-3xl" >Elige tus boletos</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                <Text className="text-white">Tu elección</Text>
                <View className="bg-orange-500 w-5 h-5" />

                <Text className="text-white">Reservado</Text>
                <View className="bg-red-600 w-5 h-5" />

                <Text className="text-white">Sin reservar</Text>
                <View className="bg-white w-5 h-5" />
            </View>
            <View className="flex-1 items-center justify-center flex-wrap flex-row m-5" >
                {array.map((item, index) => (
                    item.reserve.map((item, index) => (
                        <Chair color_reservation="red" />
                    ))
                ))}
            </View>
        </SafeAreaView>
    )
}

export default Cinema;
import { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chair from "@components/chair";
import { GetCinemas } from "@redux/slices/cinema.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/configureStore";

interface Seats {
    seat: Seat[]
}

interface Seat {
    status: Number
    no_seat: Number
}

const Cinema = () => {
    const [seats, setSeats] = useState<Seats[]>([]);
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        getCinemas();
    }, [])

    const getCinemas = async () => {
        const response = await dispatch(GetCinemas());
        setSeats(response.payload.cinemas[0].seats);
    }

    let array = [
        {
            reserve: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 5, 6, 5, 4, 23, 2, 3, 2, 32]
        },
        {
            reserve: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 5, 6, 5, 4, 23, 2, 3, 2, 32]
        },
    ];
    return (
        <SafeAreaView className="flex-1 bg-customGray">
            <View className="items-center justify-center" >
                <Text className="text-white text-3xl mt-5 mb-5" >Elige tus boletos</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                <Text className="text-white">Tu elección</Text>
                <View className="bg-orange-500 w-5 h-5" />
                <Text className="text-white">Reservado</Text>
                <View className="bg-red-600 w-5 h-5" />
                <Text className="text-white">Sin reservar</Text>
                <View className="bg-white w-5 h-5" />
            </View>
            <View className="flex-1 flex-wrap flex-row m-5 h-auto">
                {seats.map((item, index) => (
                    item.seat.map((item, index) => {
                        let clase = {
                            fontSize: 30,
                            padding: 15,
                            color: "white",
                        };
                        return (
                            <Chair clase={clase} color_reservation="red" />
                        );
                    }))
                )}
            </View>
        </SafeAreaView>
    )
}

export default Cinema;
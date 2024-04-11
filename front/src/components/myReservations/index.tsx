import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

const MyReservations = () => {

    -const geyMyRerservations = async () => {
        try {

        } catch (error) {
            console.log('Error getMyReservations', { error })
            return []
        }
    }

    return (
        <SafeAreaView className="bg-customGray flex-1" >
            <Text>My Reservations</Text>
        </SafeAreaView>
    )
}
export default MyReservations
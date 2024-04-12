import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetInvoicesById } from "@redux/slices/invoice.slice";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/configureStore";
import { useDispatch } from "react-redux";

interface Invoice {
    _id: String
    user: String
    no_seat: number[]
    total: number
}

const MyReservations = () => {
    const profile = useSelector((state: RootState) => state.user.profile);
    const dispatch: AppDispatch = useDispatch()
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    useEffect(() => {
        geyMyRerservations();
    }, [])

    const geyMyRerservations = async () => {
        try {
            const response = await dispatch(GetInvoicesById({ idUser: profile._id }))
            setInvoices(response.payload.data)
        } catch (error) {
            console.log('Error getMyReservations', { error })
            return []
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-customGray">
            <Text className="text-white text-3xl m-5 ml-5" >Facturas</Text>
            <FlatList
                data={invoices}
                numColumns={2}
                contentContainerStyle={styles.invoicesContainer}
                renderItem={({ item }) => (
                    <View style={styles.invoiceItem}>
                        <Text>N&uacute;mero de asientos: </Text>
                        <Text>{item.no_seat.join(', ')}</Text>
                        <Text>Total a pagar: </Text>
                        <Text>{item.total}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    invoicesContainer: {
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        marginLeft: 20
    },
    invoiceItem: {
        width: '45%',
        height: 100,
        backgroundColor: 'skyblue',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});

export default MyReservations
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Chair from "@components/chair";
import { GetCinemas } from "@redux/slices/cinema.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@redux/configureStore";
import { Button } from "react-native-elements";
import { View, Text } from 'react-native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import { useSelector } from "react-redux";
import PageLoader from '@components/loader'
import { useNavigation } from "@react-navigation/native";

interface Seats_ {
    _id: string,
    seats: SeatParams[]
    nameMovie: string
    image: string
    __v: number
}

interface Seat__ {
    _id: string,
    status: 0 | 1 | 2,
    no_seat: number
}

interface SeatParams {
    seat: Seat__[],
}

const Cinema = () => {
    const [seats, setSeats] = useState<Seats_[]>([]);
    const [reservedSeat, setReservedSeat] = useState<Seat__[]>([]);
    const [totalPay, setTotalPay] = useState<number>(0);

    const dispatch: AppDispatch = useDispatch();
    const navigation = useNavigation();
    const isLoading = useSelector((state: RootState) => state.pageLoader.loading)

    useEffect(() => {
        getCinemas();
    }, [])

    const getCinemas = async () => {
        const response = await dispatch(GetCinemas());
        setSeats(response.payload.cinemas);
    }

    const reserveSeat = (seat: Seat__) => {
        /*
        * status 0 = libre
        * status 1 = reservado
        * status 2 = seleccionado
        */
        let findSeat = seats[0].seats.find((item) => item.seat.find((itemSeat) => itemSeat.no_seat === seat.no_seat));
        if (findSeat?.seat[0].status === 1) return
        let containt = reservedSeat.find((item) => item.no_seat === seat.no_seat);
        let newSeats = [...seats];
        if (containt) {
            // ? remove seat
            setReservedSeat(reservedSeat.filter((item) => item._id !== seat._id))
            let index = seats[0].seats.findIndex((item) => item.seat.find(ele => ele.no_seat === seat.no_seat));
            newSeats[0].seats[index].seat[0].status = 0;
            setSeats(newSeats)
            return
        }
        // ? add seat
        setReservedSeat([...reservedSeat, seat])
        let index = seats[0].seats.findIndex((item) => item.seat.find(ele => ele.no_seat === seat.no_seat));
        newSeats[0].seats[index].seat[0].status = 2;
        setSeats(newSeats)
    }

    useEffect(() => {
        const total = reservedSeat.length * 75.00
        setTotalPay(total)
    }, [reservedSeat])

    const saveReservation = async () => {
        if (reservedSeat.length === 0) {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Sin reservaciones seleccionadas',
                textBody: 'Por favor selecciona un asiento para reservar.',
                button: 'Ok',
            })
            return
        }
        await getCinemas()
        setTimeout(() => {
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Reservacion exitosa',
                textBody: 'Tu reservacion se ha realizado con exito, por favor espera a que se muestre tu boleto en pantalla.',
                button: 'Ok',
            })
            setReservedSeat([])
            setTotalPay(0)
        }, 2010)
        navigation.navigate('Invoice_Reservation_Screen' as never)
    }

    const cancelReservation = async () => {
        setReservedSeat([])
        setTotalPay(0)
        await getCinemas()
    }

    return (
        <SafeAreaView className="flex-1 bg-customGray">
            {
                isLoading
                    ?
                    <PageLoader />
                    :
                    <>
                        <View className="items-center justify-center" >
                            <Text className="text-white text-3xl mt-5 mb-5" >Elige tus boletos Q75.00 c/u</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                            <Text className="text-white">Tu elección</Text>
                            <View className="bg-green-500 w-5 h-5" />
                            <Text className="text-white">Reservado</Text>
                            <View className="bg-red-600 w-5 h-5" />
                            <Text className="text-white">Sin reservar</Text>
                            <View className="bg-white w-5 h-5" />
                        </View>
                        <View className="flex-1 justify-center flex-wrap flex-row items-center h-auto">
                            {seats[0]?.seats.map((itemSeats) => (
                                itemSeats.seat.map((itemSeat) => {
                                    let clase = {
                                        fontSize: 30,
                                        padding: 15,
                                        color: "white",
                                    };
                                    let color_reservationMap = {
                                        0: 'white',
                                        1: 'red',
                                        2: 'green'
                                    }
                                    let color_reservation = color_reservationMap[itemSeat.status];
                                    return (
                                        <Chair key={itemSeat._id} seat={itemSeat} clase={clase} color_reservation={color_reservation}
                                            onPress={() => reserveSeat(itemSeat)}
                                        />
                                    );
                                })
                            ))}
                        </View>
                        <View className="justify-center flex-row" >
                            <Text className="text-white text-2xl mt-5 mb-5">Total a pagar: </Text>
                            <Text className="text-white text-2xl mt-5 mb-5">Q {totalPay}.00</Text>
                        </View>
                        <View className="justify-center items-center flex-row m-2 p-5 ml-6 ">
                            <Button
                                title='Cancelar'
                                buttonStyle={{
                                    backgroundColor: 'black',
                                    borderColor: 'white',
                                    borderRadius: 30,
                                    marginRight: 10
                                }}
                                containerStyle={{
                                    width: 150
                                }}
                                titleStyle={{ fontWeight: 'bold' }}
                                onPress={cancelReservation}
                            />
                            <AlertNotificationRoot theme='dark'>
                                <View className="items-center justify-center" >
                                    <Button
                                        title='Reservar'
                                        onPress={saveReservation}
                                        buttonStyle={{
                                            backgroundColor: 'black',
                                            borderColor: 'white',
                                            borderRadius: 30,
                                        }}
                                        containerStyle={{
                                            width: 150
                                        }}
                                    />
                                </View>
                            </AlertNotificationRoot>
                        </View>
                    </>
            }
        </SafeAreaView>
    )
}

export default Cinema;
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Chair from "@components/chair";
import { GetCinemas } from "@redux/slices/cinema.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/configureStore";
import { Button } from "react-native-elements";
import { View, Text } from 'react-native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';

/**
 * status: 
 * 0: free
 * 1: reserved
 * 2: selected
 */

interface Seats {
    seat: Seat[]
}

interface Seat {
    _id: string,
    status: 0 | 1 | 2,
    no_seat: number
}

const Cinema = () => {
    const [seats, setSeats] = useState<Seats[]>([]);
    const [reservedSeat, setReservedSeat] = useState<Seat[]>([]);
    const [totalPay, setTotalPay] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [statusSend, setStatusSend] = useState<'success' | 'danger'>("success");
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        getCinemas();
    }, [])

    const getCinemas = async () => {
        const response = await dispatch(GetCinemas());
        setSeats(response.payload.cinemas[0].seats);
    }

    const reserveSeat = (seat: Seat) => {
        let findSeat = seats.find((item) => item.seat.find((itemSeat) => itemSeat.no_seat === seat.no_seat));
        if (findSeat?.seat[0].status === 1) return
        let containt = reservedSeat.find((item) => item.no_seat === seat.no_seat);
        if (containt) {
            // remove seat
            setReservedSeat(reservedSeat.filter((item) => item.no_seat !== seat.no_seat))
            setSeats((prev) => {
                return prev.map((item) => {
                    return {
                        seat: item.seat.map((itemSeat) => {
                            if (itemSeat.no_seat === seat.no_seat) {
                                return {
                                    ...itemSeat,
                                    status: 0
                                }
                            }
                            return itemSeat;
                        })
                    }
                })
            })
            return
        }
        setReservedSeat([...reservedSeat, seat])
        setSeats((prev) => {
            return prev.map((item) => {
                return {
                    seat: item.seat.map((itemSeat) => {
                        if (itemSeat.no_seat === seat.no_seat) {
                            return {
                                ...itemSeat,
                                status: itemSeat.status === 0 ? 2 : 0
                            }
                        }
                        return itemSeat;
                    })
                }
            })
        })
    }

    useEffect(() => {
        const total = reservedSeat.length * 75.00
        setTotalPay(total)
    }, [reservedSeat])

    const saveReservation = () => {
        console.log("Validando el push a enviar", JSON.stringify(reservedSeat, null, 2))
        if (reservedSeat.length === 0) {
            setStatusSend("danger")
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Sin reservaciones seleccionadas',
                textBody: 'Por favor selecciona al menos un asiento para poder reservar',
                button: 'Ok',
            })
        }
    }

    const cancelReservation = () => {

    }

    return (
        <SafeAreaView className="flex-1 bg-customGray">
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
            <View className="flex-1 flex-wrap flex-row m-5 h-auto">
                {seats.map((itemSeats) => (
                    itemSeats.seat.map((item) => {
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
                        let color_reservation = color_reservationMap[item.status];
                        return (
                            <Chair seat={item} clase={clase} color_reservation={color_reservation} onPress={() => reserveSeat(item)} />
                        );
                    }))
                )}
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
        </SafeAreaView>
    )
}

export default Cinema;
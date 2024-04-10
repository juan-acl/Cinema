import React from 'react';
import { Box, VStack, Heading, Divider, Text, NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configureStore';
import Logger from '../../utils/logger';

const Invoice = () => {
    const invoice = useSelector((state: RootState) => state.cinema.invoice)
    Logger.error({ invoice })

    return (
        <SafeAreaView className="flex-1 justify-center bg-customGray">
            <NativeBaseProvider>
                <Box safeArea flex={1} p="2" w="90%" mx='auto' className="mt-10 " >
                    <Heading size="lg" color='primary.500'>Factura</Heading>
                    <Divider my="2" />
                    <VStack key={1} space={2} mt="5" className="rounded-2xl border border-white ">
                        <Text className="text-2xl text-white m-1 p-1">Pelicula: {invoice.nameMovie}</Text>
                        <Text className="text-2xl text-white m-1 p-1">Precio por unidad: Q.75.00</Text>
                        <Text className="text-2xl text-white m-1 p-1">Asientos totales: {invoice.no_seats.length}</Text>
                        <Text className="text-2xl text-white m-1 p-1">Total: {invoice.no_seats.length * 75}</Text>
                        <Text className="text-2xl text-white m-1 p-1">No. de los asientos: {invoice.no_seats.join(", ")}</Text>
                    </VStack>
                </Box>
            </NativeBaseProvider>
        </SafeAreaView>
    );
};

export default Invoice;
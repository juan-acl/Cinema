import React from 'react';
import { Box, VStack, Heading, Divider, Text, NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const Invoice = () => {
    const invoiceItems = [
        { title: 'Factura de asientos', quantity: 2, price: '$20', seats: [1, 2], priceUnique: 75.00 },
    ];

    return (
        <SafeAreaView className="flex-1 justify-center bg-customGray">
            <NativeBaseProvider>
                <Box safeArea flex={1} p="2" w="90%" mx='auto' className="mt-10 " >
                    <Heading size="lg" color='primary.500'>Factura</Heading>
                    <Divider my="2" />
                    {invoiceItems.map((item, i) => (
                        <VStack key={i} space={2} mt="5" className="rounded-2xl border border-white ">
                            <Text className="text-2xl text-white m-1 p-1">{item.title}</Text>
                            <Text className="text-2xl text-white m-1 p-1">Precio por unidad: Q.{item.priceUnique}.00</Text>
                            <Text className="text-2xl text-white m-1 p-1">Asientos totales: {item.quantity}</Text>
                            <Text className="text-2xl text-white m-1 p-1">Total: {item.price}</Text>
                            <Text className="text-2xl text-white m-1 p-1">No. de asientos: {item.seats.join(", ")}</Text>
                        </VStack>
                    ))}
                </Box>
            </NativeBaseProvider>
        </SafeAreaView>
    );
};

export default Invoice;
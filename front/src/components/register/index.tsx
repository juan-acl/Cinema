import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from 'react-native-elements';

const Register = () => {
    return (
        <>
            <SafeAreaView className="flex-1 justify-center bg-customGray">
                <View>
                    <View className="items-center justify-center" >
                        <Text className="text-white text-3xl" >
                            !Creemos una cuenta!
                        </Text>
                    </View>
                    <Input
                        placeholder="Nombre"
                        className="border-white w-full text-white"
                        errorMessage="Este campo es requerido"
                    />
                    <Input
                        placeholder="Apellido"
                        className="border-white w-full text-white"
                        errorMessage="Este campo es requerido"
                    />
                    <Input
                        placeholder="Correo electrónico"
                        className="border-white w-full text-white"
                        errorMessage="Este campo es requerido"
                    />
                    <Input
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        className="border-white w-full text-white"
                        errorMessage="Este campo es requerido"
                    />
                    <View className="flex-row justify-center m-5">
                        <Button title="Crear cuenta"
                            buttonStyle={{
                                backgroundColor: 'black',
                                borderColor: 'white',
                                borderRadius: 30,
                            }}
                            containerStyle={{
                                width: 150,
                            }}
                            titleStyle={{ fontWeight: 'bold' }}
                        />
                        <Button title="Cancelar"
                            buttonStyle={{
                                backgroundColor: 'black',
                                borderColor: 'white',
                                borderRadius: 30,
                            }}
                            containerStyle={{
                                width: 150,
                                marginLeft: 10,
                            }}
                            titleStyle={{ fontWeight: 'bold' }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Register;
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from 'react-native-elements';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/configureStore";
import { register } from "@redux/slices/user.slice";
import PageLoader from "@components/loader"
import { useNavigation } from "@react-navigation/native";

const Register = () => {

    const navigation = useNavigation();
    const isLoading = useSelector((state: RootState) => state.pageLoader.loading);
    const dipatch: AppDispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            email: "",
            password: ""
        },
        validateOnBlur: true,
        validationSchema: Yup.object({
            name: Yup.string().required('Este campo es requerido'),
            lastname: Yup.string().required('Este campo es requerido'),
            email: Yup.string().required('Este campo es requerido').email('El correo electrónico no es válido'),
            password: Yup.string().required('Este campo es requerido')
        }),
        onSubmit: async (values) => {
            const { name, lastname, email, password } = values
            let response = await dipatch(register({ name, lastname, email, password }))
            if (response.payload === 200) {
                navigation.navigate('Login_Screen' as never)
            }
        },
    })

    useFocusEffect(
        useCallback(() => {
            return () => formik.resetForm()
        }, [])
    )

    const onChangeName = (name: string, event: any) => {
        const { text } = event.nativeEvent;
        formik.setFieldValue(name, text)
    }

    return (
        <>
            <SafeAreaView className="flex-1 justify-center bg-customGray">
                {
                    isLoading
                        ?
                        <PageLoader />
                        :
                        <View>
                            <View className="items-center justify-center mb-10 " >
                                <Text className="text-white text-3xl" >
                                    !Creemos una cuenta!
                                </Text>
                            </View  >
                            <Input
                                value={formik.values.name}
                                onChange={(name) => onChangeName('name', name)}
                                placeholder="Nombre"
                                className="border-white w-full text-white"
                            />
                            <Text className="text-red-500 ml-3" >{formik.errors.name}</Text>
                            <Input
                                value={formik.values.lastname}
                                onChange={(name) => onChangeName('lastname', name)}
                                placeholder="Apellido"
                                className="border-white w-full text-white"
                            />
                            <Text className="text-red-500 ml-3" >{formik.errors.lastname}</Text>
                            <Input
                                value={formik.values.email}
                                onChange={(name) => onChangeName('email', name)}
                                placeholder="Correo electrónico"
                                className="border-white w-full text-white"
                            />
                            <Text className="text-red-500 ml-3" >{formik.errors.email}</Text>
                            <Input
                                value={formik.values.password}
                                onChange={(name) => onChangeName('password', name)}
                                placeholder="Contraseña"
                                secureTextEntry={true}
                                className="border-white w-full text-white"
                            />
                            <Text className="text-red-500 ml-3" >{formik.errors.password}</Text>
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
                                    onPress={() => formik.handleSubmit()}
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
                                    onPress={() => formik.resetForm()}
                                />
                            </View>
                        </View>
                }
            </SafeAreaView>
        </>
    )
}

export default Register;
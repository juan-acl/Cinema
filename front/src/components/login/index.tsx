import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements";
import * as Yup from 'yup';
import { useFormik } from "formik";
import PageLoader from "@components/loader"
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@redux/configureStore";
import { log_in } from "@redux/slices/user.slice";

const Login = () => {

    const dispatch: AppDispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.pageLoader.loading);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Este campo es requerido').email('El correo electrónico no es válido'),
            password: Yup.string().required('Este campo es requerido')
        }),
        onSubmit: async (values) => {
            const { email, password } = values
            await dispatch(log_in({ email, password }))
        }
    })

    const onChangeEmail = (email: string) => {
        formik.setFieldValue('email', email)
    }

    const onChangePassword = (email: string) => {
        formik.setFieldValue('password', email)
    }

    return (
        <SafeAreaView className="flex-1 justify-center bg-customGray" >
            {isLoading
                ?
                <PageLoader />
                :
                <>
                    <View className="items-center" >
                        <Text className="text-white text-3xl mb-10" >Iniciar sesi&oacute;n</Text>
                    </View>
                    <View>
                        <Input
                            value={formik.values.email}
                            placeholder="Correo electrónico"
                            className="border-white w-full text-white"
                            onChangeText={(email) => onChangeEmail(email)}
                        />
                        <Text className="text-red-500" >{formik.errors.email}</Text>
                        <Input
                            value={formik.values.password}
                            placeholder="Contraseña"
                            secureTextEntry={true}
                            onChangeText={(password) => onChangePassword(password)}
                            className="border-white w-full text-white"
                        />
                        <Text className="text-red-500" >{formik.errors.password}</Text>
                    </View>
                    <View className="items-center flex-row justify-center m-5" >
                        <Button
                            title="Iniciar sesi&oacute;n"
                            onPress={() => formik.handleSubmit()}
                            buttonStyle={{
                                backgroundColor: 'black',
                                borderColor: 'white',
                                borderRadius: 30,
                            }}
                            containerStyle={{
                                width: 150
                            }}
                            titleStyle={{ fontWeight: 'bold' }}
                        />
                        <Button
                            title="Cancelar"
                            buttonStyle={{
                                backgroundColor: 'black',
                                borderColor: 'white',
                                borderRadius: 30,
                            }}
                            containerStyle={{
                                width: 150,
                                marginLeft: 11,
                            }}
                            titleStyle={{ fontWeight: 'bold' }}
                            onPress={() => formik.resetForm()}
                        />
                    </View>
                </>
            }
        </SafeAreaView>
    )
}

export default Login;
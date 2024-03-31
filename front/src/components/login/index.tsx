import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements";
import { Log_in } from "@redux/actions/user.action";
import axios from "axios";
import * as Yup from 'yup';
import { useFormik } from "formik";

interface Props {
    isLogin: boolean,
    _login: (email: string, password: string) => string
}

const Login = (props: Props) => {

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
            let response = await props._login(email, password)
            console.log('Validando la respuesta', response)
            if (response == 'success') {
                console.log('Login success')
            } else {
                console.log('Login failed')
            }
        }
    })

    const onChangeEmail = (email: string) => {
        formik.setFieldValue('email', email)
    }

    const onChangePassword = (email: string) => {
        formik.setFieldValue('password', email)
    }

    const login = async () => {
        try {
            const response = await axios.post(process.env.API)
            const data_user = response.data.user
        } catch (error) {
            console.log('Error in fetching', error)
        }
    }

    useEffect(() => {
        login()
    }, [])

    return (
        <SafeAreaView className="flex-1 justify-center bg-customGray" >
            <View className="items-center" >
                <Text className="text-white text-3xl" >Iniciar sesi&oacute;n </Text>
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
                        width: 150,
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
                        marginLeft: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                />
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.user.login
})

const mapDispatchToProps = (dispatch) => ({
    _login: (email: string, password: string) => dispatch(Log_in(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React from "react"
import { Button, Modal, FormControl, Input, NativeBaseProvider } from "native-base";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@redux/configureStore";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface ModalProps {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
}

interface User {
    _id: string,
    name: string,
    lastname: string
    email: string
    password: string
}

const ModalEdit = (props: ModalProps) => {

    const user: User = useSelector((state: RootState) => state.user.profile)

    const formik = useFormik({
        initialValues: {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: user.password
        },
        validateOnBlur: true,
        validationSchema: Yup.object({
            name: Yup.string().required('Este campo es requerido'),
            lastname: Yup.string().required('Este campo es requerido'),
            email: Yup.string().required('Este campo es requerido').email('El correo electrónico no es válido'),
            password: Yup.string().required('Este campo es requerido')
        }),
        onSubmit: async (values) => {
            console.log(values)
        }
    })

    const onChangeName = (name: string, event: any) => {
        const { text } = event.nativeEvent;
        formik.setFieldValue(name, text)
    }

    return (
        <View>
            <NativeBaseProvider>
                <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Editemos tu perfil</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Nombre</FormControl.Label>
                                <Input onChange={(name) => onChangeName('name', name)} value={formik.values.name} />
                                <Text className="text-red-500 ml-3" >{formik.errors.name}</Text>
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Apellido</FormControl.Label>
                                <Input onChange={(name) => onChangeName('lastname', name)} value={formik.values.lastname} />
                                <Text className="text-red-500 ml-3" >{formik.errors.lastname}</Text>
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Email</FormControl.Label>
                                <Input onChange={(name) => onChangeName('email', name)} value={formik.values.email} />
                                <Text className="text-red-500 ml-3" >{formik.errors.email}</Text>
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Password</FormControl.Label>
                                <Input onChange={(name) => onChangeName('password', name)} secureTextEntry={true} value={formik.values.password} />
                                <Text className="text-red-500 ml-3" >{formik.errors.password}</Text>
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    props.setShowModal(false);
                                }}>
                                    Cancel
                                </Button>
                                <Button onPress={() => {
                                    props.setShowModal(false);
                                }}>
                                    Save
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </NativeBaseProvider>
        </View>
    )
}

export default ModalEdit
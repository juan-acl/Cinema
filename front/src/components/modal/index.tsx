import React from "react"
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from "native-base";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@redux/configureStore";
import { useFormik } from "formik";

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
        onSubmit: async (values) => {
            console.log(values)
        }
    })

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
                                <Input value={formik.values.name} />
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Apellido</FormControl.Label>
                                <Input value={formik.values.lastname} />
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Email</FormControl.Label>
                                <Input value={formik.values.email} />
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Password</FormControl.Label>
                                <Input secureTextEntry={true} value={formik.values.password} />
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
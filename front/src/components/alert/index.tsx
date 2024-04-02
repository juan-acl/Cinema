import React, { useEffect } from 'react';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

interface AlertProps {
    onShow: boolean;
    setOnShow: (onShow: boolean) => void
}

const Alert = (props: AlertProps) => {
    console.log('Alerta', props)
    useEffect(() => {
        if (props.onShow) {
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Success',
                textBody: 'Congrats! this is dialog box success',
                button: 'close',
                onHide() {
                    props.setOnShow(false)
                },
            });
        }
    }, [props.onShow]);

    // Renderiza un componente vacío si no se debe mostrar la alerta
    if (!props.onShow) {
        return null;
    }

    return (
        <AlertNotificationRoot theme='dark'>
            <View />
        </AlertNotificationRoot>
    );
};

export default Alert;

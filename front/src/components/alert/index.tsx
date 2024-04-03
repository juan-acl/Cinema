import React from 'react';
import { View, Button } from 'react-native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

interface AlertProps {
    onShow: boolean
}

const Alert = (props: AlertProps) => {
    return (
        <AlertNotificationRoot theme='dark'>
            <View>
                <Button
                    title={'dialog box'}
                    onPress={() =>
                        Dialog.show({
                            type: ALERT_TYPE.SUCCESS,
                            title: 'Success',
                            textBody: 'Congrats! this is dialog box success',
                            button: 'close',
                        })
                    }
                />
            </View>
        </AlertNotificationRoot>
    );
};

export default Alert;


import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Chair = ({ color_reservation }: { color_reservation: string }) => {
    return (
        <View>
            <Icon name="chair" style={{ fontSize: 30, color: color_reservation }} />
        </View>
    )
}

export default Chair;
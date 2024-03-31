import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ChairProps {
    fontSize?: number;
    color?: string;
    padding?: number;
    lineHeight?: number;
}

const Chair = ({ color_reservation, clase }: { color_reservation: string, clase: ChairProps }) => {
    return (
        <View>
            <Icon name="chair" style={{ fontSize: clase.fontSize, color: color_reservation, padding: clase.padding }} />
        </View>
    )
}

export default Chair;
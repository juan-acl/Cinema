import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ChairProps {
    fontSize?: number;
    color?: string;
    padding?: number;
    lineHeight?: number;
}

interface Seat {
    status: number;
    no_seat: number;
}

interface Props {
    color_reservation: string,
    clase: ChairProps,
    onPress: () => void,
    seat: Seat
}

const Chair = ({ color_reservation, clase, onPress, seat }: Props) => {
    return (
        <View key={seat.no_seat} >
            <Icon
                name="chair"
                style={
                    {
                        fontSize: clase.fontSize,
                        color: color_reservation,
                        padding: clase.padding
                    }
                }
                onPress={onPress}
            />
        </View>
    )
}

export default Chair;
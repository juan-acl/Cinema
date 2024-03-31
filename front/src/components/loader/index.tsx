import { connect } from "react-redux";
import { BarIndicator } from "react-native-indicators"

interface Props {
    isLogin: boolean
}

interface State {
    user: {
        login: boolean
    }
}

const Loader = (props: Props) => props.isLogin && <BarIndicator color="white" size={60} />

const mapStateToProps = (state: State) => ({
    isLogin: state.user.login
})

export default connect(mapStateToProps)(Loader);
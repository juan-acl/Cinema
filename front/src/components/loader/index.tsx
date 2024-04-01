import React from "react";
import { useSelector } from "react-redux";
import { BarIndicator } from "react-native-indicators"
import { RootState } from "@redux/configureStore";

const Loader: React.FC = () => {
    const isLoading = useSelector((state: RootState) => state.pageLoader.loading)
    return (
        isLoading && <BarIndicator color="white" size={60} />
    )
}

export default Loader;
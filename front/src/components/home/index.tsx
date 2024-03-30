import { Text, View, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Corousel from "react-native-snap-carousel";

const Home = () => {
    let { width, height } = Dimensions.get("window")
    const images = {
        "movie1": require("../../../assets/movie-1.png"),
        "movie2": require("../../../assets/movie-2.png"),
        "movie3": require("../../../assets/movie-3.png"),
    };
    return (
        <SafeAreaView className="flex-1 bg-customGray items-center justify-center">
            <View className="absolute top-20 fon w-full flex items-center justify-center z-10">
                <Text className="text-white text-4xl font-semibold">Trending movies</Text>
            </View>
            <View className="flex-1 items-center justify-center">
                <Corousel
                    data={["movie1", "movie2", "movie3"]}
                    renderItem={({ item, index }) => (
                        <View>
                            <Image
                                key={index}
                                className="rounded-3xl"
                                style={{ width: width * 0.6, height: height * 0.4 }}
                                source={images[item]}
                            />
                        </View>
                    )}
                    sliderWidth={width * 0.9}
                    itemWidth={width * 0.62}
                    firstItem={1}
                    inactiveSlideOpacity={0.2}
                    loop={true}
                    autoplay={true}
                    autoplayInterval={3000}
                    layout={'default'}
                    slideStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                />
            </View>
        </SafeAreaView>
    );

}

export default Home;
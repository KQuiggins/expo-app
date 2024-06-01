import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Svg from "react-native-svg";
import WebdevImage from "./components/HeroImage";
import CustomButton from "./components/CustomButton";

import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
      <View className="mt-4">
          <Text className="text-3xl text-white font-bold text-center">
            Welcome to WebDev

          </Text>
          <Text className="text-secondary-200 text-center text-3xl">Learn to Code</Text>

        </View>

        <Image
          source={images.path}
          className=" w-[132px] h-[15px] absolute mt-24 ml-28"
        />
        <View className="w-full justify-center items-center h-full">
        <View className="flex flex-row justify-center items-center">
          <CustomButton
            title="Get Started"
            containerStyles="w-1/2"
            textStyles="text-center"
          />
        </View>

          <WebdevImage
            height={200}
            width={300}
          />
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

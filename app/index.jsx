import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Svg from "react-native-svg";
import WebdevImage from "./components/HeroImage";
import CustomButton from "./components/CustomButton";

import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
      <View className="m-h-[84vh] mt-8">

          <Text className="text-3xl text-white font-bold text-center">
            Welcome Students
          </Text>
          <Text className="text-secondary-200 text-center text-3xl">
            Learn to Code
          </Text>


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
              handlePress={() => router.push("/sign-in")}
            />
          </View>

          <WebdevImage height={200} width={300} />
        </View>
      </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622"/>
    </SafeAreaView>
  );
}

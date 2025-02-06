import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logoSmall}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          ></Image>
          <Image
            source={images.cards}
            className="m-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          ></Image>
          <View className="relative mt-5">
            <Text className="text-white text-center text-3xl font-bold">
              Discovered Endless Posibillity with{" "}
              <Text className="text-secondary-200">Expenses</Text>
            </Text>
          </View>
          <CustomButton
            title={"Continue with login"}
            handelPress={() => router.push("/home")}
            containerStyles="mt-7 w-full"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import {  Text, View } from "react-native";

export const MainPage = () =>{
     return (
    <View className="flex-1 flex-row gap-2 p-2 w-full">
      <View className="flex-1 bg-sky-500 items-center justify-center">
        <Text className="text-white">Left</Text>
      </View>
      <View className="flex-1 bg-indigo-500 items-center justify-center">
        <Text className="text-white">Center</Text>
      </View>
      <View className="flex-1 bg-teal-500 items-center justify-center">
        <Text className="text-white">Right</Text>
      </View>
    </View>
  );
};
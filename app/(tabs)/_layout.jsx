import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcons = ({ icon, color, name, focused }) => {
  return (
    <View
      className={`items-center justify-center  ${
        name === "Create" ? "mt-0 mb-5 gap-2" : "gap-1 mt-5"
      }`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={`${name === "Create" ? "w-14 h-14" : "w-8 h-8"}`}
      />
      <Text
        className={`w-12 text-xs ${
          focused ? "font-psemibold" : "font-pregular"
        }`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayouts = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            borderRadius: 50,
            width: "95%",
            marginHorizontal: "2%",
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayouts;

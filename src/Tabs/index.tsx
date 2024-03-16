import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Principal from "./Principal";
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import Explorar from "./Explorar";

const Tab = createBottomTabNavigator();

import React from "react";

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF",
};

const tabs = [
  {
    name: "Principal",
    component: Principal,
    icon: "home",
  },
  {
    name: "Explorar",
    component: Explorar,
    icon: "calendar",
  },
  {
    name: "Consultas",
    component: Consultas,
    icon: "search",
  },
  {
    name: "Perfil",
    component: Perfil,
    icon: "person",
  },
];

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((item) => (
        <Tab.Screen
          name={item.name}
          component={item.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={item.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;

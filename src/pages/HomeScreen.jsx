import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CameraScreen from './CameraScreen'
import ChatScrean from "./ChatScreen";
import MainScreen from "./MainScreen";

const Stack = createMaterialTopTabNavigator();

export default function HomeScreen() {
    return (
        <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    headerShown: false, 
                    gestureEnabled: true
                }}
                tabBar={() => null}
            >
            <Stack.Screen name="Camera" component={ CameraScreen } />
            <Stack.Screen name="Main" component={ MainScreen } />
            <Stack.Screen name="Settings" component={ ChatScrean } />
        </Stack.Navigator>
    );
}

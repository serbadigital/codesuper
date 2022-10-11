import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/landing';
import DaftarScreen from './screens/daftar';
import LoginScreen from './screens/login';
import LupaPasswordScreen from './screens/lupa-password';
import { useFirebase } from './components/FirebaseProvider';
import PrivateNavigator from './screens/private/Navigator';
const Stack = createStackNavigator();
export default function Navigator() {

    const { user } = useFirebase();

    return (<Stack.Navigator
        headerMode="none"
    >
        {user === null ?
            <>
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="Daftar" component={DaftarScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="LupaPassword" component={LupaPasswordScreen} />
            </> :
            <Stack.Screen name="Private" component={PrivateNavigator} />

        }
    </Stack.Navigator>)
}
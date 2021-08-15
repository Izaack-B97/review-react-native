import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Pagina1 } from '../screens/Pagina1';
import { Pagina2 } from '../screens/Pagina2';
import { InfoApi } from '../screens/InfoApi';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#ffffff'
                }
            }}
        >
            <Stack.Screen name='Pagina1' component={ Pagina1 } />
            <Stack.Screen name='Pagina2' component={ Pagina2 }/>
            <Stack.Screen name='InfoApi' component={ InfoApi }/>
        </Stack.Navigator>
    )
}

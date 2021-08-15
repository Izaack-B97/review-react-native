import React from 'react'
import { Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Pagina2 = ( { navigation, route } ) => {
    
    console.log( route );
    
    const { top } = useSafeAreaInsets();
    const { name, apellido } = route.params;

    return (
        <View style={{ marginTop: top, marginHorizontal: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Pagina 2</Text>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome { name + ' ' + apellido }</Text>
            <Button title="Back to Page 1" onPress={ () => navigation.pop() }/>
        </View>
    )
}
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


export const Pagina1 = ( { navigation } ) => {
    
    const { top } = useSafeAreaInsets();
    
    const [ data, setChangeData ] = useState({
        name: '',
        apellido: ''
    });

    const { name, apellido } = data;

    return (
        <View style={{
            flex: 1,
            marginTop: top,
            marginHorizontal: 20
        }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 25 }}>Pagina 1</Text>
            <View style={{ flex: 1 }}>
                
                <TextInput 
                    placeholder="Your name" 
                    style={{
                        height: 40,
                        borderWidth: 1, 
                        padding: 10,
                        backgroundColor: 'lightgrey',
                        borderRadius: 5,
                        marginBottom: 10
                    }}
                    onChangeText={ name => setChangeData({ ...data, name }) }
                    value={ name }
                />

                <TextInput 
                    placeholder="Your last name" 
                    style={{
                        height: 40,
                        borderWidth: 1, 
                        padding: 10,
                        backgroundColor: 'lightgrey',
                        borderRadius: 5,
                        marginBottom: 10
                    }}
                    onChangeText={ apellido => setChangeData({ ...data, apellido }) }
                    value={ apellido }
                />
                <Text>{ name }</Text>
                <Text>{ apellido }</Text>
                
                <Button title='Go to Page 2' onPress={ () => navigation.navigate('Pagina2', data ) }/>
                <View style={{ marginVertical: 5 }} />
                <Button title='Go to MovieDB' onPress={ () => navigation.navigate('InfoApi') } />
            </View>
        </View>
    )
}

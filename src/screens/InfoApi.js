import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const InfoApi = ({ navigation }) => {

    const { top } = useSafeAreaInsets();
    const [state, setState] = useState({});

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=1')
            .then(res => res.json())
            .then(data => setState( data.results ) )
            .catch( err => console.log( err ) );
    }, [])

    console.log('Sobres ps')

    return (        
        <ScrollView style={{ marginTop: top, marginHorizontal: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Info API</Text>
            <Button title="Back to Page 1" onPress={ () => navigation.pop() }/>
            <Text>{ JSON.stringify( state ) }</Text>
        </ScrollView>
    )
}

import moment from 'moment';
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
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

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
            >
                <View
                    style={{
                        height: 150,
                        marginVertical: 5,
                        flexDirection: 'row',
                        overflow: 'hidden'
                    }}
                >   
                    <Image
                        style={{ 
                            width: 150, 
                            height: 150, 
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10 
                        }}
                        source={{ uri: item.image }}
                    />
                    <View 
                        style={{
                            flex: 1,
                            backgroundColor:  'rgb(36, 40, 47)',
                            paddingLeft: 10,
                            paddingTop: 10
                        }}
                    >
                        <Text 
                            style={{ 
                                color: '#ffffff', 
                                fontWeight: 'bold', 
                                fontSize: 20
                            }}
                        >{ item.name }</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View 
                                style={{ 
                                    backgroundColor: 'green', 
                                    height: 10, 
                                    width: 10,
                                    borderRadius: 100,
                                    marginTop: 5,
                                    marginLeft: 1
                                }} 
                            />
                            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 13 }}>{ `  ${ item.status } - ${ item.species }` }</Text>
                        </View>
                        <Text style={{ color: 'rgb(158, 158, 158)', marginTop: 10 }}>Gender: { item.gender }</Text>
                        <Text style={{ color: 'rgb(158, 158, 158)' }}>Created { moment( item.created , "YYYY-MM-DD").fromNow() }</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15,  paddingRight: 10 }}>
                            <Text style={{ color: '#ffffff', fontSize: 13, fontWeight: 'bold' }}>See all chapters</Text>
                            {/* <Ionicons name="arrow-forward" size={ 20 } color="white" /> */}
                        </View>
                    </View>
                </View> 
            </TouchableOpacity>
        )
    }

    return (        
        <View 
            style={{ 
                flex: 1,
                // backgroundColor: 'rgb(36, 40, 47)'
            }}
        >
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: top + 10, marginLeft: 20 }}>Rick And Morty API</Text>
            <FlatList 
                style={{ marginTop: 20, marginLeft: 20, flex: 1 }}
                data={ state }
                renderItem={ renderItem }
                keyExtractor={ item => item.id.toString() }
                showsVerticalScrollIndicator={ false }
            />
        </View>

       
    )
}

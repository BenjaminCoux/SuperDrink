import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Game} from "../components/Game";


export default function TabOneScreen(){

    var gameList =["Fuck the queen","Dealer","Ben Laden","Jeu de carte simple"]

    const navigation = useNavigation()

    function click(){
        console.log("nav")
        navigation.navigate('HomeScreen',{})
    }

    return(
    <View style={{backgroundColor :"#0F3052", flex :1 ,alignItems:"center"}}>
        <FlatList  numColumns={2} data={gameList} renderItem={({item}) =>
                <Game name={item}/>
        }/>
    </View>)
}

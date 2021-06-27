import * as React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Game} from "../components/Game";


export default function TabOneScreen(){

    var gameList =["Fuck the queen","Dealer","Ben Laden","Jeu de carte simple"]
    let paramPath = require("../assets/images/params.png")

    const navigation = useNavigation()

    function click(){
        console.log("nav")
        navigation.navigate('HomeScreen',{})
    }


    return(
    <View style={{backgroundColor :"#0F3052", flex :1 ,}}>
        <View style={{flex:1,flexDirection:"row-reverse",height:"10%"}}>
            <TouchableOpacity>
                <Image style={{height:50,width:50}} source={paramPath}/>
            </TouchableOpacity>
        </View>
        <FlatList  numColumns={2} data={gameList} renderItem={({item}) =>
                <Game name={item}/>
        }/>
    </View>)
}

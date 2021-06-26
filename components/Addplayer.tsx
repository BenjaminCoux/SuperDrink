import * as React from 'react';
import {FlatList, Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from "react-native";
import {useNavigation} from '@react-navigation/native'

import {PlayerList, PlayerType} from "../types";
import {players} from "../assets/data/players.json"

function find(players:any,name:string){
    let res = []
    for(let i=0;i<players.length;i++){
        if(name!=players[i].name && players[i]!=undefined){
            //return i
            res.push({name:players[i].name})
        }
    }
    return res
}



export const Addplayer = (props:undefined) => {
    const [text, onChangeText] = React.useState("Add new player");
    const [players,setplayers] = React.useState<[] | []>([]);
    const [rafraichir,setrafraishir] = React.useState(0)
    const  src = require('../assets/images/kisspng-plus-and-minus-signs-computer-icons-clip-art-plus-sign-5aaad863509ba7.5297822915211459553302.png')
    const navigation = useNavigation()
    console.log(players);
    let supprime = (name:string) =>{
        let position = find(players,name)
        setplayers(position)
        console.log(players)
    }

    let handlePress = (text:string) => {
        console.log(text)
        var tmp = players
        setrafraishir(rafraichir+1)
        onChangeText("")
        tmp.push({name:text})
        setplayers(tmp)
    }
    function click(){
        console.log(players)
        if(players.length!=0){
            navigation.navigate('Fuck the Queen !',{players:players})
        }
    }



    return(
        <View style={{display:"flex"}}>
            <View style={{flexDirection : "column", display:"flex", flex:1,}}>
                <FlatList scrollEnabled={true}   extraData={rafraichir} showsHorizontalScrollIndicator={true} data={players} renderItem={({item}) =>
                    <TouchableOpacity style={ styles.players} onPress={() => supprime(item.name)}>
                        <Text style={{color:"#fff59d"}}>{item.name}</Text>
                    </TouchableOpacity>
                }/>
            </View>
            <View style={{flexDirection:"row"}}>
            <TextInput style={styles.container} onChangeText={onChangeText} value={text}/>
            <TouchableOpacity onPress={() => handlePress(text)}>
                <Image source={src} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={click} style={styles.container} >
                <Text>Commencer à jouer ! </Text>
            </TouchableOpacity>
        </View>
)}

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff59d",
        height : 50,
    },
    players : {
        margin:10,
        padding : 10,
        backgroundColor :"#0F3052",
        borderColor :"#fff59d",
        borderRadius: 10,
        borderWidth : 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10
    },
    image:{
        width : 50,
        height: 50,
        margin : 10
    }
})

import * as React from 'react';
import {FlatList, Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from "react-native";
import {useNavigation} from '@react-navigation/native'

import {PlayerList, PlayerType} from "../types";
import {players} from "../assets/data/players.json"

function find(players:any,name:string){
    let res = []
    for(let i=0;i<players.length;i++){
        if(name!=players[i].name && players[i]!=undefined){
            res.push({name:players[i].name})
        }
    }
    return res
}



export const Addplayer = (props:undefined) => {
    const [text, onChangeText] = React.useState("");
    const [players,setplayers] = React.useState<[] | []>([]);
    const [rafraichir,setrafraishir] = React.useState(0)
    const  src = require('../assets/images/add.png')
    const navigation = useNavigation()
    let deletePath = require("../assets/images/delete.png")
    
    let supprime = (name:string) =>{
        setplayers(players.filter(player => player.name !== name))
    }

    let handlePress = (text:string) => {
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
        <View style={{display:"flex",justifyContent:"flex-start",marginTop:"10%",}}>
            <View style={{flexDirection : "column", display:"flex", flex:1,}}>
                <FlatList scrollEnabled={true}   extraData={rafraichir} showsHorizontalScrollIndicator={true} data={players} renderItem={({item}) =>
                    <TouchableOpacity style={ styles.players} >
                        <Text style={{color:"#fff59d"}}>{item.name}</Text>
                        <TouchableOpacity style={{justifyContent:"center",borderColor:"#fff59d",borderWidth:1,borderRadius:5}} onPress={() => supprime(item.name)}>
                            <Image source={deletePath} style={{height:16,width:16,}}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                }/>
            </View>
            <View style={{flexDirection:"row"}}>
            <TextInput style={styles.container} onChangeText={onChangeText} placeholder={"Ajouter un joueur"} value={text}/>
            <TouchableOpacity onPress={() => handlePress(text)}>
                <Image source={src} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={click} style={styles.container} >
                <Text style={{display:"flex",justifyContent:"center",}} >Commencer à jouer ! </Text>
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
        flexDirection:"row",
        justifyContent : "space-between",
        flex:1,
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

import * as React from 'react';
import {FlatList, Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
// @ts-ignore
import {cards} from "../assets/data/cards.json"
import {total} from "../assets/data/cards.json"
import {CardType} from "../types";
// @ts-ignore
import Img from "../assets/data/img.js"
import {CardList} from "../types";
// @ts-ignore
import Cards from "../assets/data/store.js"

import {useNavigation} from "@react-navigation/native";


let service = new Cards()
let img = new Img()
var end = false

const images = {
    0:require("../assets/images/Clubs/A.png"),
    1:require("../assets/images/Diamonds/A.png"),
    2:require("../assets/images/Hearts/A.png"),
    3:require("../assets/images/Spades/A.png"),
    4:require("../assets/images/Clubs/2.png"),
    5:require("../assets/images/Diamonds/2.png"),
    6:require("../assets/images/Hearts/2.png"),
    7:require("../assets/images/Spades/2.png"),
    8:require("../assets/images/Clubs/3.png"),
    9:require("../assets/images/Diamonds/3.png"),
    10:require("../assets/images/Hearts/3.png"),
    11:require("../assets/images/Spades/3.png"),
    12:require("../assets/images/Clubs/4.png"),
    13:require("../assets/images/Diamonds/4.png"),
    14:require("../assets/images/Hearts/4.png"),
    15:require("../assets/images/Spades/4.png"),
    16:require("../assets/images/Clubs/5.png"),
    17:require("../assets/images/Diamonds/5.png"),
    18:require("../assets/images/Hearts/5.png"),
    19:require("../assets/images/Spades/5.png"),
    20:require("../assets/images/Clubs/6.png"),
    21:require("../assets/images/Diamonds/6.png"),
    22:require("../assets/images/Hearts/6.png"),
    23:require("../assets/images/Spades/6.png"),
    24:require("../assets/images/Clubs/7.png"),
    25:require("../assets/images/Diamonds/7.png"),
    26:require("../assets/images/Hearts/7.png"),
    27:require("../assets/images/Spades/7.png"),
    28:require("../assets/images/Clubs/8.png"),
    29:require("../assets/images/Diamonds/8.png"),
    30:require("../assets/images/Hearts/8.png"),
    31:require("../assets/images/Spades/8.png"),
    32:require("../assets/images/Clubs/9.png"),
    33:require("../assets/images/Diamonds/9.png"),
    34:require("../assets/images/Hearts/9.png"),
    35:require("../assets/images/Spades/9.png"),
    36:require("../assets/images/Clubs/10.png"),
    37:require("../assets/images/Diamonds/10.png"),
    38:require("../assets/images/Hearts/10.png"),
    39:require("../assets/images/Spades/10.png"),
    40:require("../assets/images/Clubs/J.png"),
    41:require("../assets/images/Diamonds/J.png"),
    42:require("../assets/images/Hearts/J.png"),
    43:require("../assets/images/Spades/J.png"),
    44:require("../assets/images/Clubs/Q.png"),
    45:require("../assets/images/Diamonds/Q.png"),
    46:require("../assets/images/Hearts/Q.png"),
    47:require("../assets/images/Spades/Q.png"),
    48:require("../assets/images/Clubs/K.png"),
    49:require("../assets/images/Diamonds/K.png"),
    50:require("../assets/images/Hearts/K.png"),
    51:require("../assets/images/Spades/K.png"),


}

function getNbTaken(cards:CardType[]){
    let res =0
    for(let i=0;i<cards.length;i++){
        if(cards[i].taken){
            res++
        }
    }
    return res
}

function getRandomInt(max:any) {
    return Math.floor(Math.random() * max);
}

function getcard(mycard:number,cards:CardType[]){
   const src = '../assets/images/'+cards[mycard].color+'/'+cards[mycard].number+'.png'
    return src
}







export const CatchComponent  = (props:undefined) => {

    function getcard(mycard:number,cards:CardType[]){
        const src = '../assets/images/'+cards[mycard].color+'/'+cards[mycard].number+'.png'
        return src
    }

    function allTaken(cards:CardType[]){
        for(let i =0;i<cards.length;i++){
            if(!cards[i].taken){
                return false
            }
        }
        return  true
    }
    const navigation = useNavigation()
    var players = props.players.route.params.players
    let nbp = props.players.route.params.players.length
    const [cp,setcp] = React.useState(0)

    const [cardStak,setStack] = React.useState<CardType[] | []>(service.cards);
    const [numeroCarte,setNumero] = React.useState(getRandomInt(cardStak.length))
    cardStak[numeroCarte].taken=true
    let tmpc = cardStak[numeroCarte].color
    let tmpn = cardStak[numeroCarte].number

    const [taken,settaken] = React.useState(0)
    const init = getRandomInt(cardStak.length)
    const [curCard,setCurcard] = React.useState(getcard(init,cardStak))


    let tourSuivant = (cp:number,nbp:number) =>{
        if(!end && cp < cardStak.length){
            setcp((cp+1)%nbp)
            let tmp = getRandomInt(cardStak.length)
            let picked = false
            let nbtaken = getNbTaken(cardStak)
            settaken(nbtaken)
            while (!picked && nbtaken!=cardStak.length){
                if(!cardStak[tmp].taken){
                    picked=true
                }
                else{
                    tmp = getRandomInt(cardStak.length)
                }

            }
            setNumero(tmp)
            setCurcard(getcard(tmp,cardStak))

            if(allTaken(cardStak)){

                setStack(new Cards().cards)
                for(let i = 0;i<cardStak.length;i++){
                    cardStak[i].taken=false
                }
                navigation.navigate("Menu")
            }
        //console.log(path[numeroCarte])
            cardStak[numeroCarte].taken=true
        }
    }


    return (
        <View style={{display:"flex",alignItems:"center",backgroundColor : "#0F3052",height : "100%",marginTop:"25%"}}>
            <TouchableOpacity style={styles.container}>
                <Text>{cardStak.length-taken} cartes restantes</Text>
                <Image
                    style={styles.image}
                    source={images[numeroCarte]}
                />
            </TouchableOpacity>
            <View style={{flexDirection:"row"}}><Text style={styles.title}>{players[cp].name}</Text><Text style={styles.texte} numberOfLines={2} adjustsFontSizeToFit={true}>{cardStak[numeroCarte].rule}</Text></View>
            <TouchableOpacity style={styles.container2} onPress={() => tourSuivant(cp,nbp)}>
                <Text style={{fontSize : 18,color : "black"}}>Prochaine Carte </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 25,
        backgroundColor: "#ffffff",

        alignItems:"center",
        width : 300,


    },
    players : {
        fontSize : 18,
        fontWeight : "bold",
        //fontFamily : "Geo",
        margin:5,
    },
    container2: {
        margin: 10,
        padding: 10,
        borderRadius: 25,
        height : 50,
        alignItems:"center",
        backgroundColor: "#fff59d",
    },
    title: {
        fontSize: 15,
        margin :5,
        fontWeight: 'bold',
        color : "brown"
    },
    texte:{
        margin:5,
        fontSize:14,
        fontWeight:"bold",
        color:"#fff59d"
    },
    image:{
        width : 400,
        height: 400,
        borderRadius: 15
    }
})

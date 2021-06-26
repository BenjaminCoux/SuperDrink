import * as React from 'react';
import {FlatList, Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";




export const Game = (props:any) =>{
    const navigation = useNavigation()
    let path = require("../assets/images/crown.png")
    let click =() =>{
        navigation.navigate("HomeScreen",HomeScreen)
    }

    return(
        <TouchableOpacity style={styles.opacity} onPress={click} >
            <Image source={path} style={{height:80,width:120}}/>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  opacity:{
      height : 150,
      width : 150,
      backgroundColor : "#fff59d",
      padding :20,
      margin : 15,
      borderRadius : 10,
  }  ,
})

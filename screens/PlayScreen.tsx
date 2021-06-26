import * as React from 'react';
import { StyleSheet,View } from 'react-native';
import {CatchComponent} from "../components/CatchComponent";


export default function PlayScreen(players:any){
    return(
        <View style={{backgroundColor : "#0F3052",display:"flex"}}>
            <CatchComponent players={players}/>
        </View>
    )
}

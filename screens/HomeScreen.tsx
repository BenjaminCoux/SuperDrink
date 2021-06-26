import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {CatchComponent} from "../components/CatchComponent";
import {Addplayer} from "../components/Addplayer";
import {players} from "../assets/data/players.json"

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Addplayer players={players} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#0F3052",
    },
    container2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#414141"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

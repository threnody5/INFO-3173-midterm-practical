import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {

    const headerMessage = 'Midterm \n w_watson156803'

    return (
        <View style={ styles.container }>
            <Text style={ styles.headerText }>{ headerMessage }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#313131'
    },
    headerText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#b5b5b5'
    }
})
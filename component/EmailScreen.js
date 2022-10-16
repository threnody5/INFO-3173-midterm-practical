import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from './Button';

export default function EmailScreen() {
    // [recipient, setRecipient] = useState();
    // [message, setMessage] = useState();

    // recipientOnChangeHandler = (value) => {
    //     setRecipient(value);
    // }

    // messageOnChangeHandler = (value) => {
    //     setMessage(value);
    // }

    // recipient
    // message

    return(
        <View style={ styles.form }>
            <View>
                <Text style={ styles.textEmail }>Email</Text>
                <TextInput
                style={ styles.recipientTextInput }
                // onChangeText={ recipientOnChangeHandler }
                />
            </View>
            <View>
                <Text style={ styles.textMessage }>Message</Text>
                <TextInput
                style={ styles.recipientTextMessage }
                multiline={true}
                numberOfLines={10}
                // onChangeText={ messageOnChangeHandler }
                />
            </View>
            <View>
                <Button title='Send Email' onPress={() => console.log('email button works')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        margin:30,
        marginTop: 60
      },
    recipientTextInput: {
        padding: 10,
        borderColor: '#0a3b67',
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2
    },
    recipientTextMessage: {
        paddingLeft: 10,
        borderColor: '#0a3b67',
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        marginBottom: 20
    },
    textEmail: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
        paddingBottom: 10,
        color: '#0a3b67'
    },
    textMessage: {
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
        paddingBottom: 10,
        color: '#0a3b67'
    }
})
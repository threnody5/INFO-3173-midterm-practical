import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import Button from '../../component/Button';
import { EmailScreenCSS } from './EmailScreenCSS';

export default function EmailScreen() {
    [recipient, setRecipient] = useState();
    [message, setMessage] = useState();

    recipientOnChangeHandler = (value) => {
        setRecipient(value);
    }

    messageOnChangeHandler = (value) => {
        setMessage(value);
    }

    sendMessageWithEmail = async () => {
        const isAvailable = await MailComposer.isAvailableAsync();
        if (!isAvailable) {
          Alert.alert('Email is not available');
          return;
        }
        var options = {
          recipients: [recipient],
          subject: 'My Subject Line',
          body: message
        };
        MailComposer.composeAsync(options)
        .then((result) => { 
            console.log(result.status); 
        })
    }

    return(
        <View style={ EmailScreenCSS.form }>
            <View>
                <Text style={ EmailScreenCSS.textEmail }>Email</Text>
                <TextInput
                style={ EmailScreenCSS.recipientTextInput }
                onChangeText={ recipientOnChangeHandler }
                />
            </View>
            <View>
                <Text style={ EmailScreenCSS.textMessage }>Message</Text>
                <TextInput
                style={ EmailScreenCSS.recipientTextMessage }
                multiline={ true }
                numberOfLines={ 10 }
                onChangeText={ messageOnChangeHandler }
                />
            </View>
            <View>
                <Button title='Send Email' onPress={ sendMessageWithEmail }/>
            </View>
        </View>
    )
}
import { StyleSheet } from 'react-native';

export const EmailScreenCSS = StyleSheet.create({
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
        marginBottom: 20,
        paddingTop: 10,
        textAlignVertical: 'top'
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
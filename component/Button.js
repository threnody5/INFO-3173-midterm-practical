import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function Button(props) {
    const { onPress, title } = props;

    return (
        <View style={ styles.buttonContainer }>
            <Pressable style={ styles.button } onPress={ onPress } >
                <Text style={ styles.buttonText }>{ title }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingTop: 30,
        paddingVertical: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#e5e5e5',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    button: {
        backgroundColor: '#0a3b67',
        paddingTop: 20,
        paddingBottom:20,
        borderRadius: 4,
    }
})
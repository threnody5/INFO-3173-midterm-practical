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
        width: '100%',
    },
    buttonText: {
        textAlign: 'center',
        color: '#313131',
        fontSize: 18,

    },
    button: {
        backgroundColor: '#b5b5b5',
        paddingTop: 20,
        paddingBottom:20,
        borderRadius: 4

    }
})
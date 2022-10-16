import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Button from './Button';

export default function HomeScreen({ navigation }) {

    const homeScreenMessage = 'Click the button below \n to send an Email';

    return (
        <View style={ styles.form }>
            <Header />
            <View style={ styles.container }>
                <Text style={ styles.homeScreenText }>{ homeScreenMessage }</Text>
            </View>
            <Button title='Send Email' onPress={ () => { navigation.navigate('Email') } } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        paddingBottom: 30,
        alignItems: 'center',
    },
    homeScreenText: {
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#67af97'
    },
    form: {
        flex: 1,
        margin: 30,
        marginTop: 60,
      }
})
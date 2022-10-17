import { View, Text } from 'react-native';
import { HomeScreenCSS } from './HomeScreenCSS';
import Header from '../../component/Header';
import Button from '../../component/Button';

export default function HomeScreen({ navigation }) {

    const homeScreenMessage = 'Click the button below \n to send an Email';

    return (
        <View style={ HomeScreenCSS.form }>
            <Header />
            <View style={ HomeScreenCSS.container }>
                <Text style={ HomeScreenCSS.homeScreenText }>{ homeScreenMessage }</Text>
            </View>
            <Button title='Go to email' onPress={ () => { navigation.navigate('Email') } } />
        </View>
    )
}
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './component/HomeScreen';
import EmailScreen from './component/EmailScreen';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
const scheme = useColorScheme();

console.log(scheme);

DarkTheme.colors = {
  primary: '#67af97',
  background: '#10002d',
  text: '#67af97',
  card: '#10002d',
}

  return (
    <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme }>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home' 
        component={ HomeScreen } 
        options={ { title: 'Home', HeaderTitleAlign: 'center', backgroundColor: 'black' } }
        />
        <Stack.Screen
        name='Email'
        component={ EmailScreen }
        options={ { title: 'Email', HeaderTitleAlign: 'center' } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
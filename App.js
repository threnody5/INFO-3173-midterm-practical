import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './component/HomeScreen';
import EmailScreen from './component/EmailScreen';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
const scheme = useColorScheme();

console.log(scheme);

DefaultTheme.colors = {
  background: '#e5e5e5',
  card: '#e5e5e5',
  text: '#0a3b67'
}

  return (
    <NavigationContainer theme={ DefaultTheme }>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home' 
        component={ HomeScreen } 
        options={ { title: 'Home', headerTitleAlign: 'center' } }
        />
        <Stack.Screen
        name='Email'
        component={ EmailScreen }
        options={ { title: 'Email', headerTitleAlign: 'center' } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
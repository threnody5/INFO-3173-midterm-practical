import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen/HomeScreen';
import EmailScreen from './screens/emailScreen/EmailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

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
        options={ { title: 'Send Email', headerTitleAlign: 'center' } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
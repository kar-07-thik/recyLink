import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import ChooseRoleScreen from '../screens/ChooseRoleScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ScrapCollectorTabNavigator from './ScrapCollectorTabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { session, isLoading } = useAuth();
  if (isLoading) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!session ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="ChooseRole" component={ChooseRoleScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : <Stack.Screen name="ScrapCollectorDashboard" component={ScrapCollectorTabNavigator} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

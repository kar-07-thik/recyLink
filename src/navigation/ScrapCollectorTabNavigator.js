import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { DrawerProvider } from '../context/DrawerContext';
import CollectorDashboardScreen from '../screens/ScrapCollector/Dashboard/CollectorDashboardScreen';
import AIScanScreen from '../screens/ScrapCollector/AIScan/AIScanScreen';
import PickupRequestsScreen from '../screens/ScrapCollector/PickupRequests/PickupRequestsScreen';
import MyPickupsScreen from '../screens/ScrapCollector/MyPickups/MyPickupsScreen';
import InventoryScreen from '../screens/ScrapCollector/Inventory/InventoryScreen';
import RecyclerScreen from '../screens/ScrapCollector/Recycler/RecyclerScreen';
import EarningsScreen from '../screens/ScrapCollector/Earnings/EarningsScreen';
import ProfileScreen from '../screens/ScrapCollector/Profile/ProfileScreen';
import RequestDetailsScreen from '../screens/ScrapCollector/PickupRequests/RequestDetailsScreen';

const Tab = createBottomTabNavigator();
const RequestStack = createNativeStackNavigator();
function PickupRequestsNavigator() { return <RequestStack.Navigator screenOptions={{ headerShown: false }}><RequestStack.Screen name="Requests" component={PickupRequestsScreen} /><RequestStack.Screen name="RequestDetails" component={RequestDetailsScreen} /></RequestStack.Navigator>; }
const tabs = [['Dashboard', '⌂', CollectorDashboardScreen], ['AI Scan', '◉', AIScanScreen], ['Pickup Requests', '↗', PickupRequestsNavigator], ['My Pickups', '✓', MyPickupsScreen], ['Inventory', '▦', InventoryScreen], ['Recycler', '♧', RecyclerScreen], ['Earnings', '₹', EarningsScreen], ['Profile', '○', ProfileScreen]];

export default function ScrapCollectorTabNavigator({ navigation }) {
  return (
    <DrawerProvider navigation={navigation}>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
        {tabs.map(([name, icon, component]) => <Tab.Screen key={name} name={name} component={component} options={{ tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>{icon}</Text> }} />)}
      </Tab.Navigator>
    </DrawerProvider>
  );
}


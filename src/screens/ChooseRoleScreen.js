import { Text, View } from 'react-native';
import { RoleCard } from '../components/RoleCard';
import { SafeScreen } from '../components/Screen';

export default function ChooseRoleScreen({ navigation }) {
  return (
    <SafeScreen className="bg-[#F5FBF5] px-6 pt-20">
      <Text className="text-4xl font-bold text-black">Choose role</Text>
      <Text className="mb-10 mt-3 text-base leading-6 text-black">How will you help materials move forward?</Text>
      <RoleCard icon="↻" title="Scrap Collector" description="Find pickup requests, collect materials, and earn on every route." onPress={() => navigation.navigate('Login', { role: 'collector' })} />
      <RoleCard icon="+" title="Recycler" description="Source quality scrap, manage incoming requests, and track inventory." onPress={() => navigation.navigate('Login', { role: 'recycler' })} />
    </SafeScreen>
  );
}

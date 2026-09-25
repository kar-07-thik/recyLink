import { Image, Text, View } from 'react-native';
import { Truck, Recycle } from 'lucide-react-native';
import { RoleCard } from '../components/RoleCard';
import { SafeScreen } from '../components/Screen';

const COLLECTOR_IMG = 'https://images.pexels.com/photos/37367055/pexels-photo-37367055.jpeg?auto=compress&cs=tinysrgb&h=400&w=600';
const RECYCLER_IMG = 'https://images.pexels.com/photos/38411739/pexels-photo-38411739.jpeg?auto=compress&cs=tinysrgb&h=400&w=600';

export default function ChooseRoleScreen({ navigation }) {
  return (
    <SafeScreen className="bg-[#f8fafc] px-6 pt-16">
      <Text className="text-3xl font-bold text-[#0f172a]">Choose your role</Text>
      <Text className="mb-8 mt-3 text-base leading-6 text-[#64748b]">
        How will you help materials move forward?
      </Text>
      <RoleCard
        icon={Truck}
        image={<Image source={{ uri: COLLECTOR_IMG }} className="h-full w-full" resizeMode="cover" />}
        title="Scrap Collector"
        description="Find pickup requests, collect materials, and earn on every route."
        onPress={() => navigation.navigate('Login', { role: 'collector' })}
      />
      <RoleCard
        icon={Recycle}
        image={<Image source={{ uri: RECYCLER_IMG }} className="h-full w-full" resizeMode="cover" />}
        title="Recycler"
        description="Source quality scrap, manage incoming requests, and track inventory."
        onPress={() => navigation.navigate('Login', { role: 'recycler' })}
      />
    </SafeScreen>
  );
}

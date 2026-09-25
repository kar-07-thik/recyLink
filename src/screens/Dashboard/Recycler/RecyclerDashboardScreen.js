import { ScrollView, Text, View } from 'react-native';
import { DashboardHeader } from '../../../components/DashboardHeader';
import { PrimaryButton } from '../../../components/PrimaryButton';
import { useAuth } from '../../../context/AuthContext';

const listings = [
  { material: 'Sorted cardboard', quantity: '180 kg', location: 'Sector 14' },
  { material: 'Aluminium cans', quantity: '65 kg', location: 'Market Road' },
];

export default function RecyclerDashboardScreen() {
  const { signOut } = useAuth();
  return (
    <ScrollView className="flex-1 bg-[#F5FBF5] px-6 pt-16">
      <DashboardHeader greeting="Welcome back" role="RECYCLER" onSignOut={signOut} />
      <View className="mb-8 flex-row gap-3">
        <View className="flex-1 rounded-3xl bg-[#2E7D32] p-5"><Text className="text-sm font-bold text-white">INVENTORY</Text><Text className="mt-2 text-3xl font-bold text-white">245 kg</Text><Text className="mt-1 text-sm text-white">Ready to process</Text></View>
        <View className="flex-1 rounded-3xl border border-[#D8E8D8] bg-white p-5"><Text className="text-sm font-bold text-black">COLLECTED</Text><Text className="mt-2 text-3xl font-bold text-black">18</Text><Text className="mt-1 text-sm text-black">This month</Text></View>
      </View>
      <Text className="mb-4 text-xl font-bold text-black">Incoming scrap</Text>
      {listings.map((listing) => (
        <View key={listing.material} className="mb-4 rounded-3xl border border-[#D8E8D8] bg-white p-5">
          <View className="flex-row items-start justify-between"><Text className="text-lg font-bold text-black">{listing.material}</Text><Text className="text-lg font-bold text-black">{listing.quantity}</Text></View>
          <Text className="mt-2 text-sm text-black">{listing.location}</Text>
          <View className="mt-5"><PrimaryButton onPress={() => {}}>Request collection</PrimaryButton></View>
        </View>
      ))}
    </ScrollView>
  );
}

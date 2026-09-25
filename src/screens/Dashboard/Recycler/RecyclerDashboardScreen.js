import { ScrollView, Text, View } from 'react-native';
import { Package, CheckCircle2, MapPin } from 'lucide-react-native';
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
    <ScrollView className="flex-1 bg-[#f8fafc] px-6 pt-16">
      <DashboardHeader greeting="Welcome back" role="RECYCLER" onSignOut={signOut} />
      <View className="mb-8 flex-row gap-3">
        <View className="flex-1 rounded-3xl bg-[#16a34a] p-5">
          <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-white/20">
            <Package color="#ffffff" size={20} />
          </View>
          <Text className="text-sm font-bold text-white/80">INVENTORY</Text>
          <Text className="mt-2 text-3xl font-bold text-white">245 kg</Text>
          <Text className="mt-1 text-sm text-white/80">Ready to process</Text>
        </View>
        <View className="flex-1 rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-black/5">
          <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4]">
            <CheckCircle2 color="#16a34a" size={20} />
          </View>
          <Text className="text-sm font-bold text-[#64748b]">COLLECTED</Text>
          <Text className="mt-2 text-3xl font-bold text-[#0f172a]">18</Text>
          <Text className="mt-1 text-sm text-[#64748b]">This month</Text>
        </View>
      </View>
      <Text className="mb-4 text-xl font-bold text-[#0f172a]">Incoming scrap</Text>
      {listings.map((listing) => (
        <View key={listing.material} className="mb-4 rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-black/5">
          <View className="flex-row items-start justify-between">
            <Text className="text-lg font-bold text-[#0f172a]">{listing.material}</Text>
            <Text className="text-lg font-bold text-[#16a34a]">{listing.quantity}</Text>
          </View>
          <View className="mt-2 flex-row items-center">
            <MapPin color="#94a3b8" size={14} />
            <Text className="ml-1 text-sm text-[#64748b]">{listing.location}</Text>
          </View>
          <View className="mt-5">
            <PrimaryButton onPress={() => {}}>Request collection</PrimaryButton>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

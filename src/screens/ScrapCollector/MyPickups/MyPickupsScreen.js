import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { MapPin, Navigation, Phone, Truck } from 'lucide-react-native';
import { Screen } from '../../../components/Screen';
import { StatusBadge } from '../../../components/StatusBadge';
import { StatusTimeline } from '../../../components/StatusTimeline';

const pickups = [
  { customer: 'Anita Sharma', location: 'Indiranagar', type: 'Laptop and cables', quantity: '4 items', date: 'Today, 4:30 PM', status: 'Accepted' },
  { customer: 'Green Office Hub', location: 'Koramangala', type: 'Mixed electronics', quantity: '12 kg', date: 'Tomorrow, 10:00 AM', status: 'Completed' },
];
const tabs = ['Upcoming', 'Active', 'Completed', 'Cancelled'];

export default function MyPickupsScreen() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Screen title="My Pickups">
      <View className="mb-5 flex-row rounded-2xl border border-[#e2e8f0] bg-white p-1">
        {tabs.map((tab, index) => (
          <Pressable key={tab} onPress={() => setActiveTab(index)} className="flex-1">
            <View className={`rounded-xl p-2 ${index === activeTab ? 'bg-[#16a34a]' : ''}`}>
              <Text className={`text-center text-xs font-bold ${index === activeTab ? 'text-white' : 'text-[#64748b]'}`}>
                {tab}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>

      {pickups.map((pickup) => (
        <View key={pickup.customer} className="mb-4 rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-black/5">
          <View className="flex-row justify-between">
            <Text className="text-lg font-bold text-[#0f172a]">{pickup.customer}</Text>
            <StatusBadge status={pickup.status} />
          </View>
          <View className="mt-3 flex-row items-center">
            <MapPin color="#94a3b8" size={14} />
            <Text className="ml-1 text-sm text-[#64748b]">{pickup.location} · {pickup.type}</Text>
          </View>
          <Text className="mt-1 text-sm text-[#64748b]">{pickup.quantity} · {pickup.date}</Text>
          <View className="mt-4">
            <StatusTimeline current={pickup.status === 'Completed' ? 5 : 2} />
          </View>
          <View className="mt-4 flex-row flex-wrap">
            <Pressable className="mr-2 mb-2 flex-row items-center rounded-xl bg-[#16a34a] px-3 py-3">
              <Truck color="#ffffff" size={16} style={{ marginRight: 6 }} />
              <Text className="font-bold text-white">Track Status</Text>
            </Pressable>
            <Pressable className="mr-2 mb-2 flex-row items-center rounded-xl border border-[#e2e8f0] px-3 py-3">
              <Navigation color="#0f172a" size={16} style={{ marginRight: 6 }} />
              <Text className="font-bold text-[#0f172a]">Navigate</Text>
            </Pressable>
            <Pressable className="mb-2 flex-row items-center rounded-xl border border-[#e2e8f0] px-3 py-3">
              <Phone color="#0f172a" size={16} style={{ marginRight: 6 }} />
              <Text className="font-bold text-[#0f172a]">Contact</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </Screen>
  );
}

import { Pressable, Text, View } from 'react-native';
import { MapPin, Phone, Check, X, ChevronRight } from 'lucide-react-native';
import { mockRequests } from '../../../api/scrapCollector';
import { Screen, SectionTitle } from '../../../components/Screen';
import { StatusBadge } from '../../../components/StatusBadge';

export default function PickupRequestsScreen({ navigation }) {
  return (
    <Screen title="Pickup Requests">
      <SectionTitle action="12 open">Nearby requests</SectionTitle>
      {mockRequests.map((request) => (
        <View key={request.id} className="mb-4 rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-black/5">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg font-bold text-[#0f172a]">{request.customer}</Text>
              <Text className="mt-1 text-xs text-[#64748b]">{request.id} · {request.date}</Text>
            </View>
            <StatusBadge status={request.status} />
          </View>
          <Text className="mt-4 text-sm text-[#0f172a]">{request.type} · {request.quantity}</Text>
          <View className="mt-1 flex-row items-center">
            <MapPin color="#94a3b8" size={14} />
            <Text className="ml-1 text-sm text-[#64748b]">{request.location}</Text>
          </View>
          <View className="mt-1 flex-row items-center">
            <Phone color="#94a3b8" size={14} />
            <Text className="ml-1 text-sm text-[#64748b]">{request.phone}</Text>
          </View>
          <View className="mt-4 flex-row">
            <Pressable className="mr-2 flex-1 flex-row items-center justify-center rounded-xl bg-[#16a34a] p-3">
              <Check color="#ffffff" size={16} style={{ marginRight: 6 }} />
              <Text className="font-bold text-white">Accept</Text>
            </Pressable>
            <Pressable className="mr-2 flex-row items-center rounded-xl border border-[#dc2626] px-4 py-3">
              <X color="#dc2626" size={16} style={{ marginRight: 6 }} />
              <Text className="font-bold text-[#dc2626]">Reject</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('RequestDetails', { request })}
              className="flex-row items-center rounded-xl border border-[#e2e8f0] px-3 py-3"
            >
              <Text className="font-bold text-[#0f172a]">Details</Text>
              <ChevronRight color="#0f172a" size={14} />
            </Pressable>
          </View>
        </View>
      ))}
    </Screen>
  );
}

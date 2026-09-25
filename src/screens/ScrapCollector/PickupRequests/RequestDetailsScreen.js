import { Text, View } from 'react-native';
import { MapPin, Package, Calendar, FileText, AlertCircle } from 'lucide-react-native';
import { Screen, SectionTitle } from '../../../components/Screen';
import { StatusBadge } from '../../../components/StatusBadge';
import { PrimaryButton } from '../../../components/PrimaryButton';

export default function RequestDetailsScreen({ route }) {
  const request = route.params?.request;
  return (
    <Screen title="Request Details">
      <View className="rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-black/5">
        <View className="flex-row justify-between">
          <Text className="text-2xl font-bold text-[#0f172a]">{request?.customer}</Text>
          <StatusBadge status="Pending" />
        </View>
        <Text className="mt-2 text-[#64748b]">{request?.phone}</Text>

        <SectionTitle>Collection details</SectionTitle>
        <View className="flex-row items-center">
          <MapPin color="#16a34a" size={16} />
          <Text className="ml-2 text-sm text-[#0f172a]">{request?.location}</Text>
        </View>
        <View className="mt-2 flex-row items-center">
          <Package color="#16a34a" size={16} />
          <Text className="ml-2 text-sm text-[#0f172a]">{request?.type} · {request?.quantity}</Text>
        </View>
        <View className="mt-2 flex-row items-center">
          <Calendar color="#16a34a" size={16} />
          <Text className="ml-2 text-sm text-[#0f172a]">Requested for {request?.date}</Text>
        </View>

        <SectionTitle>Address and map</SectionTitle>
        <View className="h-36 items-center justify-center rounded-2xl bg-[#f0fdf4]">
          <MapPin color="#16a34a" size={32} />
          <Text className="mt-2 text-sm text-[#64748b]">Map preview placeholder</Text>
        </View>

        <SectionTitle>Description</SectionTitle>
        <View className="flex-row">
          <FileText color="#64748b" size={16} style={{ marginTop: 2 }} />
          <Text className="ml-2 flex-1 leading-5 text-[#64748b]">
            Customer has sorted the items and placed them near the building entrance. Please call on arrival.
          </Text>
        </View>

        <SectionTitle>Special instructions</SectionTitle>
        <View className="flex-row">
          <AlertCircle color="#f59e0b" size={16} style={{ marginTop: 2 }} />
          <Text className="ml-2 flex-1 text-[#64748b]">Ask security for access to the loading bay.</Text>
        </View>

        <View className="mt-5">
          <PrimaryButton onPress={() => {}}>Accept Request</PrimaryButton>
        </View>
      </View>
    </Screen>
  );
}

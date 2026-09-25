import { Alert, Pressable, Text, View } from 'react-native';
import { User, ChevronRight, Phone, IdCard, MapPin, LogOut, Settings, Lock, Bell, UserCircle } from 'lucide-react-native';
import { Screen, SectionTitle } from '../../../components/Screen';
import { StatusBadge } from '../../../components/StatusBadge';
import { useAuth } from '../../../context/AuthContext';

const settings = [
  ['Edit Profile', UserCircle],
  ['Change Password', Lock],
  ['Notification Settings', Bell],
  ['Account Settings', Settings],
];

export default function ProfileScreen() {
  const { signOut } = useAuth();
  return (
    <Screen title="Profile">
      <View className="mb-5 items-center rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-sm shadow-black/5">
        <View className="mb-3 h-20 w-20 items-center justify-center rounded-full bg-[#16a34a]">
          <Text className="text-2xl font-bold text-white">AS</Text>
        </View>
        <Text className="text-2xl font-bold text-[#0f172a]">Anil Sharma</Text>
        <Text className="mt-1 text-[#64748b]">anil.sharma@example.com</Text>
        <View className="mt-3">
          <StatusBadge status="Completed" />
        </View>
      </View>

      <View className="mb-5 rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
        <View className="flex-row items-center">
          <Phone color="#16a34a" size={18} />
          <Text className="ml-3 flex-1 text-sm text-[#64748b]">Phone</Text>
          <Text className="font-bold text-[#0f172a]">+91 98765 43210</Text>
        </View>
        <View className="mt-3 flex-row items-center">
          <IdCard color="#16a34a" size={18} />
          <Text className="ml-3 flex-1 text-sm text-[#64748b]">Collector ID</Text>
          <Text className="font-bold text-[#0f172a]">RC-00428</Text>
        </View>
        <View className="mt-3 flex-row items-center">
          <MapPin color="#16a34a" size={18} />
          <Text className="ml-3 flex-1 text-sm text-[#64748b]">Service Area</Text>
          <Text className="font-bold text-[#0f172a]">Bengaluru East</Text>
        </View>
      </View>

      <SectionTitle>Settings</SectionTitle>
      {settings.map(([item, Icon]) => (
        <Pressable
          key={item}
          onPress={() => Alert.alert(item, 'This setting is ready for backend integration.')}
          className="mb-2 flex-row items-center justify-between rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5"
        >
          <View className="flex-row items-center">
            <View className="mr-3 h-9 w-9 items-center justify-center rounded-xl bg-[#f0fdf4]">
              <Icon color="#16a34a" size={18} />
            </View>
            <Text className="font-bold text-[#0f172a]">{item}</Text>
          </View>
          <ChevronRight color="#94a3b8" size={18} />
        </Pressable>
      ))}

      <Pressable
        onPress={signOut}
        className="mt-3 flex-row items-center justify-center rounded-2xl border-2 border-[#dc2626] p-4"
      >
        <LogOut color="#dc2626" size={18} style={{ marginRight: 8 }} />
        <Text className="font-bold text-[#dc2626]">Logout</Text>
      </Pressable>
    </Screen>
  );
}

import { Pressable, Text, View } from 'react-native';
import { Menu, Search, Bell } from 'lucide-react-native';
import { useAuth } from '../context/AuthContext';
import { useDrawer } from '../context/DrawerContext';

export function TopHeaderBar({ title }) {
  const { signOut } = useAuth();
  const { openDrawer } = useDrawer();
  return (
    <View className="flex-row items-center justify-between border-b border-[#e2e8f0] bg-white px-5 pb-4 pt-3">
      <View className="flex-row items-center">
        <Pressable
          accessibilityLabel="Open navigation menu"
          onPress={openDrawer}
          className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#f0fdf4]"
        >
          <Menu color="#0f172a" size={20} />
        </Pressable>
        <View>
          <Text className="text-xs font-bold uppercase tracking-widest text-[#16a34a]">COLLECTOR HUB</Text>
          <Text className="mt-1 text-2xl font-bold text-[#0f172a]">{title}</Text>
        </View>
      </View>
      <View className="flex-row items-center">
        <Pressable accessibilityLabel="Search" className="mr-2 h-10 w-10 items-center justify-center rounded-full bg-[#f8fafc]">
          <Search color="#64748b" size={18} />
        </Pressable>
        <Pressable accessibilityLabel="Notifications" className="mr-2 h-10 w-10 items-center justify-center rounded-full bg-[#f8fafc]">
          <Bell color="#64748b" size={18} />
        </Pressable>
        <Pressable
          accessibilityLabel="Profile"
          onPress={signOut}
          className="h-10 w-10 items-center justify-center rounded-full bg-[#16a34a]"
        >
          <Text className="font-bold text-white">AS</Text>
        </Pressable>
      </View>
    </View>
  );
}

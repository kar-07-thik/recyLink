import { Pressable, Text, View } from 'react-native';
import { Menu, LogOut } from 'lucide-react-native';
import { useDrawer } from '../context/DrawerContext';

export function DashboardHeader({ greeting, role, onSignOut }) {
  const { openDrawer } = useDrawer();
  return (
    <View className="mb-8 flex-row items-start justify-between">
      <View className="flex-row items-start">
        <Pressable
          accessibilityLabel="Open navigation menu"
          onPress={openDrawer}
          className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm shadow-black/5"
        >
          <Menu color="#0f172a" size={22} />
        </Pressable>
        <View>
          <Text className="text-sm font-bold text-[#16a34a]">{role}</Text>
          <Text className="mt-1 text-3xl font-bold text-[#0f172a]">{greeting}</Text>
        </View>
      </View>
      <Pressable
        onPress={onSignOut}
        className="h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm shadow-black/5"
      >
        <LogOut color="#dc2626" size={20} />
      </Pressable>
    </View>
  );
}

import { Pressable, Text, View } from 'react-native';
import { useDrawer } from '../context/DrawerContext';

export function DashboardHeader({ greeting, role, onSignOut }) {
  const { openDrawer } = useDrawer();
  return (
    <View className="mb-8 flex-row items-start justify-between">
      <View className="flex-row items-start">
        <Pressable accessibilityLabel="Open navigation menu" onPress={openDrawer} className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-[#EAF5EA]"><Text className="text-xl font-bold text-black">☰</Text></Pressable>
        <View>
          <Text className="text-sm font-bold text-black">{role}</Text>
          <Text className="mt-1 text-3xl font-bold text-black">{greeting}</Text>
        </View>
      </View>
      <Pressable onPress={onSignOut} className="h-11 w-11 items-center justify-center rounded-full bg-[#EAF5EA]">
        <Text className="text-lg font-bold text-black">↗</Text>
      </Pressable>
    </View>
  );
}

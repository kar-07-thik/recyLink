import { Pressable, Text, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useDrawer } from '../context/DrawerContext';

export function TopHeaderBar({ title }) {
  const { signOut } = useAuth();
  const { openDrawer } = useDrawer();
  return <View className="flex-row items-center justify-between border-b border-[#D8E8D8] bg-[#F5FBF5] px-5 pb-4 pt-3">
    <View className="flex-row items-center">
      <Pressable accessibilityLabel="Open navigation menu" onPress={openDrawer} className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-white"><Text className="text-2xl text-black">☰</Text></Pressable>
      <View><Text className="text-xs font-bold uppercase tracking-widest text-[#2E7D32]">COLLECTOR HUB</Text><Text className="mt-1 text-2xl font-bold text-black">{title}</Text></View>
    </View>
    <View className="flex-row items-center">
      <Pressable accessibilityLabel="Search" className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-white"><Text className="text-lg">⌕</Text></Pressable>
      <Pressable accessibilityLabel="Notifications" className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-white"><Text className="text-lg">♢</Text></Pressable>
      <Pressable accessibilityLabel="Profile" onPress={signOut} className="h-10 w-10 items-center justify-center rounded-full bg-[#2E7D32]"><Text className="font-bold text-white">AS</Text></Pressable>
    </View>
  </View>;
}

import { Text, View } from 'react-native';

export function ActivityItem({ icon, title, detail, time }) {
  return <View className="mb-3 flex-row items-center rounded-2xl bg-white p-4">
    <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5EA]"><Text className="text-lg">{icon}</Text></View>
    <View className="flex-1"><Text className="font-bold text-black">{title}</Text><Text className="mt-1 text-xs text-[#526052]">{detail}</Text></View>
    <Text className="text-xs text-[#526052]">{time}</Text>
  </View>;
}

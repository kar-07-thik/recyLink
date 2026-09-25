import { Text, View } from 'react-native';

export function StatCard({ label, value, accent = '#2E7D32' }) {
  return <View className="mr-3 min-w-[142px] rounded-2xl border border-[#D8E8D8] bg-white p-4">
    <View className="mb-3 h-2 w-8 rounded-full" style={{ backgroundColor: accent }} />
    <Text className="text-2xl font-bold text-black">{value}</Text>
    <Text className="mt-1 text-xs leading-4 text-[#526052]">{label}</Text>
  </View>;
}

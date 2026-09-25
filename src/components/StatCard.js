import { Text, View } from 'react-native';

export function StatCard({ label, value, accent = '#16a34a' }) {
  return (
    <View className="mr-3 min-w-[142px] rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
      <View className="mb-3 h-2 w-8 rounded-full" style={{ backgroundColor: accent }} />
      <Text className="text-2xl font-bold text-[#0f172a]">{value}</Text>
      <Text className="mt-1 text-xs leading-4 text-[#64748b]">{label}</Text>
    </View>
  );
}

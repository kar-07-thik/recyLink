import { Text, View } from 'react-native';

const palette = {
  Completed: ['#dcfce7', '#15803d'],
  Accepted: ['#dbeafe', '#1d4ed8'],
  Pending: ['#fef3c7', '#b45309'],
  Processing: ['#ccfbf1', '#0f766e'],
  Failed: ['#fee2e2', '#dc2626'],
  Cancelled: ['#f1f5f9', '#64748b'],
};

export function StatusBadge({ status }) {
  const [backgroundColor, color] = palette[status] || palette.Pending;
  return (
    <View className="self-start rounded-full px-3 py-1" style={{ backgroundColor }}>
      <Text className="text-xs font-bold" style={{ color }}>{status}</Text>
    </View>
  );
}

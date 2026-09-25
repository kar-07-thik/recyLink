import { Text, View } from 'react-native';

const palette = {
  Completed: ['#E7F5E8', '#216B28'],
  Accepted: ['#E5F0FF', '#245EA8'],
  Pending: ['#FFF3D6', '#916600'],
  Processing: ['#EDE8FF', '#5A43A4'],
  Failed: ['#FFE5E5', '#A92B2B'],
  Cancelled: ['#F0F0F0', '#606060'],
};

export function StatusBadge({ status }) {
  const [backgroundColor, color] = palette[status] || palette.Pending;
  return <View className="self-start rounded-full px-3 py-1" style={{ backgroundColor }}><Text className="text-xs font-bold" style={{ color }}>{status}</Text></View>;
}

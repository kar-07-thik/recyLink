import { Text, View } from 'react-native';
import { CheckCircle2, ScanLine, ArrowUpRight } from 'lucide-react-native';

const iconMap = {
  '✓': CheckCircle2,
  '◉': ScanLine,
  '↗': ArrowUpRight,
};

export function ActivityItem({ icon, title, detail, time }) {
  const Icon = iconMap[icon] || CheckCircle2;
  return (
    <View className="mb-3 flex-row items-center rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
      <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4]">
        <Icon color="#16a34a" size={20} />
      </View>
      <View className="flex-1">
        <Text className="font-bold text-[#0f172a]">{title}</Text>
        <Text className="mt-1 text-xs text-[#64748b]">{detail}</Text>
      </View>
      <Text className="text-xs text-[#94a3b8]">{time}</Text>
    </View>
  );
}

import { Pressable, Text, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

export function RoleCard({ title, description, icon: Icon, image, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="mb-4 overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-sm shadow-black/5"
    >
      {image && (
        <View className="h-32 w-full overflow-hidden">
          {image}
        </View>
      )}
      <View className="p-5">
        <View className="mb-4 h-12 w-12 items-center justify-center rounded-2xl bg-[#f0fdf4]">
          {Icon ? <Icon color="#16a34a" size={24} /> : <Text className="text-2xl">{icon}</Text>}
        </View>
        <Text className="text-lg font-bold text-[#0f172a]">{title}</Text>
        <Text className="mt-1 text-sm leading-5 text-[#64748b]">{description}</Text>
        <View className="mt-5 flex-row items-center">
          <Text className="text-sm font-bold text-[#16a34a]">Continue</Text>
          <ChevronRight color="#16a34a" size={16} strokeWidth={2.5} />
        </View>
      </View>
    </Pressable>
  );
}

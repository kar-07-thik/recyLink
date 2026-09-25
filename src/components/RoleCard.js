import { Pressable, Text, View } from 'react-native';

export function RoleCard({ title, description, icon, onPress }) {
  return (
    <Pressable onPress={onPress} className="mb-4 rounded-3xl border border-[#D8E8D8] bg-white p-5">
      <View className="mb-5 h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5EA]">
        <Text className="text-2xl">{icon}</Text>
      </View>
      <Text className="text-lg font-bold text-black">{title}</Text>
      <Text className="mt-1 text-sm leading-5 text-black">{description}</Text>
      <Text className="mt-5 text-sm font-bold text-black">Continue  {'>'}</Text>
    </Pressable>
  );
}

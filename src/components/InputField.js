import { Text, TextInput, View } from 'react-native';

export function InputField({ label, icon: Icon, ...props }) {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm font-semibold text-[#1e293b]">{label}</Text>
      <View className="h-14 flex-row items-center rounded-2xl border border-[#e2e8f0] bg-white px-4">
        {Icon && <Icon color="#94a3b8" size={20} style={{ marginRight: 10 }} />}
        <TextInput
          className="flex-1 text-base text-[#0f172a]"
          placeholderTextColor="#94a3b8"
          {...props}
        />
      </View>
    </View>
  );
}

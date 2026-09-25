import { Text, TextInput, View } from 'react-native';

export function InputField({ label, ...props }) {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm font-bold text-black">{label}</Text>
      <TextInput
        className="h-14 rounded-2xl border border-[#D8E8D8] bg-white px-4 text-base text-black"
        placeholderTextColor="#000000"
        {...props}
      />
    </View>
  );
}

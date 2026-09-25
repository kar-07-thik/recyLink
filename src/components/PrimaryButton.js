import { Pressable, Text } from 'react-native';

export function PrimaryButton({ children, onPress, variant = 'primary' }) {
  const isSecondary = variant === 'secondary';
  return (
    <Pressable
      onPress={onPress}
      className={`min-h-[54px] items-center justify-center rounded-2xl px-5 ${isSecondary ? 'border-2 border-[#2E7D32] bg-white' : 'bg-[#2E7D32]'}`}
    >
      <Text className={`text-base font-bold ${isSecondary ? 'text-black' : 'text-white'}`}>{children}</Text>
    </Pressable>
  );
}

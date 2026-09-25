import { Pressable, Text } from 'react-native';

export function PrimaryButton({ children, onPress, variant = 'primary' }) {
  const isSecondary = variant === 'secondary';
  return (
    <Pressable
      onPress={onPress}
      className={`min-h-[54px] items-center justify-center rounded-2xl px-5 ${isSecondary ? 'border-2 border-[#16a34a] bg-white' : 'bg-[#16a34a]'}`}
    >
      <Text className={`text-base font-bold ${isSecondary ? 'text-[#15803d]' : 'text-white'}`}>{children}</Text>
    </Pressable>
  );
}

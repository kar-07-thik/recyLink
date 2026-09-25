import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TopHeaderBar } from './TopHeaderBar';

export function SafeScreen({ children, className = '' }) {
  return <SafeAreaView className={`flex-1 ${className}`}>{children}</SafeAreaView>;
}

export function Screen({ title, children, scroll = true }) {
  const content = <View className="px-5 pb-8 pt-5">{children}</View>;
  return (
    <SafeScreen className="bg-[#f8fafc]">
      <TopHeaderBar title={title} />
      {scroll ? <ScrollView showsVerticalScrollIndicator={false}>{content}</ScrollView> : content}
    </SafeScreen>
  );
}

export function SectionTitle({ children, action }) {
  return (
    <View className="mb-3 mt-2 flex-row items-center justify-between">
      <Text className="text-lg font-bold text-[#0f172a]">{children}</Text>
      {action && <Text className="text-sm font-bold text-[#16a34a]">{action}</Text>}
    </View>
  );
}

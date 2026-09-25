import { Text, View } from 'react-native';

const stages = ['Requested', 'Accepted', 'Collector Assigned', 'On the Way', 'Collected', 'Completed'];

export function StatusTimeline({ current = 2 }) {
  return <View className="rounded-2xl bg-white p-4">
    {stages.map((stage, index) => <View key={stage} className="flex-row items-center">
      <View className={`h-3 w-3 rounded-full ${index <= current ? 'bg-[#2E7D32]' : 'bg-[#D8E8D8]'}`} />
      {index < stages.length - 1 && <View className={`absolute left-[5px] top-3 h-8 w-0.5 ${index < current ? 'bg-[#2E7D32]' : 'bg-[#D8E8D8]'}`} />}
      <Text className={`ml-3 py-2 text-sm ${index <= current ? 'font-bold text-black' : 'text-[#849184]'}`}>{stage}</Text>
    </View>)}
  </View>;
}

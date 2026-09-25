import { Text, View } from 'react-native';
import { Check } from 'lucide-react-native';

const stages = ['Requested', 'Accepted', 'Collector Assigned', 'On the Way', 'Collected', 'Completed'];

export function StatusTimeline({ current = 2 }) {
  return (
    <View className="rounded-2xl bg-white p-4">
      {stages.map((stage, index) => (
        <View key={stage} className="flex-row items-center">
          <View
            className={`h-3 w-3 rounded-full ${index <= current ? 'bg-[#16a34a]' : 'bg-[#e2e8f0]'}`}
          />
          {index < stages.length - 1 && (
            <View
              className={`absolute left-[5px] top-3 h-8 w-0.5 ${index < current ? 'bg-[#16a34a]' : 'bg-[#e2e8f0]'}`}
            />
          )}
          <Text className={`ml-3 py-2 text-sm ${index <= current ? 'font-bold text-[#0f172a]' : 'text-[#94a3b8]'}`}>
            {stage}
          </Text>
          {index === current && <Check color="#16a34a" size={14} style={{ marginLeft: 6 }} />}
        </View>
      ))}
    </View>
  );
}

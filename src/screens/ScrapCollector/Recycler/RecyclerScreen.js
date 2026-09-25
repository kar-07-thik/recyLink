import { Text, View } from 'react-native';
import { Recycle } from 'lucide-react-native';
import { Screen } from '../../../components/Screen';

export default function RecyclerScreen() {
  return (
    <Screen title="Recycler">
      <View className="flex-1 items-center justify-center py-24">
        <View className="mb-5 h-20 w-20 items-center justify-center rounded-3xl bg-[#f0fdf4]">
          <Recycle color="#16a34a" size={40} />
        </View>
        <Text className="text-center text-2xl font-bold text-[#0f172a]">Recycler Management</Text>
        <Text className="mt-2 text-center text-base text-[#64748b]">Coming Soon</Text>
      </View>
    </Screen>
  );
}

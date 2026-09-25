import { Text, View } from 'react-native';
import { Screen } from '../../../components/Screen';

export default function RecyclerScreen() {
  return <Screen title="Recycler"><View className="flex-1 items-center justify-center py-24"><View className="mb-5 h-20 w-20 items-center justify-center rounded-3xl bg-[#EAF5EA]"><Text className="text-4xl text-[#2E7D32]">♧</Text></View><Text className="text-center text-2xl font-bold text-black">Recycler Management</Text><Text className="mt-2 text-center text-base text-[#526052]">Coming Soon</Text></View></Screen>;
}

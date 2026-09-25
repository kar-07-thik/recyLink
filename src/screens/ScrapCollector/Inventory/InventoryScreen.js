import { Pressable, Text, View } from 'react-native';
import { Boxes, Scale, Package, CheckCircle2, Calendar, Cpu } from 'lucide-react-native';
import { mockInventory } from '../../../api/scrapCollector';
import { Screen, SectionTitle } from '../../../components/Screen';
import { StatusBadge } from '../../../components/StatusBadge';

const stats = [
  ['Total quantity', '27', Package],
  ['Total weight', '42 kg', Scale],
  ['Item count', '18', Boxes],
  ['Ready for recycler', '11', CheckCircle2],
];
const filters = ['All', 'Electronics', 'Batteries', 'Plastics', 'Metals', 'Cables', 'Other'];

export default function InventoryScreen() {
  return (
    <Screen title="Inventory">
      <View className="-mx-5 mb-4 flex-row pl-5">
        {stats.map(([label, value, Icon]) => (
          <View key={label} className="mr-3 min-w-[142px] rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
            <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4]">
              <Icon color="#16a34a" size={20} />
            </View>
            <Text className="text-2xl font-bold text-[#0f172a]">{value}</Text>
            <Text className="mt-1 text-xs leading-4 text-[#64748b]">{label}</Text>
          </View>
        ))}
      </View>

      <View className="mb-4 flex-row flex-wrap">
        {filters.map((filter, index) => (
          <Pressable key={filter} className={`mr-2 mb-2 rounded-full px-3 py-2 ${index === 0 ? 'bg-[#16a34a]' : 'bg-white border border-[#e2e8f0]'}`}>
            <Text className={`text-xs font-bold ${index === 0 ? 'text-white' : 'text-[#64748b]'}`}>{filter}</Text>
          </Pressable>
        ))}
      </View>

      <SectionTitle action="AI Scan Records">Your materials</SectionTitle>
      {mockInventory.map((item) => (
        <View key={item.name} className="mb-3 rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
          <View className="flex-row justify-between">
            <View className="flex-1">
              <View className="flex-row items-center">
                <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4]">
                  <Cpu color="#16a34a" size={18} />
                </View>
                <View>
                  <Text className="text-lg font-bold text-[#0f172a]">{item.name}</Text>
                  <Text className="mt-1 text-sm text-[#64748b]">{item.category} · {item.quantity} · {item.weight}</Text>
                </View>
              </View>
            </View>
            <Text className="font-bold text-[#16a34a]">{item.value}</Text>
          </View>
          <View className="mt-2 flex-row items-center">
            <Calendar color="#94a3b8" size={12} />
            <Text className="ml-1 text-xs text-[#64748b]">Added {item.date}</Text>
          </View>
          <View className="mt-3 flex-row">
            <StatusBadge status={item.recyclable ? 'Completed' : 'Pending'} />
            <View className="ml-2">
              <StatusBadge status={item.status === 'Ready for recycler' ? 'Accepted' : 'Pending'} />
            </View>
          </View>
        </View>
      ))}

      <SectionTitle>Inventory history</SectionTitle>
      <View className="rounded-2xl border border-[#e2e8f0] bg-white p-4">
        <Text className="text-sm leading-7 text-[#64748b]">
          20 Sep · Added Dell Latitude 5420{'\n'}18 Sep · Updated copper wire bundle{'\n'}14 Sep · Transferred batteries to handling queue
        </Text>
      </View>
    </Screen>
  );
}

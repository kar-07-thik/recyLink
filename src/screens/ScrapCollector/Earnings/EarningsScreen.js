import { Text, View } from 'react-native';
import { IndianRupee, TrendingUp, Clock, CheckCircle2 } from 'lucide-react-native';
import { mockTransactions } from '../../../api/scrapCollector';
import { Screen, SectionTitle } from '../../../components/Screen';
import { StatusBadge } from '../../../components/StatusBadge';

const stats = [
  ['Total earnings', '₹18,640', IndianRupee],
  ["Today's", '₹680', TrendingUp],
  ['Pending', '₹1,240', Clock],
  ['Completed', '₹17,400', CheckCircle2],
];

export default function EarningsScreen() {
  return (
    <Screen title="Earnings">
      <View className="-mx-5 mb-5 flex-row pl-5">
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

      <SectionTitle action="Monthly">Earnings trend</SectionTitle>
      <View className="mb-5 rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
        <View className="h-32 flex-row items-end justify-between">
          {[42, 64, 55, 84, 72, 98, 76].map((height, index) => (
            <View key={index} className="w-8 rounded-t-lg bg-[#16a34a]" style={{ height }} />
          ))}
        </View>
        <Text className="mt-3 text-xs text-[#64748b]">Daily · Weekly · Monthly</Text>
      </View>

      <SectionTitle>Breakdown</SectionTitle>
      <View className="mb-5 rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
        <Text className="text-sm leading-7 text-[#64748b]">
          Pickup commissions       <Text className="font-bold text-[#0f172a]">₹12,400</Text>{'\n'}
          Electronics                  <Text className="font-bold text-[#0f172a]">₹8,940</Text>{'\n'}
          Cables and metals          <Text className="font-bold text-[#0f172a]">₹6,120</Text>{'\n'}
          Weight incentive            <Text className="font-bold text-[#0f172a]">₹2,840</Text>
        </Text>
      </View>

      <SectionTitle>Transaction history</SectionTitle>
      {mockTransactions.map((transaction) => (
        <View key={transaction.id} className="mb-2 flex-row items-center rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
          <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4]">
            <IndianRupee color="#16a34a" size={18} />
          </View>
          <View className="flex-1">
            <Text className="font-bold text-[#0f172a]">{transaction.id} · {transaction.ref}</Text>
            <Text className="mt-1 text-xs text-[#64748b]">{transaction.date} · {transaction.type}</Text>
          </View>
          <View className="items-end">
            <Text className="font-bold text-[#0f172a]">{transaction.amount}</Text>
            <View className="mt-1">
              <StatusBadge status={transaction.status} />
            </View>
          </View>
        </View>
      ))}
    </Screen>
  );
}

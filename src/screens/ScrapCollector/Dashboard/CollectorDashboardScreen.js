import { ScrollView, Text, View } from 'react-native';
import { ScanLine, CheckCircle2, ArrowUpRight, IndianRupee, Package, TrendingUp, MapPin, ChevronRight } from 'lucide-react-native';
import { ActivityItem } from '../../../components/ActivityItem';
import { Screen, SectionTitle } from '../../../components/Screen';
import { StatCard } from '../../../components/StatCard';
import { StatusBadge } from '../../../components/StatusBadge';
import { mockDashboard } from '../../../api/scrapCollector';

const stats = [
  ['Total E-Waste', '186 kg', Package],
  ["Today's Pickups", '04', CheckCircle2],
  ['Pending Requests', '12', ArrowUpRight],
  ['Completed', '38', TrendingUp],
  ['Total Earnings', '₹18,640', IndianRupee],
];
const bars = [55, 74, 45, 88, 63, 92, 70];
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function CollectorDashboardScreen() {
  return (
    <Screen title="Dashboard">
      <Text className="mb-4 text-base text-[#64748b]">Good morning, Anil. Here is your collection pulse.</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-5 mb-5 pl-5">
        {stats.map(([label, value, Icon]) => (
          <View key={label} className="mr-3 min-w-[142px] rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
            <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4]">
              <Icon color="#16a34a" size={20} />
            </View>
            <Text className="text-2xl font-bold text-[#0f172a]">{value}</Text>
            <Text className="mt-1 text-xs leading-4 text-[#64748b]">{label}</Text>
          </View>
        ))}
      </ScrollView>

      <View className="mb-5 overflow-hidden rounded-3xl bg-[#16a34a] p-5">
        <View className="flex-row items-start justify-between">
          <View>
            <Text className="text-xs font-bold uppercase tracking-widest text-[#dcfce7]">AI SCAN SUMMARY</Text>
            <Text className="mt-2 text-3xl font-bold text-white">{mockDashboard.scans} scans</Text>
          </View>
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
            <ScanLine color="#ffffff" size={24} />
          </View>
        </View>
        <View className="mt-5 flex-row justify-between">
          <Text className="text-sm text-white/90">{mockDashboard.identified} identified</Text>
          <Text className="text-sm text-white/90">{mockDashboard.recyclable} recyclable</Text>
          <Text className="text-sm text-white/90">{mockDashboard.hazardous} hazardous</Text>
        </View>
      </View>

      <SectionTitle action="Weekly">Collection statistics</SectionTitle>
      <View className="mb-5 rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
        <View className="h-36 flex-row items-end justify-between">
          {bars.map((height, index) => (
            <View key={index} className="items-center">
              <View className="w-7 rounded-t-lg bg-[#22c55e]" style={{ height }} />
              <Text className="mt-2 text-xs text-[#64748b]">{days[index]}</Text>
            </View>
          ))}
        </View>
        <View className="mt-4 flex-row flex-wrap">
          <Text className="mr-5 text-xs text-[#64748b]">Electronics 42%</Text>
          <Text className="mr-5 text-xs text-[#64748b]">Metals 24%</Text>
          <Text className="text-xs text-[#64748b]">Cables 18%</Text>
        </View>
      </View>

      <SectionTitle>Recent activities</SectionTitle>
      <ActivityItem icon="✓" title="Pickup completed" detail="Green Office Hub · ₹680 earned" time="2h" />
      <ActivityItem icon="◉" title="New scan saved" detail="Laptop computer · 94% confidence" time="5h" />
      <ActivityItem icon="↗" title="Request accepted" detail="Anita Sharma · Today, 4:30 PM" time="1d" />

      <SectionTitle action="View all">Next pickup</SectionTitle>
      <View className="rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm shadow-black/5">
        <View className="flex-row justify-between">
          <Text className="text-lg font-bold text-[#0f172a]">Anita Sharma</Text>
          <StatusBadge status="Accepted" />
        </View>
        <View className="mt-2 flex-row items-center">
          <MapPin color="#94a3b8" size={14} />
          <Text className="ml-1 text-sm text-[#64748b]">Indiranagar · Laptop and cables · 4 items</Text>
        </View>
      </View>
    </Screen>
  );
}

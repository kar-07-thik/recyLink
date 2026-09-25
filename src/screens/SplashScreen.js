import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Recycle } from 'lucide-react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { SafeScreen } from '../components/Screen';

const HERO_IMAGE = 'https://images.pexels.com/photos/35812856/pexels-photo-35812856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function SplashScreen({ navigation }) {
  return (
    <SafeScreen className="flex-1 bg-[#f8fafc]">
      <StatusBar style="light" />
      <View className="flex-1">
        <ImageBackground
          source={{ uri: HERO_IMAGE }}
          className="h-[55%] w-full"
          imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
        >
          <View className="flex-1 justify-end bg-black/30" style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
            <View className="px-6 pb-8">
              <View className="mb-5 h-14 w-14 items-center justify-center rounded-2xl bg-[#16a34a]">
                <Recycle color="#ffffff" size={28} />
              </View>
              <Text className="text-4xl font-bold tracking-tight text-white">RecyLink</Text>
              <Text className="mt-2 text-lg text-white/80">Give e-waste a second life.</Text>
            </View>
          </View>
        </ImageBackground>

        <View className="flex-1 justify-between px-6 pb-10 pt-8">
          <View>
            <Text className="text-2xl font-bold leading-8 text-[#0f172a]">
              Connect collectors and recyclers to build cleaner communities.
            </Text>
            <Text className="mt-4 text-sm leading-6 text-[#64748b]">
              Scan, collect, and recycle electronic waste with AI-powered identification. Track pickups, manage inventory, and earn on every route.
            </Text>
          </View>
          <View>
            <PrimaryButton onPress={() => navigation.navigate('ChooseRole')}>Get Started</PrimaryButton>
            <Text className="mt-5 text-center text-xs font-bold text-[#94a3b8]">Team Invictuzz</Text>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}
